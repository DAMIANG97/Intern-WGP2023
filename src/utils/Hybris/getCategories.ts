import { CategoryComponentProps } from 'components/ProductCategories';
import apiFetch from 'utils/apiFetch';
import { BASE_URL, BASESITE_URL } from 'utils/Hybris/endpoints';

interface Category {
  code: string;
  name: string;
  url: string;
  description: string | null;
  image: CategoryImage | null;
  parentCategoryName: string;
  sequence: number;
}

interface CategoryImage {
  imageType: string | null;
  format: string;
  url: string | null;
  altText: string | null;
  galleryIndex: number;
  width: number;
}

const getCategories = async (
  data: Hybris.PageContent,
  localeSuffix: string,
): Promise<CategoryComponentProps[] | []> => {
  const categories = data.contentSlots.contentSlot
    .find((slot) => slot.slotId === 'PageContentSlot-Homepage')
    ?.components.component.find((component) => component.uid === 'Categories_homepage_AL')?.categories;

  if (categories) {
    const queryString = categories.replace(/\s+/g, ',');
    const url = `${BASESITE_URL}/categories/electronicsProductCatalog/Online/multiple/${queryString}?${localeSuffix}`;
    const content = await apiFetch<Category[]>(url);

    const filteredContent: CategoryComponentProps[] = content.map(({ code, name, url, image }) => ({
      key: code,
      name,
      url,
      image:
        image === null
          ? {
              url: '',
              altText: '',
            }
          : {
              url: image.url !== null ? `${BASE_URL}${image.url}` : '',
              altText: image.altText !== null ? image.altText : '',
            },
    }));

    return filteredContent;
  }
  return [];
};
export default getCategories;
