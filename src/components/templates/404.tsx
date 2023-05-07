import { Link } from 'react-router-dom';
import { Text } from '../atoms';

interface Props {}

const ErrorPageTemplate = (props: Props) => {
  return (
    <div>
      <div>
        <Text variant='h1'>404</Text>
        <p>{/* <i>{error?.statusText || error?.message}</i> */}</p>
        <Text>Page not found!</Text>
        <Text>
          This page is away on a vacation to Hawaii enjoying a coconut drink on
          a sunny beach so you may not get it today.
        </Text>
        <Text>
          Not to worry. You can go back to the
          <Link to='/'>Homepage</Link>
          &nbsp;or another page using the navigation menu
        </Text>
        <Text variant='strong'>
          (It will go back to the previous page after 10 seconds)
        </Text>
      </div>
    </div>
  );
};

export { ErrorPageTemplate };
