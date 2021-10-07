export interface Items {
    value: number;
    items: (ItemsEntity)[];
    totalizers?: (TotalizersEntity)[] | null;
    itemMetadata: ItemMetadata;
  }
  export interface ItemsEntity {
    uniqueId: string;
    id: string;
    productId: string;
    productRefId?: null;
    refId?: null;
    ean: string;
    name: string;
    skuName: string;
    modalType?: null;
    parentItemIndex?: null;
    parentAssemblyBinding?: null;
    assemblies?: (null)[] | null;
    priceValidUntil: string;
    tax: number;
    price: number;
    listPrice: number;
    manualPrice?: null;
    sellingPrice: number;
    rewardValue: number;
    isGift: boolean;
    additionalInfo: AdditionalInfo;
    preSaleDate?: null;
    productCategoryIds: string;
    productCategories: ProductCategories;
    quantity: number;
    seller: string;
    sellerChain?: (string)[] | null;
    imageUrl: string;
    detailUrl: string;
    components?: (null)[] | null;
    bundleItems?: (null)[] | null;
    attachments?: (null)[] | null;
    attachmentOfferings?: (null)[] | null;
    offerings?: (null)[] | null;
    priceTags?: (PriceTagsEntity)[] | null;
    availability: string;
    measurementUnit: string;
    unitMultiplier: number;
    manufacturerCode?: null;
  }
  export interface AdditionalInfo {
    brandName: string;
    brandId: string;
    offeringInfo?: null;
    offeringType?: null;
    offeringTypeId?: null;
  }
  export interface ProductCategories {
    29: string;
  }
  export interface PriceTagsEntity {
    name: string;
    value: number;
    rawValue: number;
    isPercentual: boolean;
    identifier: string;
  }
  export interface TotalizersEntity {
    id: string;
    name: string;
    value: number;
  }
  export interface ItemMetadata {
    items?: (ItemsEntity1)[] | null;
  }
  export interface ItemsEntity1 {
    id: string;
    seller: string;
    name: string;
    skuName: string;
    productId: string;
    refId?: null;
    ean: string;
    imageUrl: string;
    detailUrl: string;
    assemblyOptions?: (null)[] | null;
  }
  