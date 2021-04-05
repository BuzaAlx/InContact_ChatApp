import { Message } from "../Pages/Home";

export interface User {
  username: string;
  createdAt: string;
  imageUrl: string;
  latestMessage: Message;
  selected?: boolean;
  getUsers: any[];
  messages: Message[];
}

export interface GetUsersData {
  getUsers: User[];
}
