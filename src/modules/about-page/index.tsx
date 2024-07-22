import { Helmet } from 'react-helmet-async';
import { AAA, Vinh } from './styled';

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aboutaaaaaaa</title>
        <meta name="description" content="About" />
      </Helmet>

      <AAA>
        <Vinh>hello Vinh</Vinh>
      </AAA>
    </>
  );
};
