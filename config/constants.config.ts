export const REST_COUNTRIES_API =
  process.env.NEXT_PUBLIC_COUNTRIES_BASE_URL || '';

// Set default sizing to control aspect ratio which will scale responsively but also help avoid layout shifts
export const DEFAULT_MAP_WIDTH = 640;
export const DEFAULT_MAP_HEIGHT = 360;
export const DEFAULT_MAP_URL =
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const DEFAULT_MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
