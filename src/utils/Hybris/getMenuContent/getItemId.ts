export interface ItemId {
  itemId: string | null;
  uid: string;
  checkedTitle: string | null;
}

function getItemId(array: Hybris.NavigationNodeElement[]): ItemId[] {
  const ids = array.map(({ uid, entries, title }) => {
    const itemId = entries.map((entry) => entry.itemId);
    const checkedTitle = title ? title : null;
    const stringItemId = itemId[0] === undefined ? null : itemId[0];
    return { itemId: stringItemId, uid, checkedTitle };
  });
  return ids;
}

function createItemIdArray(menuComponent: Hybris.NavigationNodeElement[]): ItemId[] {
  const itemIdArray = getItemId(menuComponent);
  menuComponent.map(({ children }) => {
    const childItemId = getItemId(children);
    itemIdArray.push(...childItemId);
    children.map((child) => {
      const grandchildItemId = getItemId(child.children);
      grandchildItemId.map((item) => itemIdArray.push(item));
    });
  });
  return itemIdArray;
}
export default createItemIdArray;
