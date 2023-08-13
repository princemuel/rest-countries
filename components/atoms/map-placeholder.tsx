interface PlaceholderProps {
  location?: string;
}

export function MapPlaceholder({ location }: PlaceholderProps) {
  return (
    <p>
      Location of {location?.toUpperCase()}.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}
