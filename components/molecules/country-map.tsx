"use client";

import { DEFAULT_MAP_ATTRIBUTION, DEFAULT_MAP_URL } from "@/config";
import * as React from "react";
import { MapPlaceholder } from "../atoms";
import { Map } from "../molecules";

interface Props {
  country: CountryType;
}

export function CountryMap({ country }: Props) {
  return (
    <Map
      width="640"
      height="360"
      center={country?.capitalInfo?.latlng || country?.latlng || [51, -0.09]}
      zoom={country?.latlng ? 7 : 2}
      scrollWheelZoom={false}
      location={country?.latlng}
      className=""
      placeholder={<MapPlaceholder location={country?.name.common} />}
    >
      {({ TileLayer, Marker, Popup }) => (
        <React.Fragment>
          <TileLayer
            url={DEFAULT_MAP_URL}
            attribution={DEFAULT_MAP_ATTRIBUTION}
          />
          <Marker
            position={
              country?.capitalInfo?.latlng || country?.latlng || [51.51, -0.08]
            }
          >
            <Popup>Capital</Popup>
          </Marker>
        </React.Fragment>
      )}
    </Map>
  );
}
