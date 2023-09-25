/* eslint-disable max-lines */
declare namespace Hybris {
  interface Cart {
    code: string;
    net: true;
    totalPriceWithTax: CartPrice;
    totalPrice: CartPrice;
    totalTax: CartPrice;
    deliveryCost: CartPrice;
    entries: CartEntry[];
    entryGroups: CartEntryGroup[];
    totalItems: number;
    deliveryMode: DeliveryMode;
    deliveryAddress: Address;
    paymentInfo: PaymentInfo;
    appliedOrderPromotions: Promotion[];
    appliedProductPromotions: Promotion[];
    productDiscounts: CartPrice;
    orderDiscounts: CartPrice;
    totalDiscounts: CartPrice;
    site: string;
    store: string;
    guid: string;
    calculated: boolean;
    appliedVouchers: AppliedVoucher[];
    user: Hybris.Principal;
    pickupOrderGroups: PickupOrderGroup[];
    deliveryOrderGroups: DeliveryOrderGroup[];
    pickupItemsQuantity: number;
    deliveryItemsQuantity: number;
    deliveryTimeSlot: { code: string; name: string };
    chinesePaymentInfo: ChinesePaymentInfo;
    paymentStatus: string;
    taxInvoice: TaxInvoice;
    totalUnitCount: number;
    potentialOrderPromotions: Promotion[];
    potentialProductPromotions: Promotion[];
    name: string;
    description: string;
    expirationTime: string;
    saveTime: string;
    savedBy: Hybris.Principal;
    costCenter: CostCenter;
    paymentType: PaymentType;
    purchaseOrderNumber: string;
    subTotal: CartPrice;
  }
  interface CartPrice {
    currencyIso: string;
    value: number;
    priceType: string;
    formattedValue: string;
    minQuantity?: number;
    maxQuantity?: number;
  }
  interface CartCategories extends Hybris.Category {
    image?: Hybris.Image;
  }
  interface Address {
    id: string;
    title: string;
    titleCode: string;
    firstName: string;
    lastName: string;
    companyName: string;
    line1: string;
    line2: string;
    town: string;
    region: Region;
    district: string;
    postalCode: string;
    phone: string;
    cellphone: string;
    email: string;
    country: CityAndCountry;
    shippingAddress: true;
    defaultAddress: true;
    visibleInAddressBook: true;
    formattedAddress: string;
    city: CityAndCountry;
    cityDistrict: CityAndCountry;
  }
  interface CartPrincipal extends Hybris.Principal {
    defaultAddress: Address;
    titleCode: string;
    title: string;
    firstName: string;
    lastName: string;
    currency: Hybris.Currency;
    language: Hybris.Language;
    displayUid: string;
    customerId: string;
    deactivationDate: string;
    defaultPointOfServiceName: string;
    orgUnit: string;
    roles: string[];
    approvers: string[];
    selected: boolean;
    active: boolean;
    email: string;
    mobileNumber: string;
    emailLanguage: string;
  }
  interface CartReviews extends Hybris.Review {
    alias?: string;
    principal: CartPrincipal;
  }
  interface CartProduct extends Hybris.Product {
    futureStocks?: [
      {
        stock: Hybris.Stock;
        date: string;
        formattedDate: string;
      },
    ];
    variantType?: string;
    baseProduct?: string;
    categories: CartCategories[];
    reviews?: CartReviews[];
    classifications?: CartClassification;
    potentialPromotions?: PromotionElement[];
    variantOptions?: VariantOption[];
    baseOptions: BaseOption[];
    volumePricesFlag?: true;
    volumePrices?: CartPrice[];
    productReferences?: ProductReference[];
    variantMatrix?: VariantMatrix[];
    priceRange?: CartPriceRange;
    multidimensional?: boolean;
    configuratorType?: string;
    tags?: string[];
    firstVariantCode?: string;
    firstVariantImage?: string;
    bundleTemplates?: BundleTemplate[];
    timedAccePromotion?: PromotionElement;
    price?: CartPrice;
    numberOfReviews?: number;
    summary?: string;
  }
  interface PromotionElement {
    code: string;
    title: string;
    promotionType: string;
    startDate: string;
    endDate: string;
    description: string;
    couldFireMessages: string[];
    firedMessages: string[];
    productBanner: Hybris.Image;
    enabled: boolean;
    priority: number;
    promotionGroup: string;
    restrictions: Restriction[];
  }
  interface Restriction {
    restrictionType: string;
    description: string;
  }
  interface CartClassification extends Hybris.Classification {
    features: CartFeatures[];
  }
  interface CartFeatures extends Hybris.Feature {
    description: string;
    type: string;
  }
  interface CityAndCountry {
    isocode: string;
    name: string;
  }
  interface Region extends CityAndCountry {
    isocodeShort: string;
    countryIso: string;
  }
  interface VariantOption {
    code: string;
    stock: Hybris.Stock;
    url: string;
    priceData: CartPrice;
    variantOptionQualifiers: VariantOptionQualifier[];
  }
  interface VariantOptionQualifier {
    qualifier: string;
    name: string;
    value: string;
    image: Hybris.Image;
  }
  interface BaseOption {
    variantType: string;
    options: VariantOption[];
    selected: VariantOption;
  }
  interface ProductReference {
    referenceType: string;
    description: string;
    quantity: number;
    target: string;
    preselected: true;
  }
  interface VariantMatrix {
    variantValueCategory: VariantValueCategory;
    parentVariantCategory: ParentVariantCategoryElement;
    variantOption: VariantOption;
    elements: string[];
    isLeaf: boolean;
  }
  interface ParentVariantCategoryElement {
    name: string;
    hasImage: boolean;
    priority: number;
  }
  interface VariantValueCategory {
    name: string;
    sequence: number;
    superCategories: ParentVariantCategoryElement[];
  }
  interface CartPriceRange {
    maxPrice: CartPrice;
    minPrice: CartPrice;
  }
  interface BundleTemplate {
    id: string;
    name: string;
    rootBundleTemplateName: string;
  }
  interface CartEntry {
    entryNumber: number;
    quantity: number;
    basePrice: CartPrice;
    totalPrice: CartPrice;
    product: CartProduct;
    updateable: boolean;
    deliveryMode?: DeliveryMode;
    configurationInfos: ConfigurationInfo[];
    statusSummaryList: StatusSummaryList[];
    deliveryPointOfService?: DeliveryPointOfService;
    cancelledItemsPrice?: CartPrice;
    cancellableQuantity: number;
    returnedItemsPrice?: CartPrice;
    returnableQuantity: number;
    comments?: EntryComment[];
    url?: string;
    quantityAllocated?: number;
    quantityUnallocated?: number;
    quantityCancelled?: number;
    quantityPending?: number;
    quantityShipped?: number;
    quantityReturned?: number;
  }
  interface EntryComment {
    text: string;
    creationDate: string;
    author: Hybris.Principal;
    fromCustomer: boolean;
  }
  interface ConfigurationInfo {
    configuratorType: string;
    status: string;
    configurationLabel: string;
    configurationValue: string;
  }
  interface DeliveryMode {
    code: string;
    name: string;
    description: string;
    deliveryCost: CartPrice;
  }
  interface StatusSummaryList {
    status: string;
    numberOfIssues: number;
  }
  interface DeliveryPointOfService {
    name: string;
    displayName: string;
    url: string;
    description: string;
    openingHours: OpeningHours;
    storeContent: string;
    features: Features;
    geoPoint: GeoPoint;
    formattedDistance: string;
    distanceKm: number;
    mapIcon: Hybris.Image;
    address: Address;
    storeImages: Hybris.Image[];
    pickUpInStoreInstructions: string;
    warehouseCodes: string[];
  }
  interface GeoPoint {
    latitude: number;
    longitude: number;
  }
  interface Features {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  }
  interface OpeningHours {
    name: string;
    code: string;
    weekDayOpeningList: WeekDayOpeningList[];
    specialDayOpeningList: SpecialDayOpeningList[];
  }
  interface OpeningTime {
    hour: string;
    minute: string;
    formattedHour: string;
  }
  interface WeekDayOpeningList {
    openingTime: OpeningTime;
    closingTime: OpeningTime;
    weekDay: string;
    closed: boolean;
  }
  interface SpecialDayOpeningList {
    openingTime: OpeningTime;
    closingTime: OpeningTime;
    date: string;
    formattedDate: string;
    closed: boolean;
    name: string;
    comment: string;
  }
  interface CartEntryGroup {
    entries: CartEntry[];
    entryGroups: string[];
    entryGroupNumber: number;
    label: string;
    erroneous: boolean;
    type: string;
  }
  interface Promotion {
    description: string;
    promotion: PromotionElement;
    consumedEntries: ConsumedEntry[];
  }
  interface ConsumedEntry {
    code: string;
    adjustedUnitPrice: number;
    orderEntryNumber: number;
    quantity: number;
  }
  interface PaymentInfo {
    id: string;
    accountHolderName: string;
    cardType: { code: string; name: string };
    cardNumber: string;
    startMonth: string;
    startYear: string;
    expiryMonth: string;
    expiryYear: string;
    issueNumber: string;
    subscriptionId: string;
    saved: boolean;
    defaultPayment: boolean;
    billingAddress: Address;
  }
  interface AppliedVoucher {
    code: string;
    voucherCode: string;
    name: string;
    description: string;
    value: number;
    valueFormatted: string;
    valueString: string;
    freeShipping: boolean;
    currency: Hybris.Currency;
    appliedValue: CartPrice;
  }

  interface PickupOrderGroup {
    totalPriceWithTax: CartPrice;
    entries: CartEntry[];
    quantity: number;
    deliveryPointOfService: DeliveryPointOfService;
    distance: number;
  }
  interface DeliveryOrderGroup {
    totalPriceWithTax: CartPrice;
    entries: CartEntry[];
    quantity: number;
    deliveryAddress: Address;
  }
  interface ChinesePaymentInfo {
    id: string;
    paymentProvider: string;
    serviceType: string;
    paymentProviderLogo: string;
    paymentProviderName: string;
  }
  interface TaxInvoice {
    recipientType: string;
    recipient: string;
    taxpayerID: string;
  }
  interface CostCenter {
    name: string;
    activeFlag: boolean;
    code: string;
    currency: Hybris.Currency;
    unit: string;
    assignedBudgets: AssignedBudget[];
  }
  interface AssignedBudget {
    active: boolean;
    budget: number;
    code: string;
    name: string;
    currency: Hybris.Currency;
    startDate: string;
    endDate: string;
    selected: boolean;
  }
  interface PaymentType {
    code: string;
    displayName: string;
  }
}
