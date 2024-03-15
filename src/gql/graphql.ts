/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export enum CallStatus {
  Ended = "ENDED",
  Pending = "PENDING",
}

export type CommentCount = {
  __typename?: "CommentCount";
  files: Scalars["Int"]["output"];
};

/** input for the comment */
export type CommentInput = {
  content: Scalars["String"]["input"];
  files: Array<FileInput>;
};

/** response type for comment */
export type CommentResponse = {
  __typename?: "CommentResponse";
  data?: Maybe<Array<CommentWithUser>>;
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

/** comment with user */
export type CommentWithUser = {
  __typename?: "CommentWithUser";
  Post: Post;
  User: User;
  _count?: Maybe<CommentCount>;
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  files: Array<FileExt>;
  id: Scalars["Int"]["output"];
  postId: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

export type DiscussGroup = {
  __typename?: "DiscussGroup";
  _count?: Maybe<DiscussGroupCount>;
  coverPhoto?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  discussionId: Scalars["Int"]["output"];
  groupName: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type DiscussGroupCount = {
  __typename?: "DiscussGroupCount";
  groupeMessages: Scalars["Int"]["output"];
  members: Scalars["Int"]["output"];
};

/** discuss group with discussion */
export type DiscussGroupDiscussion = {
  __typename?: "DiscussGroupDiscussion";
  Discussion: Discussion;
  _count?: Maybe<DiscussGroupCount>;
  coverPhoto?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  discussionId: Scalars["Int"]["output"];
  groupName: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

/** user choose */
export type DiscussGroupInput = {
  coverPhoto?: InputMaybe<Scalars["String"]["input"]>;
  groupName: Scalars["String"]["input"];
};

export type Discussion = {
  __typename?: "Discussion";
  _count?: Maybe<DiscussionCount>;
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  receiverId?: Maybe<Scalars["Int"]["output"]>;
  theme: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

export type DiscussionCount = {
  __typename?: "DiscussionCount";
  messages: Scalars["Int"]["output"];
};

/** Object that extends the discussion base models */
export type DiscussionExtend = {
  __typename?: "DiscussionExtend";
  DiscussGroup?: Maybe<GroupWithMembers>;
  Receiver?: Maybe<User>;
  User: User;
  _count?: Maybe<DiscussionCount>;
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  messages: Array<MessageWithRecepter>;
  receiverId?: Maybe<Scalars["Int"]["output"]>;
  theme: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

/** input for changing theme discussion */
export type DiscussionInput = {
  id: Scalars["Float"]["input"];
  receiverId?: InputMaybe<Scalars["Float"]["input"]>;
  theme: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
};

export type FileExt = {
  __typename?: "FileExt";
  commentId?: Maybe<Scalars["Int"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  extension: Scalars["String"]["output"];
  groupId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  messageId?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  postId?: Maybe<Scalars["Int"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  url: Scalars["String"]["output"];
};

/** input for file */
export type FileInput = {
  extension: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
};

export type FriendRequest = {
  __typename?: "FriendRequest";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  receiverId: Scalars["Int"]["output"];
  status: RequestStatus;
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

/** friend request return type with sender */
export type FriendRequestExtend = {
  __typename?: "FriendRequestExtend";
  User: User;
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  receiverId: Scalars["Int"]["output"];
  status: RequestStatus;
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

/** group with members */
export type GroupWithMembers = {
  __typename?: "GroupWithMembers";
  _count?: Maybe<DiscussGroupCount>;
  coverPhoto?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  discussionId: Scalars["Int"]["output"];
  groupName: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  members: Array<UserOnDiscussGroup>;
  updatedAt: Scalars["DateTime"]["output"];
};

/** return type for listen call */
export type ListenCallObject = {
  __typename?: "ListenCallObject";
  discussion: DiscussionExtend;
  token: Scalars["String"]["output"];
};

/** Login response with token */
export type LoginResponseForm = {
  __typename?: "LoginResponseForm";
  data?: Maybe<UserWithToken>;
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type Message = {
  __typename?: "Message";
  _count?: Maybe<MessageCount>;
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  discussGroupId?: Maybe<Scalars["Int"]["output"]>;
  discussionId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  receiverId?: Maybe<Scalars["Int"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

export type MessageCount = {
  __typename?: "MessageCount";
  files: Scalars["Int"]["output"];
};

/** message inputs */
export type MessageInput = {
  content: Scalars["String"]["input"];
  files: Array<FileInput>;
};

/** message response type */
export type MessageResponse = {
  __typename?: "MessageResponse";
  data?: Maybe<Array<Message>>;
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

/** message type with receiver and groupe */
export type MessageWithRecepter = {
  __typename?: "MessageWithRecepter";
  DiscussGroup?: Maybe<GroupWithMembers>;
  Receiver?: Maybe<User>;
  User: User;
  _count?: Maybe<MessageCount>;
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  discussGroupId?: Maybe<Scalars["Int"]["output"]>;
  discussionId: Scalars["Int"]["output"];
  files: Array<FileExt>;
  id: Scalars["Int"]["output"];
  receiverId?: Maybe<Scalars["Int"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

/** return type of writting subcription */
export type MessageWrittingObject = {
  __typename?: "MessageWrittingObject";
  discussionId: Scalars["Float"]["output"];
  isWritting: Scalars["Boolean"]["output"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  addReaction: Scalars["String"]["output"];
  callUser: Scalars["String"]["output"];
  changeStatus: Scalars["String"]["output"];
  changeTheme: Discussion;
  createComment: Scalars["String"]["output"];
  createDiscussGroup: DiscussGroupDiscussion;
  createDiscussion: DiscussionExtend;
  createPost: Scalars["String"]["output"];
  deleteComment: Scalars["String"]["output"];
  deleteFile: Scalars["String"]["output"];
  deleteFriend: Scalars["String"]["output"];
  deleteMessageById: Scalars["String"]["output"];
  handleCallMutation: Scalars["String"]["output"];
  handleFriendRequest: Scalars["String"]["output"];
  leaveCall: Scalars["String"]["output"];
  login: LoginResponseForm;
  modifyComment: Scalars["String"]["output"];
  modifyMessage: Scalars["String"]["output"];
  returnSignal: Scalars["String"]["output"];
  sendFriendRequest: Scalars["String"]["output"];
  sendMessageDiscoussGroup: DiscussionExtend;
  sendMessageDiscussGroupMobile: DiscussionExtend;
  sendSignal: Scalars["String"]["output"];
  signup: LoginResponseForm;
  updateUser: Scalars["String"]["output"];
  upload: Array<FileExt>;
  writtingCheck: MessageResponse;
};

export type MutationAddReactionArgs = {
  postId: Scalars["Float"]["input"];
  reactionType: ReactionInput;
  userId: Scalars["Float"]["input"];
};

export type MutationCallUserArgs = {
  discussionId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationChangeStatusArgs = {
  status: Scalars["Boolean"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationChangeThemeArgs = {
  data: DiscussionInput;
};

export type MutationCreateCommentArgs = {
  commentInput: CommentInput;
  postId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationCreateDiscussGroupArgs = {
  data: DiscussGroupInput;
  userChoose: UserChoose;
  userId: Scalars["Float"]["input"];
};

export type MutationCreateDiscussionArgs = {
  receiverId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationCreatePostArgs = {
  data: PostInput;
  groupId?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type MutationDeleteCommentArgs = {
  commentId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationDeleteFileArgs = {
  url: Scalars["String"]["input"];
};

export type MutationDeleteFriendArgs = {
  receiverId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationDeleteMessageByIdArgs = {
  messageId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationHandleCallMutationArgs = {
  status: Scalars["Boolean"]["input"];
  token: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationHandleFriendRequestArgs = {
  friendRequestId: Scalars["Float"]["input"];
  status: Scalars["String"]["input"];
};

export type MutationLeaveCallArgs = {
  token: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationModifyCommentArgs = {
  commendId: Scalars["Float"]["input"];
  commentInput: CommentInput;
  userId: Scalars["Float"]["input"];
};

export type MutationModifyMessageArgs = {
  messageId: Scalars["Float"]["input"];
  newMessage: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationReturnSignalArgs = {
  audio: Scalars["Boolean"]["input"];
  receiverId: Scalars["Float"]["input"];
  signal: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
  video: Scalars["Boolean"]["input"];
};

export type MutationSendFriendRequestArgs = {
  receiverId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type MutationSendMessageDiscoussGroupArgs = {
  discussGroupId?: InputMaybe<Scalars["Float"]["input"]>;
  discussionId: Scalars["Float"]["input"];
  messageInput: MessageInput;
  receiverId?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type MutationSendMessageDiscussGroupMobileArgs = {
  data?: InputMaybe<Array<Scalars["Upload"]["input"]>>;
  discussGroupId?: InputMaybe<Scalars["Float"]["input"]>;
  discussionId: Scalars["Float"]["input"];
  messageInput: MessageInput;
  receiverId?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type MutationSendSignalArgs = {
  audio: Scalars["Boolean"]["input"];
  receiverId: Scalars["Float"]["input"];
  signal: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
  video: Scalars["Boolean"]["input"];
};

export type MutationSignupArgs = {
  userInput: SignupInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
  userId: Scalars["Float"]["input"];
};

export type MutationUploadArgs = {
  data: Array<Scalars["Upload"]["input"]>;
};

export type MutationWrittingCheckArgs = {
  discussionId: Scalars["Float"]["input"];
  isWritting: Scalars["Boolean"]["input"];
  userId: Scalars["Float"]["input"];
};

export type Notification = {
  __typename?: "Notification";
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type Post = {
  __typename?: "Post";
  _count?: Maybe<PostCount>;
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  groupId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

export type PostCount = {
  __typename?: "PostCount";
  comments: Scalars["Int"]["output"];
  files: Scalars["Int"]["output"];
  reactions: Scalars["Int"]["output"];
};

/** Form of post to display */
export type PostDisplay = {
  __typename?: "PostDisplay";
  _count?: Maybe<PostCount>;
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  files: Array<FileExt>;
  groupId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  nbComments: Scalars["Float"]["output"];
  reactions?: Maybe<Array<Reaction>>;
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
  userId: Scalars["Int"]["output"];
};

/** inputs for post */
export type PostInput = {
  description: Scalars["String"]["input"];
  files: Array<FileInput>;
};

export type Query = {
  __typename?: "Query";
  allUser: Array<User>;
  getAllGroupUser: Array<DiscussGroup>;
  getCommentByPost: CommentResponse;
  getCommentByUser: CommentResponse;
  getCommonFriends: Array<User>;
  getDiscussionCurrentUser: Array<DiscussionExtend>;
  getFriendOfCurrentUser: Array<User>;
  getNotifications: Array<Notification>;
  getOrderPost: Array<PostDisplay>;
  getRequest: Array<FriendRequestExtend>;
  getSuggestionOfCurrentUser: Array<User>;
  getVideoCall: VideoCallMembers;
  messageTwoUser: Array<MessageWithRecepter>;
  postByUser: Array<PostDisplay>;
  profile: UserDetails;
};

export type QueryGetAllGroupUserArgs = {
  userId: Scalars["Float"]["input"];
};

export type QueryGetCommentByPostArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  postId: Scalars["Float"]["input"];
};

export type QueryGetCommentByUserArgs = {
  userId: Scalars["Float"]["input"];
};

export type QueryGetCommonFriendsArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  receiverId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
};

export type QueryGetDiscussionCurrentUserArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type QueryGetFriendOfCurrentUserArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type QueryGetNotificationsArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type QueryGetOrderPostArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
};

export type QueryGetRequestArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type QueryGetSuggestionOfCurrentUserArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type QueryGetVideoCallArgs = {
  token: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
};

export type QueryMessageTwoUserArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  discussionId: Scalars["Float"]["input"];
  limit?: InputMaybe<Scalars["Float"]["input"]>;
};

export type QueryPostByUserArgs = {
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["Float"]["input"];
};

export type QueryProfileArgs = {
  profilId: Scalars["Float"]["input"];
  viewerId: Scalars["Float"]["input"];
};

export type Reaction = {
  __typename?: "Reaction";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  postId: Scalars["Int"]["output"];
  reactionType: ReactionType;
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

/** input of the reaction */
export type ReactionInput = {
  reactionType: ReactionType;
};

export enum ReactionType {
  Grr = "GRR",
  Haha = "HAHA",
  Like = "LIKE",
  Love = "LOVE",
  Sad = "SAD",
  Woahou = "WOAHOU",
}

export enum RequestStatus {
  Accepted = "ACCEPTED",
  Denied = "DENIED",
  Pending = "PENDING",
}

/** send signal type */
export type SendSignalType = {
  __typename?: "SendSignalType";
  audio: Scalars["Boolean"]["output"];
  receiverId: Scalars["Float"]["output"];
  signal: Scalars["String"]["output"];
  user: User;
  video: Scalars["Boolean"]["output"];
};

/** user inputs */
export type SignupInput = {
  civilite?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
};

export type Subscription = {
  __typename?: "Subscription";
  commentPost: Notification;
  deniedCall: Scalars["String"]["output"];
  getStatusUser: User;
  lisenLeaveCall: User;
  lisenReturnSignal: SendSignalType;
  lisenSendSignal: SendSignalType;
  listenCall: ListenCallObject;
  listenTheme: DiscussionExtend;
  messageToUser: DiscussionExtend;
  sendRequestNotif: FriendRequestExtend;
  writeMessage: MessageWrittingObject;
};

export type SubscriptionCommentPostArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionDeniedCallArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionGetStatusUserArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionLisenLeaveCallArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionLisenReturnSignalArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionLisenSendSignalArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionListenCallArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionListenThemeArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionMessageToUserArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionSendRequestNotifArgs = {
  userId: Scalars["Float"]["input"];
};

export type SubscriptionWriteMessageArgs = {
  userId: Scalars["Float"]["input"];
};

/** input for update user */
export type UpdateUserInput = {
  civilite?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  photo?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  _count?: Maybe<UserCount>;
  civilite?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  firstname?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  lastname?: Maybe<Scalars["String"]["output"]>;
  mode: UserMode;
  password: Scalars["String"]["output"];
  photo?: Maybe<Scalars["String"]["output"]>;
  status: Scalars["Boolean"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  videoCallId?: Maybe<Scalars["Int"]["output"]>;
};

/** user id in the group discuss */
export type UserChoose = {
  membresId: Array<Scalars["Float"]["input"]>;
};

export type UserCount = {
  __typename?: "UserCount";
  Post: Scalars["Int"]["output"];
  UserGroup: Scalars["Int"]["output"];
  comments: Scalars["Int"]["output"];
  discussions: Scalars["Int"]["output"];
  friendRequest: Scalars["Int"]["output"];
  groupes: Scalars["Int"]["output"];
  messages: Scalars["Int"]["output"];
  notifications: Scalars["Int"]["output"];
  reactions: Scalars["Int"]["output"];
  receiverDiscussions: Scalars["Int"]["output"];
  receiverMessage: Scalars["Int"]["output"];
  request: Scalars["Int"]["output"];
};

/** details of user */
export type UserDetails = {
  __typename?: "UserDetails";
  friends: Array<User>;
  relation?: Maybe<FriendRequest>;
  user: User;
};

export enum UserMode {
  Dark = "DARK",
  Light = "LIGHT",
}

export type UserOnDiscussGroup = {
  __typename?: "UserOnDiscussGroup";
  createdAt: Scalars["DateTime"]["output"];
  discussGroupId: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Int"]["output"];
};

/** User with token */
export type UserWithToken = {
  __typename?: "UserWithToken";
  _count?: Maybe<UserCount>;
  civilite?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  firstname?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  lastname?: Maybe<Scalars["String"]["output"]>;
  mode: UserMode;
  password: Scalars["String"]["output"];
  photo?: Maybe<Scalars["String"]["output"]>;
  status: Scalars["Boolean"]["output"];
  token: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  videoCallId?: Maybe<Scalars["Int"]["output"]>;
};

export type VideoCallCount = {
  __typename?: "VideoCallCount";
  members: Scalars["Int"]["output"];
};

/** videoCall with members */
export type VideoCallMembers = {
  __typename?: "VideoCallMembers";
  _count?: Maybe<VideoCallCount>;
  createdAt: Scalars["DateTime"]["output"];
  discussionId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  members: Array<User>;
  status: CallStatus;
  updatedAt: Scalars["DateTime"]["output"];
};

export type CreateDiscussGroupMutationVariables = Exact<{
  userId: Scalars["Float"]["input"];
  userChoose: UserChoose;
  data: DiscussGroupInput;
}>;

export type CreateDiscussGroupMutation = {
  __typename?: "Mutation";
  createDiscussGroup: {
    __typename?: "DiscussGroupDiscussion";
    groupName: string;
    coverPhoto?: string | null;
    id: number;
    Discussion: {
      __typename?: "Discussion";
      id: number;
      theme: string;
      userId: number;
    };
  };
};

export type GetAllGroupUserQueryVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type GetAllGroupUserQuery = {
  __typename?: "Query";
  getAllGroupUser: Array<{
    __typename?: "DiscussGroup";
    groupName: string;
    coverPhoto?: string | null;
    id: number;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type CreateDiscussionMutationVariables = Exact<{
  receiverId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type CreateDiscussionMutation = {
  __typename?: "Mutation";
  createDiscussion: {
    __typename?: "DiscussionExtend";
    theme: string;
    createdAt: any;
    updatedAt: any;
    id: number;
    User: {
      __typename?: "User";
      lastname?: string | null;
      firstname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    };
    Receiver?: {
      __typename?: "User";
      firstname?: string | null;
      lastname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    } | null;
    DiscussGroup?: {
      __typename?: "GroupWithMembers";
      groupName: string;
      coverPhoto?: string | null;
      id: number;
    } | null;
    messages: Array<{
      __typename?: "MessageWithRecepter";
      id: number;
      content: string;
      receiverId?: number | null;
      discussGroupId?: number | null;
      createdAt: any;
      updatedAt: any;
      User: {
        __typename?: "User";
        id: number;
        lastname?: string | null;
        firstname?: string | null;
        photo?: string | null;
        status: boolean;
      };
      files: Array<{
        __typename?: "FileExt";
        name: string;
        extension: string;
        url: string;
        id: number;
      }>;
    }>;
  };
};

export type ChangeThemeMutationVariables = Exact<{
  data: DiscussionInput;
}>;

export type ChangeThemeMutation = {
  __typename?: "Mutation";
  changeTheme: { __typename?: "Discussion"; theme: string };
};

export type GetDiscussionCurrentUserQueryVariables = Exact<{
  userId: Scalars["Float"]["input"];
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
}>;

export type GetDiscussionCurrentUserQuery = {
  __typename?: "Query";
  getDiscussionCurrentUser: Array<{
    __typename?: "DiscussionExtend";
    theme: string;
    createdAt: any;
    updatedAt: any;
    id: number;
    User: {
      __typename?: "User";
      lastname?: string | null;
      firstname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    };
    Receiver?: {
      __typename?: "User";
      firstname?: string | null;
      lastname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    } | null;
    DiscussGroup?: {
      __typename?: "GroupWithMembers";
      groupName: string;
      coverPhoto?: string | null;
      id: number;
    } | null;
    messages: Array<{
      __typename?: "MessageWithRecepter";
      id: number;
      content: string;
      receiverId?: number | null;
      discussGroupId?: number | null;
      createdAt: any;
      updatedAt: any;
      User: {
        __typename?: "User";
        id: number;
        lastname?: string | null;
        firstname?: string | null;
        photo?: string | null;
        status: boolean;
      };
      files: Array<{
        __typename?: "FileExt";
        name: string;
        extension: string;
        url: string;
        id: number;
      }>;
    }>;
  }>;
};

export type ListenThemeSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type ListenThemeSubscription = {
  __typename?: "Subscription";
  listenTheme: {
    __typename?: "DiscussionExtend";
    theme: string;
    createdAt: any;
    updatedAt: any;
    id: number;
    User: {
      __typename?: "User";
      lastname?: string | null;
      firstname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    };
    Receiver?: {
      __typename?: "User";
      firstname?: string | null;
      lastname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    } | null;
    DiscussGroup?: {
      __typename?: "GroupWithMembers";
      groupName: string;
      coverPhoto?: string | null;
      id: number;
    } | null;
    messages: Array<{
      __typename?: "MessageWithRecepter";
      id: number;
      content: string;
      receiverId?: number | null;
      discussGroupId?: number | null;
      createdAt: any;
      updatedAt: any;
      User: {
        __typename?: "User";
        id: number;
        lastname?: string | null;
        firstname?: string | null;
        photo?: string | null;
        status: boolean;
      };
      files: Array<{
        __typename?: "FileExt";
        name: string;
        extension: string;
        url: string;
        id: number;
      }>;
    }>;
  };
};

export type UploadMutationVariables = Exact<{
  data: Array<Scalars["Upload"]["input"]> | Scalars["Upload"]["input"];
}>;

export type UploadMutation = {
  __typename?: "Mutation";
  upload: Array<{
    __typename?: "FileExt";
    name: string;
    url: string;
    extension: string;
  }>;
};

export type SendMessageDiscoussGroupMutationVariables = Exact<{
  discussionId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
  messageInput: MessageInput;
  receiverId?: InputMaybe<Scalars["Float"]["input"]>;
  discussGroupId?: InputMaybe<Scalars["Float"]["input"]>;
}>;

export type SendMessageDiscoussGroupMutation = {
  __typename?: "Mutation";
  sendMessageDiscoussGroup: {
    __typename?: "DiscussionExtend";
    theme: string;
    createdAt: any;
    updatedAt: any;
    id: number;
    User: {
      __typename?: "User";
      lastname?: string | null;
      firstname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    };
    Receiver?: {
      __typename?: "User";
      firstname?: string | null;
      lastname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    } | null;
    DiscussGroup?: {
      __typename?: "GroupWithMembers";
      groupName: string;
      coverPhoto?: string | null;
      id: number;
    } | null;
    messages: Array<{
      __typename?: "MessageWithRecepter";
      id: number;
      content: string;
      receiverId?: number | null;
      discussGroupId?: number | null;
      createdAt: any;
      updatedAt: any;
      User: {
        __typename?: "User";
        id: number;
        lastname?: string | null;
        firstname?: string | null;
        photo?: string | null;
        status: boolean;
      };
      files: Array<{
        __typename?: "FileExt";
        name: string;
        extension: string;
        url: string;
        id: number;
      }>;
    }>;
  };
};

export type SendMessageDiscussGroupMobileMutationVariables = Exact<{
  discussionId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
  messageInput: MessageInput;
  data?: InputMaybe<
    Array<Scalars["Upload"]["input"]> | Scalars["Upload"]["input"]
  >;
  receiverId?: InputMaybe<Scalars["Float"]["input"]>;
  discussGroupId?: InputMaybe<Scalars["Float"]["input"]>;
}>;

export type SendMessageDiscussGroupMobileMutation = {
  __typename?: "Mutation";
  sendMessageDiscussGroupMobile: {
    __typename?: "DiscussionExtend";
    theme: string;
    createdAt: any;
    updatedAt: any;
    id: number;
    User: {
      __typename?: "User";
      lastname?: string | null;
      firstname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    };
    Receiver?: {
      __typename?: "User";
      firstname?: string | null;
      lastname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    } | null;
    DiscussGroup?: {
      __typename?: "GroupWithMembers";
      groupName: string;
      coverPhoto?: string | null;
      id: number;
    } | null;
    messages: Array<{
      __typename?: "MessageWithRecepter";
      id: number;
      content: string;
      receiverId?: number | null;
      discussGroupId?: number | null;
      createdAt: any;
      updatedAt: any;
      User: {
        __typename?: "User";
        id: number;
        lastname?: string | null;
        firstname?: string | null;
        photo?: string | null;
        status: boolean;
      };
      files: Array<{
        __typename?: "FileExt";
        name: string;
        extension: string;
        url: string;
        id: number;
      }>;
    }>;
  };
};

export type DeleteMessageByIdMutationVariables = Exact<{
  userId: Scalars["Float"]["input"];
  messageId: Scalars["Float"]["input"];
}>;

export type DeleteMessageByIdMutation = {
  __typename?: "Mutation";
  deleteMessageById: string;
};

export type ModifyMessageMutationVariables = Exact<{
  userId: Scalars["Float"]["input"];
  newMessage: Scalars["String"]["input"];
  messageId: Scalars["Float"]["input"];
}>;

export type ModifyMessageMutation = {
  __typename?: "Mutation";
  modifyMessage: string;
};

export type WrittingCheckMutationVariables = Exact<{
  isWritting: Scalars["Boolean"]["input"];
  userId: Scalars["Float"]["input"];
  discussionId: Scalars["Float"]["input"];
}>;

export type WrittingCheckMutation = {
  __typename?: "Mutation";
  writtingCheck: {
    __typename?: "MessageResponse";
    success: boolean;
    message: string;
  };
};

export type MessageTwoUserQueryVariables = Exact<{
  discussionId: Scalars["Float"]["input"];
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Float"]["input"]>;
}>;

export type MessageTwoUserQuery = {
  __typename?: "Query";
  messageTwoUser: Array<{
    __typename?: "MessageWithRecepter";
    id: number;
    content: string;
    receiverId?: number | null;
    discussGroupId?: number | null;
    createdAt: any;
    updatedAt: any;
    User: {
      __typename?: "User";
      id: number;
      lastname?: string | null;
      firstname?: string | null;
      photo?: string | null;
      status: boolean;
    };
    files: Array<{
      __typename?: "FileExt";
      name: string;
      extension: string;
      url: string;
      id: number;
    }>;
  }>;
};

export type MessageToUserSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type MessageToUserSubscription = {
  __typename?: "Subscription";
  messageToUser: {
    __typename?: "DiscussionExtend";
    theme: string;
    createdAt: any;
    updatedAt: any;
    id: number;
    User: {
      __typename?: "User";
      lastname?: string | null;
      firstname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    };
    Receiver?: {
      __typename?: "User";
      firstname?: string | null;
      lastname?: string | null;
      id: number;
      photo?: string | null;
      status: boolean;
    } | null;
    DiscussGroup?: {
      __typename?: "GroupWithMembers";
      groupName: string;
      coverPhoto?: string | null;
      id: number;
    } | null;
    messages: Array<{
      __typename?: "MessageWithRecepter";
      id: number;
      content: string;
      receiverId?: number | null;
      discussGroupId?: number | null;
      createdAt: any;
      updatedAt: any;
      User: {
        __typename?: "User";
        id: number;
        lastname?: string | null;
        firstname?: string | null;
        photo?: string | null;
        status: boolean;
      };
      files: Array<{
        __typename?: "FileExt";
        name: string;
        extension: string;
        url: string;
        id: number;
      }>;
    }>;
  };
};

export type WriteMessageSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type WriteMessageSubscription = {
  __typename?: "Subscription";
  writeMessage: {
    __typename?: "MessageWrittingObject";
    isWritting: boolean;
    discussionId: number;
    user: {
      __typename?: "User";
      photo?: string | null;
      id: number;
      lastname?: string | null;
      firstname?: string | null;
      status: boolean;
    };
  };
};

export type GetNotificationsQueryVariables = Exact<{
  userId: Scalars["Float"]["input"];
  cursor?: InputMaybe<Scalars["Float"]["input"]>;
}>;

export type GetNotificationsQuery = {
  __typename?: "Query";
  getNotifications: Array<{
    __typename?: "Notification";
    id: number;
    name: string;
    description: string;
    updatedAt: any;
    createdAt: any;
  }>;
};

export type CommentPostSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type CommentPostSubscription = {
  __typename?: "Subscription";
  commentPost: {
    __typename?: "Notification";
    id: number;
    name: string;
    description: string;
    createdAt: any;
    updatedAt: any;
  };
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "LoginResponseForm";
    message: string;
    success: boolean;
    data?: {
      __typename?: "UserWithToken";
      id: number;
      token: string;
      email: string;
      firstname?: string | null;
      mode: UserMode;
      lastname?: string | null;
      status: boolean;
      photo?: string | null;
      civilite?: string | null;
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type SignupMutationVariables = Exact<{
  userInput: SignupInput;
}>;

export type SignupMutation = {
  __typename?: "Mutation";
  signup: {
    __typename?: "LoginResponseForm";
    message: string;
    success: boolean;
    data?: {
      __typename?: "UserWithToken";
      id: number;
      email: string;
      firstname?: string | null;
      lastname?: string | null;
      mode: UserMode;
      status: boolean;
      photo?: string | null;
      civilite?: string | null;
      createdAt: any;
      updatedAt: any;
      token: string;
    } | null;
  };
};

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
  userId: Scalars["Float"]["input"];
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: string;
};

export type DeleteFriendMutationVariables = Exact<{
  receiverId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type DeleteFriendMutation = {
  __typename?: "Mutation";
  deleteFriend: string;
};

export type ChangeStatusMutationVariables = Exact<{
  status: Scalars["Boolean"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type ChangeStatusMutation = {
  __typename?: "Mutation";
  changeStatus: string;
};

export type AllUserQueryVariables = Exact<{ [key: string]: never }>;

export type AllUserQuery = {
  __typename?: "Query";
  allUser: Array<{
    __typename?: "User";
    id: number;
    lastname?: string | null;
    firstname?: string | null;
    email: string;
    civilite?: string | null;
    photo?: string | null;
  }>;
};

export type ProfileQueryVariables = Exact<{
  viewerId: Scalars["Float"]["input"];
  profilId: Scalars["Float"]["input"];
}>;

export type ProfileQuery = {
  __typename?: "Query";
  profile: {
    __typename?: "UserDetails";
    user: {
      __typename?: "User";
      id: number;
      email: string;
      firstname?: string | null;
      lastname?: string | null;
      photo?: string | null;
      civilite?: string | null;
      createdAt: any;
      updatedAt: any;
    };
    friends: Array<{
      __typename?: "User";
      id: number;
      status: boolean;
      firstname?: string | null;
      lastname?: string | null;
      photo?: string | null;
    }>;
    relation?: {
      __typename?: "FriendRequest";
      id: number;
      status: RequestStatus;
      receiverId: number;
      userId: number;
    } | null;
  };
};

export type CallUserMutationVariables = Exact<{
  discussionId: Scalars["Float"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type CallUserMutation = { __typename?: "Mutation"; callUser: string };

export type HandleCallMutationMutationVariables = Exact<{
  status: Scalars["Boolean"]["input"];
  token: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type HandleCallMutationMutation = {
  __typename?: "Mutation";
  handleCallMutation: string;
};

export type SendSignalMutationVariables = Exact<{
  receiverId: Scalars["Float"]["input"];
  signal: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
  audio: Scalars["Boolean"]["input"];
  video: Scalars["Boolean"]["input"];
}>;

export type SendSignalMutation = {
  __typename?: "Mutation";
  sendSignal: string;
};

export type ReturnSignalMutationVariables = Exact<{
  receiverId: Scalars["Float"]["input"];
  signal: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
  audio: Scalars["Boolean"]["input"];
  video: Scalars["Boolean"]["input"];
}>;

export type ReturnSignalMutation = {
  __typename?: "Mutation";
  returnSignal: string;
};

export type LeaveCallMutationVariables = Exact<{
  token: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type LeaveCallMutation = { __typename?: "Mutation"; leaveCall: string };

export type GetVideoCallQueryVariables = Exact<{
  token: Scalars["String"]["input"];
  userId: Scalars["Float"]["input"];
}>;

export type GetVideoCallQuery = {
  __typename?: "Query";
  getVideoCall: {
    __typename?: "VideoCallMembers";
    id: number;
    status: CallStatus;
    createdAt: any;
    updatedAt: any;
    members: Array<{
      __typename?: "User";
      id: number;
      status: boolean;
      firstname?: string | null;
      lastname?: string | null;
      photo?: string | null;
    }>;
  };
};

export type ListenCallSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type ListenCallSubscription = {
  __typename?: "Subscription";
  listenCall: {
    __typename?: "ListenCallObject";
    token: string;
    discussion: {
      __typename?: "DiscussionExtend";
      id: number;
      theme: string;
      User: {
        __typename?: "User";
        id: number;
        firstname?: string | null;
        lastname?: string | null;
        status: boolean;
        photo?: string | null;
      };
      Receiver?: {
        __typename?: "User";
        id: number;
        status: boolean;
        firstname?: string | null;
        lastname?: string | null;
        photo?: string | null;
      } | null;
      DiscussGroup?: {
        __typename?: "GroupWithMembers";
        id: number;
        groupName: string;
        coverPhoto?: string | null;
      } | null;
    };
  };
};

export type LisenSendSignalSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type LisenSendSignalSubscription = {
  __typename?: "Subscription";
  lisenSendSignal: {
    __typename?: "SendSignalType";
    signal: string;
    receiverId: number;
    audio: boolean;
    video: boolean;
    user: {
      __typename?: "User";
      id: number;
      firstname?: string | null;
      lastname?: string | null;
      photo?: string | null;
      status: boolean;
    };
  };
};

export type LisenReturnSignalSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type LisenReturnSignalSubscription = {
  __typename?: "Subscription";
  lisenReturnSignal: {
    __typename?: "SendSignalType";
    signal: string;
    receiverId: number;
    audio: boolean;
    video: boolean;
    user: {
      __typename?: "User";
      id: number;
      firstname?: string | null;
      lastname?: string | null;
      photo?: string | null;
      status: boolean;
    };
  };
};

export type LisenLeaveCallSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type LisenLeaveCallSubscription = {
  __typename?: "Subscription";
  lisenLeaveCall: {
    __typename?: "User";
    id: number;
    status: boolean;
    firstname?: string | null;
    lastname?: string | null;
    photo?: string | null;
  };
};

export type SubscriptionSubscriptionVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type SubscriptionSubscription = {
  __typename?: "Subscription";
  deniedCall: string;
};

export const CreateDiscussGroupDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateDiscussGroup" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userChoose" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserChoose" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DiscussGroupInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createDiscussGroup" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userChoose" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userChoose" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "groupName" } },
                { kind: "Field", name: { kind: "Name", value: "coverPhoto" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "Discussion" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "theme" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateDiscussGroupMutation,
  CreateDiscussGroupMutationVariables
>;
export const GetAllGroupUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllGroupUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getAllGroupUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "groupName" } },
                { kind: "Field", name: { kind: "Name", value: "coverPhoto" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllGroupUserQuery,
  GetAllGroupUserQueryVariables
>;
export const CreateDiscussionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateDiscussion" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "receiverId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createDiscussion" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "receiverId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "receiverId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "theme" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "User" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "Receiver" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "DiscussGroup" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "groupName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverPhoto" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "files" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "extension" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discussGroupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateDiscussionMutation,
  CreateDiscussionMutationVariables
>;
export const ChangeThemeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ChangeTheme" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DiscussionInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "changeTheme" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "theme" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ChangeThemeMutation, ChangeThemeMutationVariables>;
export const GetDiscussionCurrentUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetDiscussionCurrentUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "cursor" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getDiscussionCurrentUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "cursor" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "cursor" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "theme" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "User" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "Receiver" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "DiscussGroup" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "groupName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverPhoto" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "files" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "extension" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discussGroupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDiscussionCurrentUserQuery,
  GetDiscussionCurrentUserQueryVariables
>;
export const ListenThemeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "ListenTheme" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listenTheme" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "theme" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "User" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "Receiver" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "DiscussGroup" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "groupName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverPhoto" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "files" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "extension" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discussGroupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListenThemeSubscription,
  ListenThemeSubscriptionVariables
>;
export const UploadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Upload" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Upload" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upload" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "extension" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UploadMutation, UploadMutationVariables>;
export const SendMessageDiscoussGroupDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SendMessageDiscoussGroup" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "discussionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "messageInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "MessageInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "receiverId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "discussGroupId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sendMessageDiscoussGroup" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "discussionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "discussionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "messageInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "messageInput" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "receiverId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "receiverId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "discussGroupId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "discussGroupId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "theme" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "User" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "Receiver" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "DiscussGroup" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "groupName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverPhoto" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "files" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "extension" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discussGroupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendMessageDiscoussGroupMutation,
  SendMessageDiscoussGroupMutationVariables
>;
export const SendMessageDiscussGroupMobileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SendMessageDiscussGroupMobile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "discussionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "messageInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "MessageInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Upload" },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "receiverId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "discussGroupId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sendMessageDiscussGroupMobile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "discussionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "discussionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "messageInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "messageInput" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "receiverId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "receiverId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "discussGroupId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "discussGroupId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "theme" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "User" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "Receiver" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "DiscussGroup" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "groupName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverPhoto" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "files" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "extension" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discussGroupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendMessageDiscussGroupMobileMutation,
  SendMessageDiscussGroupMobileMutationVariables
>;
export const DeleteMessageByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteMessageById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "messageId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteMessageById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "messageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "messageId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteMessageByIdMutation,
  DeleteMessageByIdMutationVariables
>;
export const ModifyMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ModifyMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "newMessage" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "messageId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "modifyMessage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "newMessage" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "newMessage" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "messageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "messageId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ModifyMessageMutation,
  ModifyMessageMutationVariables
>;
export const WrittingCheckDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "WrittingCheck" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isWritting" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "discussionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "writtingCheck" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "isWritting" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isWritting" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "discussionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "discussionId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  WrittingCheckMutation,
  WrittingCheckMutationVariables
>;
export const MessageTwoUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MessageTwoUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "discussionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "cursor" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "messageTwoUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "discussionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "discussionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "cursor" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "cursor" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "User" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "files" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "extension" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "receiverId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "discussGroupId" },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MessageTwoUserQuery, MessageTwoUserQueryVariables>;
export const MessageToUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "MessageToUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "messageToUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "theme" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "User" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "Receiver" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "DiscussGroup" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "groupName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverPhoto" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "files" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "extension" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "discussGroupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MessageToUserSubscription,
  MessageToUserSubscriptionVariables
>;
export const WriteMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "WriteMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "writeMessage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "isWritting" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "discussionId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  WriteMessageSubscription,
  WriteMessageSubscriptionVariables
>;
export const GetNotificationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNotifications" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "cursor" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getNotifications" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "cursor" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "cursor" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNotificationsQuery,
  GetNotificationsQueryVariables
>;
export const CommentPostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "CommentPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "commentPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CommentPostSubscription,
  CommentPostSubscriptionVariables
>;
export const LoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "login" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "token" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "mode" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "civilite" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "signup" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SignupInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "signup" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "mode" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "civilite" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "token" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const UpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "updateUserInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateUserInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "updateUserInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "updateUserInput" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteFriendDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteFriend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "receiverId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteFriend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "receiverId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "receiverId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteFriendMutation,
  DeleteFriendMutationVariables
>;
export const ChangeStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ChangeStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "changeStatus" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "status" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "status" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ChangeStatusMutation,
  ChangeStatusMutationVariables
>;
export const AllUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "lastname" } },
                { kind: "Field", name: { kind: "Name", value: "firstname" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "civilite" } },
                { kind: "Field", name: { kind: "Name", value: "photo" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllUserQuery, AllUserQueryVariables>;
export const ProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Profile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "viewerId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "profilId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "profile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "viewerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "viewerId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "profilId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "profilId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "civilite" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "friends" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relation" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "receiverId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const CallUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CallUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "discussionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "callUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "discussionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "discussionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CallUserMutation, CallUserMutationVariables>;
export const HandleCallMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "HandleCallMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "handleCallMutation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "status" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "status" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "token" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "token" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  HandleCallMutationMutation,
  HandleCallMutationMutationVariables
>;
export const SendSignalDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SendSignal" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "receiverId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "signal" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "audio" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "video" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sendSignal" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "receiverId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "receiverId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "signal" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "signal" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "audio" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "audio" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "video" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "video" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SendSignalMutation, SendSignalMutationVariables>;
export const ReturnSignalDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ReturnSignal" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "receiverId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "signal" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "audio" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "video" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "returnSignal" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "receiverId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "receiverId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "signal" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "signal" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "audio" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "audio" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "video" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "video" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ReturnSignalMutation,
  ReturnSignalMutationVariables
>;
export const LeaveCallDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LeaveCall" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "leaveCall" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "token" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "token" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LeaveCallMutation, LeaveCallMutationVariables>;
export const GetVideoCallDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetVideoCall" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getVideoCall" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "token" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "token" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "members" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVideoCallQuery, GetVideoCallQueryVariables>;
export const ListenCallDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "ListenCall" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listenCall" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "discussion" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "theme" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "Receiver" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "DiscussGroup" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "groupName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "coverPhoto" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListenCallSubscription,
  ListenCallSubscriptionVariables
>;
export const LisenSendSignalDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "LisenSendSignal" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lisenSendSignal" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "signal" } },
                { kind: "Field", name: { kind: "Name", value: "receiverId" } },
                { kind: "Field", name: { kind: "Name", value: "audio" } },
                { kind: "Field", name: { kind: "Name", value: "video" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LisenSendSignalSubscription,
  LisenSendSignalSubscriptionVariables
>;
export const LisenReturnSignalDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "LisenReturnSignal" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lisenReturnSignal" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "signal" } },
                { kind: "Field", name: { kind: "Name", value: "receiverId" } },
                { kind: "Field", name: { kind: "Name", value: "audio" } },
                { kind: "Field", name: { kind: "Name", value: "video" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "photo" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LisenReturnSignalSubscription,
  LisenReturnSignalSubscriptionVariables
>;
export const LisenLeaveCallDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "LisenLeaveCall" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lisenLeaveCall" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "firstname" } },
                { kind: "Field", name: { kind: "Name", value: "lastname" } },
                { kind: "Field", name: { kind: "Name", value: "photo" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LisenLeaveCallSubscription,
  LisenLeaveCallSubscriptionVariables
>;
export const SubscriptionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "Subscription" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deniedCall" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SubscriptionSubscription,
  SubscriptionSubscriptionVariables
>;
