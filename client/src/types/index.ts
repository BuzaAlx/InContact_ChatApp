interface User {
  username: string;
}

interface AuthData {
  user: User;
}

export interface RootState {
  authData: AuthData;
}
