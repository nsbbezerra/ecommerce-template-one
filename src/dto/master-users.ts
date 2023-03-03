export interface MasterUsersDto {
  user: string;
  password: string;
}

export interface MasterUsersEntity {
  id: string;
  active: boolean;
  user: string;
  password?: string;
  created_at: Date | string;
}
