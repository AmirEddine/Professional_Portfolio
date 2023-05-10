import '../styles/globals.css';
import { useState, useEffect, } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import { LocaleProvider } from '../components/LocalProvider';

function MyApp({ Component, pageProps }) {





  return (
    <>
      <ThemeProvider>
      <LocaleProvider>
          <Layout>
           <Component  {...pageProps} />
          </Layout>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
