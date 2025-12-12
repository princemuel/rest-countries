import { rspack } from "@rspack/core";
import { resolve } from "node:path";

export default {
  plugins: [
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: "node_modules/leaflet/dist/images",
          to: resolve(process.cwd(), "public", "leaflet", "images"),
        },
      ],
    }),
  ],
};
