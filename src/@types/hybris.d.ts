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
  }
}
