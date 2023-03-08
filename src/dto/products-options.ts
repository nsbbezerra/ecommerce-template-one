export interface ProductOptionsEntity {
  id: string;
  headline: string;
  content: string;
  stock: string | null;
  created_at?: Date;
  product_id: string | null;
}
