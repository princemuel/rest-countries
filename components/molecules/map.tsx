import { DEFAULT_MAP_HEIGHT, DEFAULT_MAP_WIDTH } from "@/config";
import dynamic from "next/dynamic";
import * as ReactLeaflet from "react-leaflet";

// @ts-expect-error
interface Props extends ReactLeaflet.MapContainerProps {
  width: string | number;
  height: string | number;
  children: (value: typeof ReactLeaflet) => React.ReactNode;
  location: [number, number];
}
const DynamicMap = dynamic(() => import("../atoms/base-map"), {
  ssr: false,
});

const Map = ({
  location,
  width = DEFAULT_MAP_WIDTH,
  height = DEFAULT_MAP_HEIGHT,
  ...rest
}: Props) => {
  // const DynamicMap = useMemo(() => {
  //   return dynamic(() => import('../atoms/base-map'), {
  //     ssr: false,
  //   });
  // }, []);
  return (
    <section>
      <DynamicMap {...rest} />
    </section>
  );
};

export { Map };
