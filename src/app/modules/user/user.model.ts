export interface IUser {
  id: string;
  domain_uuid: string;
  username: string;
  password: string;
  full_name?: string;
  user_roles: UserRoles;
  enabled: boolean;
  description?: string;
  created_at: Date;
  updated_at: Date;
  version: number;
}

export enum UserRoles {
  admin = 1,
  user = 2
}