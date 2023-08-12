import { Link } from "react-router-dom";
import { Text } from "../atoms";

interface Props {
  country: CountryType;
}

const Card = ({ country }: Props) => {
  return (
    <article key={country.cca3} className='h-full'>
      <Link
        to={`/countries/${country?.cca3}`}
        className='flex h-full max-w-md cursor-pointer flex-col overflow-hidden rounded-lg shadow-card'
      >
        <figure className='flex-1 overflow-hidden'>
          <img
            src={country?.flags?.svg}
            alt={country?.flags?.alt}
            className='h-full w-full object-cover'
          />
        </figure>

        <div className='flex-1 bg-neutral-100 py-8 px-10 dark:bg-primary-500'>
          <Text
            variant='h3'
            className='mt-4 mb-6 text-[1.8rem] font-extrabold leading-[2.6rem]'
          >
            {country?.name?.official}
          </Text>

          <div className='> * + * space-y-4'>
            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <Text variant='span' className='font-semibold'>
                Population:
              </Text>
              <Text variant='span' className='font-light'>
                {(country?.population).toLocaleString("en-US")}
              </Text>
            </Text>

            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <Text variant='span' className='font-semibold'>
                Region:
              </Text>
              <Text variant='span' className='font-light'>
                {country?.region}
              </Text>
            </Text>

            <Text className='flex items-center gap-2 leading-[1.6rem]'>
              <Text variant='span' className='font-semibold'>
                Capital:
              </Text>
              <Text variant='span' className='font-light'>
                {country?.capital || ""}
              </Text>
            </Text>
          </div>
        </div>
      </Link>
    </article>
  );
};

export { Card };
