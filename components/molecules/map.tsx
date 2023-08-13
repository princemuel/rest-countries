'use client';

import { DEFAULT_MAP_HEIGHT, DEFAULT_MAP_WIDTH } from '@/config';
import Leaflet from 'leaflet';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import * as ReactLeaflet from 'react-leaflet';

// @ts-expect-error
interface Props extends ReactLeaflet.MapContainerProps {
  width: string | number;
  height: string | number;
  children: (f1: typeof ReactLeaflet, f2: typeof Leaflet) => React.ReactNode;
  location: [number, number];
}

const Map = ({
  location,
  width = DEFAULT_MAP_WIDTH,
  height = DEFAULT_MAP_HEIGHT,
  ...rest
}: Props) => {
  const DynamicMap = useMemo(() => {
    return dynamic(() => import('../atoms/base-map'), {
      ssr: false,
    });
  }, [location]);

  return (
    <section>
      <DynamicMap {...rest} />
    </section>
  );
};

export { Map };
