import { Container, CountryDetails } from "@/components";
import { getBySlug } from "@/lib";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

interface Props {
  slug?: string;
}

export default function Template({ slug }: Props) {
  void getBySlug(slug);

  return (
    <main className="mt-16 flex flex-col gap-12">
      <section>
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start rounded-md bg-brand-100 px-4 py-1 text-base font-light shadow-pill dark:bg-brand-500"
          >
            <MoveLeft />
            <span>Back</span>
          </Link>
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
}
