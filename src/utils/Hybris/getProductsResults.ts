import { ParsedUrlQuery } from 'querystring';
import apiFetch from 'utils/apiFetch';
import { BASE_URL, BASESITE_URL } from 'utils/Hybris/endpoints';

interface ProductsResponse {
  pagination: Hybris.ProductPagination;
  products: Hybris.Product[];
  sorts: Hybris.SortOption[];
  facets: Hybris.Facet[];
  type: string;
  breadcrumbs: Breadcrumbs[];
  currentQuery: CurrentQuery;
  freeTextSearch: string;
}
interface Breadcrumbs {
  facetCode: string;
  facetName: string;
  facetValueCode: string;
  facetValueName: string;
  removeQuery: {
    query: {
      value: string;
    };
    url: string;
  };
}
interface CurrentQuery {
  query: {
    value: string;
  };
  url: string;
}

function filterProductArray(products: Hybris.Product[]): Hybris.FilteredProduct[] {
  return products.map((product) => ({
    name: product.name,
    image: product.images?.find((image) => image.format === 'product')?.url
      ? `${BASE_URL}${product.images.find((image) => image.format === 'product')?.url}`
      : '',
    url: `/product/${product.code}`,
    rating: product.averageRating ?? null,
    price: product.price.formattedValue,
    code: product.code,
  }));
}

function filterContent(content: ProductsResponse): Hybris.ProductsListProps {
  return {
    pagination: content.pagination,
    products: filterProductArray(content.products),
    sorts: content.sorts,
    facets: content.facets,
    breadcrumbs: content.breadcrumbs,
  };
}

const getProductsResults = async (localeSuffix: string, query: ParsedUrlQuery) => {
  const params = new URLSearchParams({
    fields: 'FULL',
    sort: query.sort ? `${query.sort}` : 'relevance',
    pageSize: query.pageSize ? `${query.pageSize}` : '20',
    currentPage: query.currentPage ? `${query.currentPage}` : '0',
  });

  params.append('query', `${query.query}` || '');

  const searchUrl = `${BASESITE_URL}/products/${query.categoryId}/?${localeSuffix}&${params.toString()}`;
  const content: ProductsResponse = await apiFetch(searchUrl);
  const filteredContent: Hybris.ProductsListProps = filterContent(content);
  return filteredContent;
};

export default getProductsResults;
