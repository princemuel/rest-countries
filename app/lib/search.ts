export const search = async (query: string) => {
  const response = await fetch(
    new URL(`/api/search?query=${query}`, import.meta.env.SITE),
  );
  return response.json();
};
