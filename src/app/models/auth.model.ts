import { UserRoles } from '../generics/user-role.model';

export interface IAuth {
  Id: number;
  role: UserRoles;
  isAdmin: boolean;
}