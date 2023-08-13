'use client';

import { cn } from '@/helpers';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import * as ReactLeaflet from 'react-leaflet';

const { MapContainer } = ReactLeaflet;

// @ts-expect-error
interface Props extends ReactLeaflet.MapContainerProps {
  children: (f1: typeof ReactLeaflet, f2: typeof Leaflet) => React.ReactNode;
}

const Map = ({ children, className, ...rest }: Props) => {
  useEffect(() => {
    (async function init() {
      //@ts-expect-error
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
        iconUrl: '/leaflet/images/marker-icon.png',
        shadowUrl: '/leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <MapContainer className={cn('h-[30vmax]', className)} {...rest}>
      {children?.(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
