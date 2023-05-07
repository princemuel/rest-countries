import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { countries } from './countries';

export const queries = mergeQueryKeys(countries);
