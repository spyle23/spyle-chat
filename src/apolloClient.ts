import fetch from "cross-fetch";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { ApolloLink, HttpLink, split } from "@apollo/client/core";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { AuthStorage } from "./utils/AuthStorage";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

export const apolloClient = async (
  token?: string
): Promise<ApolloClient<NormalizedCacheObject>> => {
  const API_URI = process.env.EXPO_PUBLIC_API_URI;
  const API_URI_WS = process.env.EXPO_PUBLIC_URI_WS;

  const user = token ? token : (await AuthStorage.isAuth())?.token;
  const httpLink: HttpLink = new HttpLink({
    uri: API_URI,
    fetch,
    headers: {
      authorization: `Bearer ${user}`,
    },
  });

  const wsLink: GraphQLWsLink = new GraphQLWsLink(
    createClient({
      url: API_URI_WS as string,
      lazy: true,
      connectionParams: {
        authentication: `Bearer ${user}`,
      },
    })
  );

  const uploadLink = createUploadLink({
    uri: API_URI,
    fetch,
    headers: {
      authorization: `Bearer ${user}`,
    },
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  const link = ApolloLink.split(
    (operation) => {
      const definition = getMainDefinition(operation.query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "mutation" &&
        !!definition.selectionSet?.selections.find(
          (selection) =>
            selection.kind === "Field" && selection.name.value === "upload"
        )
      );
    },
    uploadLink as any,
    splitLink
  );

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  return client;
};
