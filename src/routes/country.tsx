type Props = {};

const Country = (props: Props) => {
  // const { country, borders } = useLoaderData() as {
  //   country: CountryType;
  //   borders: {
  //     name: string;
  //     code: string;
  //   }[];
  // };

  return (
    <main className='text-[1.6rem]'>
      {/* <CountryTemplate country={country} borders={borders} /> */}
    </main>
  );
};

export { Country };

// async function loader({ params }) {
//   const response = await fetcher(`/alpha/${params?.id}`);
//   const country = response.data as CountryType;
//   const codes = country.borders;
//   const borders = hasValues(codes)
//     ? await Promise.all(
//         codes?.map(async (code) => {
//           const response = await fetcher(`/alpha/${code}`);
//           const data = response.data as CountryType;
//           return { name: data.name, code: data.cca3 };
//         }) || []
//       )
//     : [];
//   return {
//     country,
//     borders,
//   };
// }
