interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type AdminOnly = Pick<User, 'id' | 'isAdmin'>;
type UserWithoutEmail = Omit<User, 'email'>;
type UserPartial = Partial<User>;
type UserID = Exclude<keyof User, 'email' | 'name'>; // id | isAdmin
