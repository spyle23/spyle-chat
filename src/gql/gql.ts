/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  mutation CreateDiscussGroup(\n    $userId: Float!\n    $userChoose: UserChoose!\n    $data: DiscussGroupInput!\n  ) {\n    createDiscussGroup(userId: $userId, userChoose: $userChoose, data: $data) {\n      groupName\n      coverPhoto\n      id\n      Discussion {\n        id\n        theme\n        userId\n      }\n    }\n  }\n":
    types.CreateDiscussGroupDocument,
  "\n  query GetAllGroupUser($userId: Float!) {\n    getAllGroupUser(userId: $userId) {\n      groupName\n      coverPhoto\n      id\n      createdAt\n      updatedAt\n    }\n  }\n":
    types.GetAllGroupUserDocument,
  "\n  mutation CreateDiscussion($receiverId: Float!, $userId: Float!) {\n    createDiscussion(receiverId: $receiverId, userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n":
    types.CreateDiscussionDocument,
  "\n  mutation ChangeTheme($data: DiscussionInput!) {\n    changeTheme(data: $data) {\n      theme\n    }\n  }\n":
    types.ChangeThemeDocument,
  "\n  query GetDiscussionCurrentUser($userId: Float!, $cursor: Float) {\n    getDiscussionCurrentUser(userId: $userId, cursor: $cursor) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n":
    types.GetDiscussionCurrentUserDocument,
  "\n  subscription ListenTheme($userId: Float!) {\n    listenTheme(userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n":
    types.ListenThemeDocument,
  "\n  mutation Upload($data: [Upload!]!) {\n    upload(data: $data) {\n      name\n      url\n      extension\n    }\n  }\n":
    types.UploadDocument,
  "\n  mutation SendMessageDiscoussGroup(\n    $discussionId: Float!\n    $userId: Float!\n    $messageInput: MessageInput!\n    $receiverId: Float\n    $discussGroupId: Float\n  ) {\n    sendMessageDiscoussGroup(\n      discussionId: $discussionId\n      userId: $userId\n      messageInput: $messageInput\n      receiverId: $receiverId\n      discussGroupId: $discussGroupId\n    ) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n":
    types.SendMessageDiscoussGroupDocument,
  "\n  mutation SendMessageDiscussGroupMobile(\n    $discussionId: Float!\n    $userId: Float!\n    $messageInput: MessageInput!\n    $data: [Upload!]\n    $receiverId: Float\n    $discussGroupId: Float\n  ) {\n    sendMessageDiscussGroupMobile(\n      discussionId: $discussionId\n      userId: $userId\n      messageInput: $messageInput\n      data: $data\n      receiverId: $receiverId\n      discussGroupId: $discussGroupId\n    ) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n":
    types.SendMessageDiscussGroupMobileDocument,
  "\n  mutation DeleteMessageById($userId: Float!, $messageId: Float!) {\n    deleteMessageById(userId: $userId, messageId: $messageId)\n  }\n":
    types.DeleteMessageByIdDocument,
  "\n  mutation ModifyMessage(\n    $userId: Float!\n    $newMessage: String!\n    $messageId: Float!\n  ) {\n    modifyMessage(\n      userId: $userId\n      newMessage: $newMessage\n      messageId: $messageId\n    )\n  }\n":
    types.ModifyMessageDocument,
  "\n  mutation WrittingCheck(\n    $isWritting: Boolean!\n    $userId: Float!\n    $discussionId: Float!\n  ) {\n    writtingCheck(\n      isWritting: $isWritting\n      userId: $userId\n      discussionId: $discussionId\n    ) {\n      success\n      message\n    }\n  }\n":
    types.WrittingCheckDocument,
  "\n  query MessageTwoUser($discussionId: Float!, $cursor: Float, $limit: Float) {\n    messageTwoUser(discussionId: $discussionId, cursor: $cursor, limit: $limit) {\n      id\n      User {\n        id\n        lastname\n        firstname\n        photo\n        status\n      }\n      content\n      files {\n        name\n        extension\n        url\n        id\n      }\n      receiverId\n      discussGroupId\n      createdAt\n      updatedAt\n    }\n  }\n":
    types.MessageTwoUserDocument,
  "\n  subscription MessageToUser($userId: Float!) {\n    messageToUser(userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n":
    types.MessageToUserDocument,
  "\n  subscription WriteMessage($userId: Float!) {\n    writeMessage(userId: $userId) {\n      isWritting\n      discussionId\n      user {\n        photo\n        id\n        lastname\n        firstname\n        status\n      }\n    }\n  }\n":
    types.WriteMessageDocument,
  "\n  query GetNotifications($userId: Float!, $cursor: Float) {\n    getNotifications(userId: $userId, cursor: $cursor) {\n      id\n      name\n      description\n      updatedAt\n      createdAt\n    }\n  }\n":
    types.GetNotificationsDocument,
  "\n  subscription CommentPost($userId: Float!) {\n    commentPost(userId: $userId) {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n":
    types.CommentPostDocument,
  "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n      success\n      data {\n        id\n        token\n        email\n        firstname\n        mode\n        lastname\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n    }\n  }\n":
    types.LoginDocument,
  "\n  mutation signup($userInput: SignupInput!) {\n    signup(userInput: $userInput) {\n      message\n      success\n      data {\n        id\n        email\n        firstname\n        lastname\n        mode\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n        token\n      }\n    }\n  }\n":
    types.SignupDocument,
  "\n  mutation UpdateUser($updateUserInput: UpdateUserInput!, $userId: Float!) {\n    updateUser(updateUserInput: $updateUserInput, userId: $userId)\n  }\n":
    types.UpdateUserDocument,
  "\n  mutation DeleteFriend($receiverId: Float!, $userId: Float!) {\n    deleteFriend(receiverId: $receiverId, userId: $userId)\n  }\n":
    types.DeleteFriendDocument,
  "\n  mutation ChangeStatus($status: Boolean!, $userId: Float!) {\n    changeStatus(status: $status, userId: $userId)\n  }\n":
    types.ChangeStatusDocument,
  "\n  query AllUser {\n    allUser {\n      id\n      lastname\n      firstname\n      email\n      civilite\n      photo\n    }\n  }\n":
    types.AllUserDocument,
  "\n  query Profile($viewerId: Float!, $profilId: Float!) {\n    profile(viewerId: $viewerId, profilId: $profilId) {\n      user {\n        id\n        email\n        firstname\n        lastname\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n      friends {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n      relation {\n        id\n        status\n        receiverId\n        userId\n      }\n    }\n  }\n":
    types.ProfileDocument,
  "\n  mutation CallUser($discussionId: Float!, $userId: Float!) {\n    callUser(discussionId: $discussionId, userId: $userId)\n  }\n":
    types.CallUserDocument,
  "\n  mutation HandleCallMutation(\n    $status: Boolean!\n    $token: String!\n    $userId: Float!\n  ) {\n    handleCallMutation(status: $status, token: $token, userId: $userId)\n  }\n":
    types.HandleCallMutationDocument,
  "\n  mutation SendSignal(\n    $receiverId: Float!\n    $signal: String!\n    $userId: Float!\n    $audio: Boolean!\n    $video: Boolean!\n  ) {\n    sendSignal(\n      receiverId: $receiverId\n      signal: $signal\n      userId: $userId\n      audio: $audio\n      video: $video\n    )\n  }\n":
    types.SendSignalDocument,
  "\n  mutation ReturnSignal(\n    $receiverId: Float!\n    $signal: String!\n    $userId: Float!\n    $audio: Boolean!\n    $video: Boolean!\n  ) {\n    returnSignal(\n      receiverId: $receiverId\n      signal: $signal\n      userId: $userId\n      audio: $audio\n      video: $video\n    )\n  }\n":
    types.ReturnSignalDocument,
  "\n  mutation LeaveCall($token: String!, $userId: Float!) {\n    leaveCall(token: $token, userId: $userId)\n  }\n":
    types.LeaveCallDocument,
  "\n  query GetVideoCall($token: String!, $userId: Float!) {\n    getVideoCall(token: $token, userId: $userId) {\n      id\n      status\n      createdAt\n      updatedAt\n      members {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n    }\n  }\n":
    types.GetVideoCallDocument,
  "\n  subscription ListenCall($userId: Float!) {\n    listenCall(userId: $userId) {\n      token\n      discussion {\n        id\n        theme\n        User {\n          id\n          firstname\n          lastname\n          status\n          photo\n        }\n        Receiver {\n          id\n          status\n          firstname\n          lastname\n          photo\n        }\n        DiscussGroup {\n          id\n          groupName\n          coverPhoto\n        }\n      }\n    }\n  }\n":
    types.ListenCallDocument,
  "\n  subscription LisenSendSignal($userId: Float!) {\n    lisenSendSignal(userId: $userId) {\n      signal\n      receiverId\n      audio\n      video\n      user {\n        id\n        firstname\n        lastname\n        photo\n        status\n      }\n    }\n  }\n":
    types.LisenSendSignalDocument,
  "\n  subscription LisenReturnSignal($userId: Float!) {\n    lisenReturnSignal(userId: $userId) {\n      signal\n      receiverId\n      audio\n      video\n      user {\n        id\n        firstname\n        lastname\n        photo\n        status\n      }\n    }\n  }\n":
    types.LisenReturnSignalDocument,
  "\n  subscription LisenLeaveCall($userId: Float!) {\n    lisenLeaveCall(userId: $userId) {\n      id\n      status\n      firstname\n      lastname\n      photo\n    }\n  }\n":
    types.LisenLeaveCallDocument,
  "\n  subscription Subscription($userId: Float!) {\n    deniedCall(userId: $userId)\n  }\n":
    types.SubscriptionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateDiscussGroup(\n    $userId: Float!\n    $userChoose: UserChoose!\n    $data: DiscussGroupInput!\n  ) {\n    createDiscussGroup(userId: $userId, userChoose: $userChoose, data: $data) {\n      groupName\n      coverPhoto\n      id\n      Discussion {\n        id\n        theme\n        userId\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation CreateDiscussGroup(\n    $userId: Float!\n    $userChoose: UserChoose!\n    $data: DiscussGroupInput!\n  ) {\n    createDiscussGroup(userId: $userId, userChoose: $userChoose, data: $data) {\n      groupName\n      coverPhoto\n      id\n      Discussion {\n        id\n        theme\n        userId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetAllGroupUser($userId: Float!) {\n    getAllGroupUser(userId: $userId) {\n      groupName\n      coverPhoto\n      id\n      createdAt\n      updatedAt\n    }\n  }\n"
): (typeof documents)["\n  query GetAllGroupUser($userId: Float!) {\n    getAllGroupUser(userId: $userId) {\n      groupName\n      coverPhoto\n      id\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateDiscussion($receiverId: Float!, $userId: Float!) {\n    createDiscussion(receiverId: $receiverId, userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation CreateDiscussion($receiverId: Float!, $userId: Float!) {\n    createDiscussion(receiverId: $receiverId, userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ChangeTheme($data: DiscussionInput!) {\n    changeTheme(data: $data) {\n      theme\n    }\n  }\n"
): (typeof documents)["\n  mutation ChangeTheme($data: DiscussionInput!) {\n    changeTheme(data: $data) {\n      theme\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetDiscussionCurrentUser($userId: Float!, $cursor: Float) {\n    getDiscussionCurrentUser(userId: $userId, cursor: $cursor) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"
): (typeof documents)["\n  query GetDiscussionCurrentUser($userId: Float!, $cursor: Float) {\n    getDiscussionCurrentUser(userId: $userId, cursor: $cursor) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription ListenTheme($userId: Float!) {\n    listenTheme(userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"
): (typeof documents)["\n  subscription ListenTheme($userId: Float!) {\n    listenTheme(userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation Upload($data: [Upload!]!) {\n    upload(data: $data) {\n      name\n      url\n      extension\n    }\n  }\n"
): (typeof documents)["\n  mutation Upload($data: [Upload!]!) {\n    upload(data: $data) {\n      name\n      url\n      extension\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SendMessageDiscoussGroup(\n    $discussionId: Float!\n    $userId: Float!\n    $messageInput: MessageInput!\n    $receiverId: Float\n    $discussGroupId: Float\n  ) {\n    sendMessageDiscoussGroup(\n      discussionId: $discussionId\n      userId: $userId\n      messageInput: $messageInput\n      receiverId: $receiverId\n      discussGroupId: $discussGroupId\n    ) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation SendMessageDiscoussGroup(\n    $discussionId: Float!\n    $userId: Float!\n    $messageInput: MessageInput!\n    $receiverId: Float\n    $discussGroupId: Float\n  ) {\n    sendMessageDiscoussGroup(\n      discussionId: $discussionId\n      userId: $userId\n      messageInput: $messageInput\n      receiverId: $receiverId\n      discussGroupId: $discussGroupId\n    ) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SendMessageDiscussGroupMobile(\n    $discussionId: Float!\n    $userId: Float!\n    $messageInput: MessageInput!\n    $data: [Upload!]\n    $receiverId: Float\n    $discussGroupId: Float\n  ) {\n    sendMessageDiscussGroupMobile(\n      discussionId: $discussionId\n      userId: $userId\n      messageInput: $messageInput\n      data: $data\n      receiverId: $receiverId\n      discussGroupId: $discussGroupId\n    ) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation SendMessageDiscussGroupMobile(\n    $discussionId: Float!\n    $userId: Float!\n    $messageInput: MessageInput!\n    $data: [Upload!]\n    $receiverId: Float\n    $discussGroupId: Float\n  ) {\n    sendMessageDiscussGroupMobile(\n      discussionId: $discussionId\n      userId: $userId\n      messageInput: $messageInput\n      data: $data\n      receiverId: $receiverId\n      discussGroupId: $discussGroupId\n    ) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteMessageById($userId: Float!, $messageId: Float!) {\n    deleteMessageById(userId: $userId, messageId: $messageId)\n  }\n"
): (typeof documents)["\n  mutation DeleteMessageById($userId: Float!, $messageId: Float!) {\n    deleteMessageById(userId: $userId, messageId: $messageId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ModifyMessage(\n    $userId: Float!\n    $newMessage: String!\n    $messageId: Float!\n  ) {\n    modifyMessage(\n      userId: $userId\n      newMessage: $newMessage\n      messageId: $messageId\n    )\n  }\n"
): (typeof documents)["\n  mutation ModifyMessage(\n    $userId: Float!\n    $newMessage: String!\n    $messageId: Float!\n  ) {\n    modifyMessage(\n      userId: $userId\n      newMessage: $newMessage\n      messageId: $messageId\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation WrittingCheck(\n    $isWritting: Boolean!\n    $userId: Float!\n    $discussionId: Float!\n  ) {\n    writtingCheck(\n      isWritting: $isWritting\n      userId: $userId\n      discussionId: $discussionId\n    ) {\n      success\n      message\n    }\n  }\n"
): (typeof documents)["\n  mutation WrittingCheck(\n    $isWritting: Boolean!\n    $userId: Float!\n    $discussionId: Float!\n  ) {\n    writtingCheck(\n      isWritting: $isWritting\n      userId: $userId\n      discussionId: $discussionId\n    ) {\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query MessageTwoUser($discussionId: Float!, $cursor: Float, $limit: Float) {\n    messageTwoUser(discussionId: $discussionId, cursor: $cursor, limit: $limit) {\n      id\n      User {\n        id\n        lastname\n        firstname\n        photo\n        status\n      }\n      content\n      files {\n        name\n        extension\n        url\n        id\n      }\n      receiverId\n      discussGroupId\n      createdAt\n      updatedAt\n    }\n  }\n"
): (typeof documents)["\n  query MessageTwoUser($discussionId: Float!, $cursor: Float, $limit: Float) {\n    messageTwoUser(discussionId: $discussionId, cursor: $cursor, limit: $limit) {\n      id\n      User {\n        id\n        lastname\n        firstname\n        photo\n        status\n      }\n      content\n      files {\n        name\n        extension\n        url\n        id\n      }\n      receiverId\n      discussGroupId\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription MessageToUser($userId: Float!) {\n    messageToUser(userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"
): (typeof documents)["\n  subscription MessageToUser($userId: Float!) {\n    messageToUser(userId: $userId) {\n      theme\n      createdAt\n      updatedAt\n      User {\n        lastname\n        firstname\n        id\n        photo\n        status\n      }\n      Receiver {\n        firstname\n        lastname\n        id\n        photo\n        status\n      }\n      DiscussGroup {\n        groupName\n        coverPhoto\n        id\n      }\n      messages {\n        id\n        User {\n          id\n          lastname\n          firstname\n          photo\n          status\n        }\n        content\n        files {\n          name\n          extension\n          url\n          id\n        }\n        receiverId\n        discussGroupId\n        createdAt\n        updatedAt\n      }\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription WriteMessage($userId: Float!) {\n    writeMessage(userId: $userId) {\n      isWritting\n      discussionId\n      user {\n        photo\n        id\n        lastname\n        firstname\n        status\n      }\n    }\n  }\n"
): (typeof documents)["\n  subscription WriteMessage($userId: Float!) {\n    writeMessage(userId: $userId) {\n      isWritting\n      discussionId\n      user {\n        photo\n        id\n        lastname\n        firstname\n        status\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetNotifications($userId: Float!, $cursor: Float) {\n    getNotifications(userId: $userId, cursor: $cursor) {\n      id\n      name\n      description\n      updatedAt\n      createdAt\n    }\n  }\n"
): (typeof documents)["\n  query GetNotifications($userId: Float!, $cursor: Float) {\n    getNotifications(userId: $userId, cursor: $cursor) {\n      id\n      name\n      description\n      updatedAt\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription CommentPost($userId: Float!) {\n    commentPost(userId: $userId) {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"
): (typeof documents)["\n  subscription CommentPost($userId: Float!) {\n    commentPost(userId: $userId) {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n      success\n      data {\n        id\n        token\n        email\n        firstname\n        mode\n        lastname\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n      success\n      data {\n        id\n        token\n        email\n        firstname\n        mode\n        lastname\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation signup($userInput: SignupInput!) {\n    signup(userInput: $userInput) {\n      message\n      success\n      data {\n        id\n        email\n        firstname\n        lastname\n        mode\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n        token\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation signup($userInput: SignupInput!) {\n    signup(userInput: $userInput) {\n      message\n      success\n      data {\n        id\n        email\n        firstname\n        lastname\n        mode\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n        token\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUser($updateUserInput: UpdateUserInput!, $userId: Float!) {\n    updateUser(updateUserInput: $updateUserInput, userId: $userId)\n  }\n"
): (typeof documents)["\n  mutation UpdateUser($updateUserInput: UpdateUserInput!, $userId: Float!) {\n    updateUser(updateUserInput: $updateUserInput, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteFriend($receiverId: Float!, $userId: Float!) {\n    deleteFriend(receiverId: $receiverId, userId: $userId)\n  }\n"
): (typeof documents)["\n  mutation DeleteFriend($receiverId: Float!, $userId: Float!) {\n    deleteFriend(receiverId: $receiverId, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ChangeStatus($status: Boolean!, $userId: Float!) {\n    changeStatus(status: $status, userId: $userId)\n  }\n"
): (typeof documents)["\n  mutation ChangeStatus($status: Boolean!, $userId: Float!) {\n    changeStatus(status: $status, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query AllUser {\n    allUser {\n      id\n      lastname\n      firstname\n      email\n      civilite\n      photo\n    }\n  }\n"
): (typeof documents)["\n  query AllUser {\n    allUser {\n      id\n      lastname\n      firstname\n      email\n      civilite\n      photo\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Profile($viewerId: Float!, $profilId: Float!) {\n    profile(viewerId: $viewerId, profilId: $profilId) {\n      user {\n        id\n        email\n        firstname\n        lastname\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n      friends {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n      relation {\n        id\n        status\n        receiverId\n        userId\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Profile($viewerId: Float!, $profilId: Float!) {\n    profile(viewerId: $viewerId, profilId: $profilId) {\n      user {\n        id\n        email\n        firstname\n        lastname\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n      friends {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n      relation {\n        id\n        status\n        receiverId\n        userId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CallUser($discussionId: Float!, $userId: Float!) {\n    callUser(discussionId: $discussionId, userId: $userId)\n  }\n"
): (typeof documents)["\n  mutation CallUser($discussionId: Float!, $userId: Float!) {\n    callUser(discussionId: $discussionId, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation HandleCallMutation(\n    $status: Boolean!\n    $token: String!\n    $userId: Float!\n  ) {\n    handleCallMutation(status: $status, token: $token, userId: $userId)\n  }\n"
): (typeof documents)["\n  mutation HandleCallMutation(\n    $status: Boolean!\n    $token: String!\n    $userId: Float!\n  ) {\n    handleCallMutation(status: $status, token: $token, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SendSignal(\n    $receiverId: Float!\n    $signal: String!\n    $userId: Float!\n    $audio: Boolean!\n    $video: Boolean!\n  ) {\n    sendSignal(\n      receiverId: $receiverId\n      signal: $signal\n      userId: $userId\n      audio: $audio\n      video: $video\n    )\n  }\n"
): (typeof documents)["\n  mutation SendSignal(\n    $receiverId: Float!\n    $signal: String!\n    $userId: Float!\n    $audio: Boolean!\n    $video: Boolean!\n  ) {\n    sendSignal(\n      receiverId: $receiverId\n      signal: $signal\n      userId: $userId\n      audio: $audio\n      video: $video\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ReturnSignal(\n    $receiverId: Float!\n    $signal: String!\n    $userId: Float!\n    $audio: Boolean!\n    $video: Boolean!\n  ) {\n    returnSignal(\n      receiverId: $receiverId\n      signal: $signal\n      userId: $userId\n      audio: $audio\n      video: $video\n    )\n  }\n"
): (typeof documents)["\n  mutation ReturnSignal(\n    $receiverId: Float!\n    $signal: String!\n    $userId: Float!\n    $audio: Boolean!\n    $video: Boolean!\n  ) {\n    returnSignal(\n      receiverId: $receiverId\n      signal: $signal\n      userId: $userId\n      audio: $audio\n      video: $video\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation LeaveCall($token: String!, $userId: Float!) {\n    leaveCall(token: $token, userId: $userId)\n  }\n"
): (typeof documents)["\n  mutation LeaveCall($token: String!, $userId: Float!) {\n    leaveCall(token: $token, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetVideoCall($token: String!, $userId: Float!) {\n    getVideoCall(token: $token, userId: $userId) {\n      id\n      status\n      createdAt\n      updatedAt\n      members {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetVideoCall($token: String!, $userId: Float!) {\n    getVideoCall(token: $token, userId: $userId) {\n      id\n      status\n      createdAt\n      updatedAt\n      members {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription ListenCall($userId: Float!) {\n    listenCall(userId: $userId) {\n      token\n      discussion {\n        id\n        theme\n        User {\n          id\n          firstname\n          lastname\n          status\n          photo\n        }\n        Receiver {\n          id\n          status\n          firstname\n          lastname\n          photo\n        }\n        DiscussGroup {\n          id\n          groupName\n          coverPhoto\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  subscription ListenCall($userId: Float!) {\n    listenCall(userId: $userId) {\n      token\n      discussion {\n        id\n        theme\n        User {\n          id\n          firstname\n          lastname\n          status\n          photo\n        }\n        Receiver {\n          id\n          status\n          firstname\n          lastname\n          photo\n        }\n        DiscussGroup {\n          id\n          groupName\n          coverPhoto\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription LisenSendSignal($userId: Float!) {\n    lisenSendSignal(userId: $userId) {\n      signal\n      receiverId\n      audio\n      video\n      user {\n        id\n        firstname\n        lastname\n        photo\n        status\n      }\n    }\n  }\n"
): (typeof documents)["\n  subscription LisenSendSignal($userId: Float!) {\n    lisenSendSignal(userId: $userId) {\n      signal\n      receiverId\n      audio\n      video\n      user {\n        id\n        firstname\n        lastname\n        photo\n        status\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription LisenReturnSignal($userId: Float!) {\n    lisenReturnSignal(userId: $userId) {\n      signal\n      receiverId\n      audio\n      video\n      user {\n        id\n        firstname\n        lastname\n        photo\n        status\n      }\n    }\n  }\n"
): (typeof documents)["\n  subscription LisenReturnSignal($userId: Float!) {\n    lisenReturnSignal(userId: $userId) {\n      signal\n      receiverId\n      audio\n      video\n      user {\n        id\n        firstname\n        lastname\n        photo\n        status\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription LisenLeaveCall($userId: Float!) {\n    lisenLeaveCall(userId: $userId) {\n      id\n      status\n      firstname\n      lastname\n      photo\n    }\n  }\n"
): (typeof documents)["\n  subscription LisenLeaveCall($userId: Float!) {\n    lisenLeaveCall(userId: $userId) {\n      id\n      status\n      firstname\n      lastname\n      photo\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  subscription Subscription($userId: Float!) {\n    deniedCall(userId: $userId)\n  }\n"
): (typeof documents)["\n  subscription Subscription($userId: Float!) {\n    deniedCall(userId: $userId)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
