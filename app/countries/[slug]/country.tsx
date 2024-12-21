import { Container, CountryDetails } from "@/components";
import { getCountryBySlug } from "@/lib";
import { MoveLeft } from "lucide-react";
import NextLink from "next/link";
import { Suspense } from "react";

interface Props {
  slug?: string;
}

const CountryDetailsTemplate = ({ slug }: Props) => {
  void getCountryBySlug(slug);

  return (
    <main className="mt-16 flex flex-col gap-12">
      <section>
        <Container>
          <NextLink
            href={"/"}
            className="inline-flex items-center gap-2 self-start rounded-md bg-brand-100 px-4 py-1 text-base font-light shadow-pill dark:bg-brand-500"
          >
            <MoveLeft />
            <span>Back</span>
          </NextLink>
        </Container>
      </section>

      <section>
        <Container>
          <Suspense fallback={<div>Loading..</div>}>
            <CountryDetails slug={slug} />
          </Suspense>
        </Container>
      </section>
    </main>
  );
};

export default CountryDetailsTemplate;
