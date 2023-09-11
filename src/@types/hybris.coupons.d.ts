declare namespace Hybris {
  export interface Coupons {
    coupons: Coupon[];
    sorts: Sort[];
    pagination: Pagination;
  }
  export interface Coupon {
    couponId: string;
    name: string;
    startDate: string;
    endDate: string;
    status: string;
    description: string;
    notificationOn: boolean;
    allProductsApplicable: boolean;
  }
  export interface Sort {
    code: string;
    asc: boolean;
  }
}
