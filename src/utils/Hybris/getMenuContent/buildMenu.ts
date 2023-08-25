import { LINK_PREFIX } from 'utils/Hybris/endpoints';
import { CategoryComponents } from 'utils/Hybris/getMenuContent';
import { ItemId } from 'utils/Hybris/getMenuContent/getItemId';

function createMenuNesting(elem: Hybris.NavigationNodeElement, menuElements: Hybris.MenuElements[]) {
  const array: Hybris.MenuElements[] = [];
  if (elem.children.length > 0) {
    elem.children.map((child) => {
      const childElement = menuElements.find((menuElem) => menuElem.uid === child.uid);
      const childArray = createMenuNesting(child, menuElements);
      if (childElement) {
        const elemWithChild = { ...childElement, children: [...childArray] };
        array.push(elemWithChild);
      }
    });
  }
  return array;
}

function createMenuElementURL(categoryCode: string | null) {
  const url = !categoryCode
    ? ''
    : `${categoryCode.includes('brand') ? LINK_PREFIX.brand : LINK_PREFIX.category}${categoryCode}`;
  return url;
}

function createMenuElements(itemIdArray: ItemId[], categoryComponents: CategoryComponents): Hybris.MenuElements[] {
  return itemIdArray.map((elem) => {
    const component = categoryComponents.component.find((component) => component.uid === elem.itemId);
    if (component) {
      return {
        categoryCode: component.categoryCode,
        title: elem.checkedTitle ? elem.checkedTitle : component.linkName,
        uid: elem.uid,
        itemId: elem.itemId,
        children: [],
        url: createMenuElementURL(component.categoryCode),
      };
    } else {
      return {
        categoryCode: null,
        title: elem.checkedTitle ? elem.checkedTitle : '',
        uid: elem.uid,
        itemId: elem.itemId,
        children: [],
        url: createMenuElementURL(null),
      };
    }
  });
}

function buildMenu(
  itemIdArray: ItemId[],
  categoryComponents: CategoryComponents,
  menuComponent: Hybris.NavigationNodeElement[],
): Hybris.MenuElements[] {
  const menuElements = createMenuElements(itemIdArray, categoryComponents);

  const menu = menuComponent.map((elem) => {
    const matchedMenuElement = menuElements.find((filteredElem) => filteredElem.uid === elem.uid);
    if (matchedMenuElement) {
      const childArray: Hybris.MenuElements[] = createMenuNesting(elem, menuElements);
      return { ...matchedMenuElement, children: [...childArray] };
    }
    return {
      itemId: elem.entries[0].itemId,
      uid: elem.uid,
      title: elem.title ? elem.title : '',
      categoryCode: null,
      children: [],
      url: '',
    };
  });
  return menu;
}

export default buildMenu;
