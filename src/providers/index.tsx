import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../lib";
import { router } from "../routes";

export function Providers() {
  const [client] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 1000 * 60 * 60 * 1, // 1 hr
            retry: 1,
            refetchOnMount: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={client}>
      <HelmetProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}
