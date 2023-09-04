declare namespace Hybris {
  interface PageContent {
    uid: string;
    uuid: string;
    title: string;
    template: string;
    interfaceCode: string;
    name: string;
    robotTag: string;
    contentSlots: ContentSlots;
    label: string;
  }
  interface ContentSlots {
    contentSlot: ContentSlot[];
  }
  interface ContentSlot {
    slotId: string;
    slotUuid: string;
    position: string;
    name: string;
    slotShared: boolean;
    components: Components;
  }
  interface Components {
    component: Component[];
  }
  interface Component {
    uid: string;
    uuid: string;
    interfaceCode: string;
    modifiedtime: string;
    name: string;
    container: string;
    effect?: string;
    banners?: string;
    media?: Media;
    urlLink?: string;
    scroll?: string;
    viewportPercentage?: string;
    strategy?: string;
    numberToDisplay?: string;
    popup?: string;
    productCodes?: string;
    title?: string;
    flexinterface?: string;
    wrapAfter?: string;
    navigationNode?: NavigationNode;
    external?: string;
    contentPage?: string;
    contentPageLabelOrId?: string;
    linkName?: string;
    url?: string;
    target?: string;
    shownProductCount?: string;
    totalDisplay?: string;
    lightboxBannerComponent?: LightboxBannerComponent;
    showLanguageCurrency?: string;
    notice?: string;
    content?: string;
    maxSuggestions?: string;
    maxProducts?: string;
    displaySuggestions?: string;
    displayProducts?: string;
    displayProductImages?: string;
    waitTimeBeforeRequest?: string;
    minCharactersBeforeRequest?: string;
    context?: string;
    categories?: string;
  }
  interface Media {
    code?: string;
    mime?: string;
    altText?: string;
    url?: string;
    tablet?: MediaDescription;
    desktop?: MediaDescription;
    mobile?: MediaDescription;
    widescreen?: MediaDescription;
  }
  interface MediaDescription {
    code: string;
    mime: string;
    altText: string;
    url: string;
  }
  interface NavigationNode {
    uid: string;
    uuid: string;
    entries: Entry[];
    children: NavigationNodeElement[];
  }
  interface NavigationNodeElement extends NavigationNode {
    title?: string;
  }
  interface Entry {
    itemId: string;
    itemSuperinterface: string;
    iteminterface: string;
  }
  interface LightboxBannerComponent {
    container: string;
    uid: string;
    external: string;
    name: string;
    media: LightboxMedia;
    uuid: string;
    interfaceCode: string;
  }
  interface LightboxMedia {
    code: string;
    mime: string;
    altText: string;
    url: string;
  }
  interface HeroComponentProps {
    media: {
      code: string;
      mime: string;
      altText: string;
      url: string;
    };
    headline: string;
    content: string;
    urlLink: string;
  }
  interface HeroComponentSearchProps {
    media: {
      code: string;
      mime: string;
      altText: string;
      url: string;
    };
    name: string;
  }
  interface LocaleOptions {
    defaultLanguage: Language;
    languageOptions: Language[];
    currencyOptions: Currency[];
  }
  interface Language {
    active: boolean;
    isocode: string;
    name: string;
    nativeName: string;
  }
  interface Currency {
    active: boolean;
    isocode: string;
    name: string;
    symbol: string;
  }
  interface MenuElements {
    itemId: string | null;
    uid: string;
    title: string;
    categoryCode: string | null;
    children: MenuElements[] | [];
    url: string;
  }
  interface FooterComponentProps {
    copyrightText: string | undefined;
    socialText: string | undefined;
    policyLinks: FooterLink[];
    socialLinks: FooterLink[];
  }
  interface FooterLink {
    key: string;
    name: string;
    url: string;
  }
  interface SearchResultResponse {
    type: string;
    freeTextSearch: string;
    pagination: Hybris.ComponentPagination;
    products: Hybris.SearchResultProduct[];
    sorts: Hybris.Sorts;
    facets: Hybris.Facets;
    breadcrumbs: Breadcrumbs;
  }
  interface Pagination {
    count: number;
    hasNext: boolean;
    hasPrevious: boolean;
    page: number;
    totalCount: number;
    totalPages: number;
  }
  interface SearchResultProduct {
    availableForPickup: boolean;
    averageRating: number;
    classifications: {
      code: string;
      features: {
        code: string;
        comparable: boolean;
        featureUnit: {
          name: string;
          symbol: string;
          unitType: string;
        };
        featureValues: {
          value: string;
        }[];
        name: string;
        range: boolean;
      }[];
      name: string;
    }[];
    code: string;
    configurable: boolean;
    configuratorType: string;
    description: string;
    firstVariantImage: string;
    images: {
      format: string;
      imageType: string;
      url: string;
    }[];
    manufacturer: string;
    multidimensional: boolean;
    name: string;
    price: {
      currencyIso: string;
      formattedValue: string;
      priceType: string;
      value: number;
    };
    priceRange: Record<string, never>;
    stock: {
      isValueRounded: boolean;
      stockLevelStatus: string;
    };
    summary: string;
    url: string;
    volumePricesFlag: boolean;
  }

  interface SortOption {
    code: string;
    name: string;
    selected: boolean;
  }
  interface ProductPagination {
    currentPage: number;
    pageSize: number;
    sort: string;
    totalPages: number;
    totalResults: number;
  }

  interface FilteredProduct {
    name: string;
    url: string;
    image: string | undefined;
    rating: number;
    code: string;
    price: string;
  }

  interface ProductsListProps {
    breadcrumbs: readonly Breadcrumb[];
    pagination: Hybris.ProductPagination;
    products: FilteredProduct[];
    sorts: Hybris.SortOption[];
    facets: Hybris.Facet[];
  }
  interface Sorts {
    code: string;
    name: string;
    selected: boolean;
  }
  interface Facet {
    category: boolean;
    multiSelect: boolean;
    name: string;
    priority: number;
    visible: boolean;
    values: FacetValue[];
  }
  interface FacetValue {
    count: number;
    name: string;
    query: Query;
    selected: boolean;
  }
  interface Breadcrumb {
    facetCode: string;
    facetName: string;
    facetValueCode: string;
    facetValueName: string;
    removeQuery: Query;
  }
  interface Query {
    query: {
      value: string;
    };
    url: string;
  }
}
