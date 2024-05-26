export type UserRole = 'ADMIN' | 'USER';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

// export interface Credentials {
//   email: string;
//   password: string;
// }
// export interface Login {
//   access_token: string;
// }
// export interface User {
//   id: string;
//   email: string;
//   password: string;
//   name: string;
// }
