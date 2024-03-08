import { MessageTwoUserQuery } from "../gql/graphql";

export type MessageType = MessageTwoUserQuery["messageTwoUser"][0];
export type FileType = MessageType["files"][0];