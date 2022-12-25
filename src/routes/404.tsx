import { useEffect } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { Text } from '../components';

type Props = {};

const ErrorPage = (props: Props) => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <main>
      <div>
        <div>
          <Text as='h1'>404</Text>
          <p>
            {/* @ts-expect-error */}
            <i>{error?.statusText || error?.message}</i>
          </p>
          <Text>Page not found!</Text>
          <Text>
            This page is away on a vacation to Hawaii enjoying a coconut drink
            on a sunny beach so you may not get it today.
          </Text>
          <Text>
            Not to worry. You can go back to the
            <Link to='/'>Homepage</Link>
            &nbsp;or another page using the navigation menu
          </Text>
          <Text as='strong'>
            (It will go back to the previous page after 10 seconds)
          </Text>
        </div>
      </div>
    </main>
  );
};

export { ErrorPage };
