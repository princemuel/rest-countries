import { Container, CountriesList, Filters } from "@/components";
import { Suspense } from "react";

const HomepageTemplate = () => {
  return (
    <main className="mt-16 flex flex-col gap-20">
      <section>
        <Container>
          <Filters />
        </Container>
      </section>

      <section>
        <Container>
          <Suspense fallback={<div>Loading..</div>}>
            <CountriesList />
          </Suspense>
        </Container>
      </section>
    </main>
  );
};

export default HomepageTemplate;
