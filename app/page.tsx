import { CountriesProvider, ImagesProvider } from "@/context";
import {
  blurDataUrls,
  getAllCountries,
  preloadBlurDataUrls,
  preloadCountries,
} from "@/lib";
import HomepageTemplate from "./home";

async function PageRoute() {
  preloadCountries();

  const imageResponse = await getAllCountries();
  const images = (imageResponse || []).map((response) => ({
    cca3: response?.cca3,
    url: response?.flags?.svg,
    alt: response?.flags?.alt,
    blurredDataUrl: "",
  }));

  preloadBlurDataUrls(images);

  return (
    <CountriesProvider promise={getAllCountries()}>
      <ImagesProvider promise={blurDataUrls(images)}>
        <HomepageTemplate />
      </ImagesProvider>
    </CountriesProvider>
  );
}

export default PageRoute;
