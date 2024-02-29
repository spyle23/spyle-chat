import React, { useEffect, useState } from "react";
import { apolloClient } from "../apolloClient";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { useApplication } from "../store/useApplication";

export const GraphqlProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient, setQueryClient] =
    useState<ApolloClient<NormalizedCacheObject>>();

  const { user } = useApplication();

  useEffect(() => {
    const initializeApolloClient = async () => {
      const client = await apolloClient(user?.token);
      setQueryClient(client);
    };

    initializeApolloClient();
  }, [user?.token]);

  if (!queryClient) return null;

  return <ApolloProvider client={queryClient}>{children}</ApolloProvider>;
};
