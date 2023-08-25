declare namespace Hybris {
  interface Product {
    availableForPickup: boolean;
    averageRating: number;
    baseOptions: unknown;
    bundleTemplates: unknown;
    categories: Category[];
    classifications: Classification[];
    code: string;
    configurable: boolean;
    description: string;
    images: Image[];
    manufacturer: string;
    name: string;
    numberOfReviews: number;
    potentialPromotions: unknown;
    price: Price;
    priceRange: PriceRange;
    productReferences: unknown;
    purchasable: boolean;
    reviews: Review[];
    stock: Stock;
    summary: string;
    url: string;
  }
  interface Category {
    code: string;
    name: string;
    url: string;
  }
  interface Classification {
    code: string;
    features: Feature[];
    name: string;
  }
  interface Feature {
    code: string;
    comparable: boolean;
    featureUnit: FeatureUnit;
    featureValues: FeatureValue[];
    name: string;
    range: boolean;
  }
  interface FeatureUnit {
    name: string;
    symbol: string;
    unitType: string;
  }
  interface FeatureValue {
    value: string;
  }
  interface Image {
    altText: string;
    format: string;
    imageType: string;
    url: string;
    galleryIndex?: number;
  }
  interface Price {
    currencyIso: string;
    formattedValue: string;
    priceType: string;
    value: number;
  }
  interface Review {
    comment: string;
    date: string;
    headline: string;
    id: string;
    principal: Principal;
    rating: number;
  }
  interface Principal {
    name: string;
    uid: string;
  }
  interface Stock {
    isValueRounded: boolean;
    stockLevel: number;
    stockLevelStatus: string;
  }
}
