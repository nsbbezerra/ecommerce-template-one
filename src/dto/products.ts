export interface ProductsEntityDto {
  id?: string;
  name: string;
  slug: string;
  active: boolean;
  short_description: string | null;
  thumbnail?: string | null;
  thumbnail_id?: string | null;
  description: string;
  price: string;
  request?: number;
  promotional?: boolean;
  promo_rate?: number;
  shipping_info?: any;
  freight_priority: string;
  created_at?: Date;
  category_id: string;
  collection_id: string;
}

export interface ProductsWithRelationshipEntity {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  short_description: string | null;
  thumbnail?: string | null;
  thumbnail_id: string | null;
  description: string;
  price: string;
  request: number;
  promotional: boolean;
  promo_rate: number;
  shipping_info: any;
  freight_priority: "FAST" | "NORMAL";
  created_at: Date;
  category: { id: string; name: string };
  collection: { id: string; name: string };
}
