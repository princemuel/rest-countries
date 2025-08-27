import { isString } from "@/utils/guards";

export const throwAsError = (exception: unknown) => {
  throw isString(exception) ? new Error(exception) : exception;
};

export const getErrorMessage = (exception: unknown): string => {
  if (exception instanceof Error) return exception.message;
  if (isString(exception)) return exception;
  return "An unknown error occurred";
};
