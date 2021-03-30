export interface Message {
  uuid: string;
  from: string;
  to: string;
  content: string;
  createdAt: string;
  reactions?: any[];
}

export interface NewMessage {
  newMessage: Message;
}

export interface ReactionMessage {
  uuid: string;
  from: string;
  to: string;
}

export interface Reaction {
  uuid: string;
  content: string;
  message: ReactionMessage;
}

export interface NewReaction {
  newReaction: Reaction;
}
