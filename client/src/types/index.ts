interface User {
  username: string;
}

interface AuthData {
  user: User;
}

interface Users {
  username: string;
}

interface UsersData {
  users: Users;
}

export interface RootState {
  authData: AuthData;
  usersData: UsersData;
}
