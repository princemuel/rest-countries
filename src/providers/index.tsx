//@ts-nocheck
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { BASE_URL, ThemeProvider } from "../lib";
import { router } from "../routes";

const defaultQueryFn = async ({ queryKey }) => {
  const url = `${BASE_URL}/${queryKey[0]}`;
  console.log("Fetching from: ", url);

  const response = await fetch(url);
  return response.json();
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      cacheTime: 1000 * 60 * 60 * 24 * 2, // 2 days
      staleTime: 1000 * 60 * 60 * 2, // 2 hrs
      retry: 1,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}
