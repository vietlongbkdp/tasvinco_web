import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'components/NavBar';
import { PageWrapper } from 'components/PageWrapper';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';
import { Features } from './Features';

export const HomePage: React.FC = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <button type="button" onClick={() => dispatch(push('/login'))}>
          onClick
        </button>
        <Features />
      </PageWrapper>
    </>
  );
};
