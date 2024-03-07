import { GetDiscussionCurrentUserQuery } from "../gql/graphql";
export type DiscussionType =
  GetDiscussionCurrentUserQuery["getDiscussionCurrentUser"][0];
export type UserDiscussionType = DiscussionType["User"];
export type DiscussGroupDiscussionType = DiscussionType["DiscussGroup"];
export type MessageDiscussionType = DiscussionType["messages"][0];

export type MessageGlobalApp = {
  openMessage: boolean;
  newMessageNbr: number;
  writters?: UserDiscussionType[];
  userDiscuss: UserDiscussionType | DiscussGroupDiscussionType;
} & DiscussionType;
