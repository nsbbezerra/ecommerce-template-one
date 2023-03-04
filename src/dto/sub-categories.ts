export interface CollectionsDto {
  id?: string;
  name: string;
  slug: string;
  active: boolean;
  category_id: string;
}

export interface CollectionsEntity {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  created_at: Date;
  category_id: string;
}

export interface CollectionsWithRelationshipEntity {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  created_at: Date;
  category_id: string;
  category: {
    name: string;
  };
}
