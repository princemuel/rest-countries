import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { ErrorPageTemplate } from '../components';

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
      <ErrorPageTemplate />
    </main>
  );
};

export { ErrorPage };
