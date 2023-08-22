import buildMenu from 'utils/Hybris/getMenuContent/buildMenu';
import fetchCategoryComponents from 'utils/Hybris/getMenuContent/fetchCategoryComponents';
import getHomeLink from 'utils/Hybris/getMenuContent/getHomeLink';
import getItemId from 'utils/Hybris/getMenuContent/getItemId';

export interface CategoryComponents {
  component: {
    uid: string;
    uuid: string;
    typeCode: string;
    modifiedtime: string;
    name: string;
    container: boolean;
    external: boolean;
    categoryCode: string;
    category: string;
    linkName: string;
    url: string;
    target: boolean;
  }[];
  pagination: Hybris.Pagination;
}
/**
 * Fetches and filters required data to create menu.
 */

const getMenuContent = async (data: Hybris.PageContent, localeSuffix: string): Promise<Hybris.MenuElements[]> => {
  const homeLink = getHomeLink(data);
  const menuComponent = data.contentSlots.contentSlot
    .find((slot) => slot.slotId === 'NavigationBarSlot')
    ?.components.component.find((component) => component.uid === 'ElectronicsCategoryNavComponent')
    ?.navigationNode?.children;

  if (menuComponent && homeLink) {
    const itemIdArray = getItemId(menuComponent);
    const categoryComponents: CategoryComponents = await fetchCategoryComponents(itemIdArray, localeSuffix);
    const menu = buildMenu(itemIdArray, categoryComponents, menuComponent);
    return [homeLink, ...menu];
  }
  return [];
};
export default getMenuContent;
