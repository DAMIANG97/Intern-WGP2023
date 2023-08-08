import { CategoryComponents } from 'utils/Hybris/getMenuContent';
import { ItemId } from 'utils/Hybris/getMenuContent/getItemId';

function buildMenu(
  itemIdArray: ItemId[],
  categoryComponents: CategoryComponents,
  menuComponent: Hybris.NavigationNodeElement[],
): Hybris.MenuElements[] {
  const menuElements = itemIdArray.map((elem) => {
    const component = categoryComponents.component.find((component) => component.uid === elem.itemId);
    if (component) {
      return {
        categoryCode: component.categoryCode,
        title: elem.checkedTitle ? elem.checkedTitle : component.linkName,
        uid: elem.uid,
        itemId: elem.itemId,
      } as Hybris.MenuElements;
    } else {
      return {
        categoryCode: null,
        title: elem.checkedTitle,
        uid: elem.uid,
        itemId: elem.itemId,
      } as Hybris.MenuElements;
    }
  });

  const menu = menuComponent.map((elem) => {
    const matchedMenuElement = menuElements.find((filteredElem) => filteredElem.uid === elem.uid);
    if (matchedMenuElement) {
      const childArray: Hybris.MenuElements[] = [];
      if (elem.children.length > 0) {
        elem.children.map((child) => {
          const childElemenet = menuElements.find((menuElem) => menuElem.uid === child.uid);
          const grandchildArray: Hybris.MenuElements[] = [];
          if (child.children.length > 0) {
            child.children.map((grandchild) => {
              const grandchildElement = menuElements.find((menuElem) => menuElem.uid === grandchild.uid);
              if (grandchildElement) {
                grandchildArray.push(grandchildElement);
              }
            });
          }
          if (childElemenet) {
            const childWithGrandchild = { ...childElemenet, children: [...grandchildArray] };
            childArray.push(childWithGrandchild);
          }
        });
      }
      return { ...matchedMenuElement, children: [...childArray] };
    }
    return {
      itemId: elem.entries[0].itemId,
      uid: elem.uid,
      title: elem.title,
      categoryCode: null,
      children: [],
    } as Hybris.MenuElements;
  });
  return menu;
}

export default buildMenu;
