import { ProductOptionsEntity } from "./products-options";

export interface ProductsEntityDto {
  id?: string;
  name: string;
  slug: string;
  active: boolean;
  short_description: string | null;
  thumbnail?: string | null;
  thumbnail_id?: string | null;
  description?: string;
  price: string;
  request?: number;
  promotional?: boolean;
  promo_rate?: number;
  shipping_info?: any;
  freight_priority: string;
  created_at?: Date;
  category_id: string;
  collection_id: string;
  stock_type?: string;
  stock?: string | null;
}

interface ShippingInfoProps {
  width: string;
  height: string;
  lenght: string;
  weight: string;
}

export interface ProductsWithRelationshipEntity {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  short_description: string | null;
  thumbnail?: string | null;
  thumbnail_id?: string | null;
  description: string;
  price: string;
  request: number;
  promotional: boolean;
  promo_rate: number;
  shipping_info: ShippingInfoProps;
  freight_priority: "FAST" | "NORMAL";
  created_at: Date;
  category: { id: string; name: string };
  collection: { id: string; name: string };
  ProductOptions: ProductOptionsEntity[];
  stock_type?: string;
  stock?: string | null;
}
