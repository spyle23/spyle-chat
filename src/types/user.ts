import { LoginMutation } from "../gql/graphql";

export type LoginData = LoginMutation["login"]["data"];
