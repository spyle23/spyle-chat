import React, { useEffect, useState } from "react";
import { apolloClient } from "../apolloClient";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

export const GraphqlProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient, setQueryClient] =
    useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const initializeApolloClient = async () => {
      const client = await apolloClient();
      setQueryClient(client);
    };

    initializeApolloClient();
  }, []);

  if (!queryClient) return null;

  return <ApolloProvider client={queryClient}>{children}</ApolloProvider>;
};
