import React from 'react';

export enum ContextKeys {
  COUNTRIESSTATE = 'COUNTRIESSTATE',
  COUNTRIESDISPATCH = 'COUNTRIESDISPATCH',
  THEMESTATE = 'THEMESTATE',
  THEMEDISPATCH = 'THEMEDISPATCH',
}
export type ContextValue = React.Context<any | null>;
