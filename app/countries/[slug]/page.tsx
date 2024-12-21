import { defineMeta } from "@/config";
import { hasValues } from "@/helpers";
import {
  getAllCountries,
  getCountryBySlug,
  preloadBase64,
  preloadCountry,
} from "@/lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CountryDetailsTemplate from "./country";

interface Props {
  params: IParams;
}

async function PageRoute({ params: { slug } }: Props) {
  preloadCountry(slug);

  const imageResponse = await getCountryBySlug(slug);

  if (!imageResponse || !hasValues(imageResponse)) throw notFound();

  preloadBase64(imageResponse[0]?.flags?.svg);

  return <CountryDetailsTemplate slug={slug} />;
}

export default PageRoute;

export async function generateStaticParams() {
  const countries = await getAllCountries();

  return (countries || []).map((country) => ({ slug: country?.cca3 }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const response = await getCountryBySlug(slug);

  const country = response[0];
  if (!country) throw notFound();

  // if (!country)
  //   return {
  //     title: 'Country Not Found',
  //     description: 'The requested resource does not exist',
  //   };

  const title = `${country?.name?.common} `;

  return defineMeta({
    title: title,
    description: country?.flags?.alt,
    icons: [
      country?.flags.svg,
      { rel: "icon", url: country?.flags?.png },
      { rel: "apple-touch-icon", url: country?.flags?.png },
    ],
    openGraph: {
      type: "article",
      title: title,
      description: country?.flags?.alt,
      authors: [
        "Rest Countries",
        "https://restcountries.com/",
        "Prince Muel",
        "https://princemuel.vercel.app/",
      ],
      publishedTime: new Date("2023-08-12").toISOString(),
      images: country?.flags?.png,
    },
    twitter: {
      title: title,
      description: country?.flags?.alt,
      images: [country?.flags?.png, country?.flags?.svg],
    },
  });
}
