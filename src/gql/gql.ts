/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n      success\n      data {\n        id\n        token\n        email\n        firstname\n        mode\n        lastname\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation signup($userInput: SignupInput!) {\n    signup(userInput: $userInput) {\n      message\n      success\n      data {\n        id\n        email\n        firstname\n        lastname\n        mode\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n        token\n      }\n    }\n  }\n": types.SignupDocument,
    "\n  mutation UpdateUser($updateUserInput: UpdateUserInput!, $userId: Float!) {\n    updateUser(updateUserInput: $updateUserInput, userId: $userId)\n  }\n": types.UpdateUserDocument,
    "\n  mutation DeleteFriend($receiverId: Float!, $userId: Float!) {\n    deleteFriend(receiverId: $receiverId, userId: $userId)\n  }\n": types.DeleteFriendDocument,
    "\n  mutation ChangeStatus($status: Boolean!, $userId: Float!) {\n    changeStatus(status: $status, userId: $userId)\n  }\n": types.ChangeStatusDocument,
    "\n  query AllUser {\n    allUser {\n      id\n      lastname\n      firstname\n      email\n      civilite\n      photo\n    }\n  }\n": types.AllUserDocument,
    "\n  query Profile($viewerId: Float!, $profilId: Float!) {\n    profile(viewerId: $viewerId, profilId: $profilId) {\n      user {\n        id\n        email\n        firstname\n        lastname\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n      friends {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n      relation {\n        id\n        status\n        receiverId\n        userId\n      }\n    }\n  }\n": types.ProfileDocument,
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
export function graphql(source: "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n      success\n      data {\n        id\n        token\n        email\n        firstname\n        mode\n        lastname\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n      success\n      data {\n        id\n        token\n        email\n        firstname\n        mode\n        lastname\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signup($userInput: SignupInput!) {\n    signup(userInput: $userInput) {\n      message\n      success\n      data {\n        id\n        email\n        firstname\n        lastname\n        mode\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n        token\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation signup($userInput: SignupInput!) {\n    signup(userInput: $userInput) {\n      message\n      success\n      data {\n        id\n        email\n        firstname\n        lastname\n        mode\n        status\n        photo\n        civilite\n        createdAt\n        updatedAt\n        token\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($updateUserInput: UpdateUserInput!, $userId: Float!) {\n    updateUser(updateUserInput: $updateUserInput, userId: $userId)\n  }\n"): (typeof documents)["\n  mutation UpdateUser($updateUserInput: UpdateUserInput!, $userId: Float!) {\n    updateUser(updateUserInput: $updateUserInput, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteFriend($receiverId: Float!, $userId: Float!) {\n    deleteFriend(receiverId: $receiverId, userId: $userId)\n  }\n"): (typeof documents)["\n  mutation DeleteFriend($receiverId: Float!, $userId: Float!) {\n    deleteFriend(receiverId: $receiverId, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ChangeStatus($status: Boolean!, $userId: Float!) {\n    changeStatus(status: $status, userId: $userId)\n  }\n"): (typeof documents)["\n  mutation ChangeStatus($status: Boolean!, $userId: Float!) {\n    changeStatus(status: $status, userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllUser {\n    allUser {\n      id\n      lastname\n      firstname\n      email\n      civilite\n      photo\n    }\n  }\n"): (typeof documents)["\n  query AllUser {\n    allUser {\n      id\n      lastname\n      firstname\n      email\n      civilite\n      photo\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Profile($viewerId: Float!, $profilId: Float!) {\n    profile(viewerId: $viewerId, profilId: $profilId) {\n      user {\n        id\n        email\n        firstname\n        lastname\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n      friends {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n      relation {\n        id\n        status\n        receiverId\n        userId\n      }\n    }\n  }\n"): (typeof documents)["\n  query Profile($viewerId: Float!, $profilId: Float!) {\n    profile(viewerId: $viewerId, profilId: $profilId) {\n      user {\n        id\n        email\n        firstname\n        lastname\n        photo\n        civilite\n        createdAt\n        updatedAt\n      }\n      friends {\n        id\n        status\n        firstname\n        lastname\n        photo\n      }\n      relation {\n        id\n        status\n        receiverId\n        userId\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;