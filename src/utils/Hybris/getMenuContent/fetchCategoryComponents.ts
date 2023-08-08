import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';
import { CategoryComponents } from 'utils/Hybris/getMenuContent';
import { ItemId } from 'utils/Hybris/getMenuContent/getItemId';

async function fetchCategoryComponents(itemIdArray: ItemId[], localeSuffix: string): Promise<CategoryComponents> {
  const query = itemIdArray
    .map((item) => {
      const prefix = 'componentIds=';
      if (item.itemId) return prefix.concat(item.itemId).concat('&');
    })
    .join('');

  const categoryComponents: CategoryComponents = await apiFetch(
    `${BASESITE_URL}/cms/components?${query}pageSize=30&${localeSuffix}`,
  );
  return categoryComponents;
}
export default fetchCategoryComponents;
