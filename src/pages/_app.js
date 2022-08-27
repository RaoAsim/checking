import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import NProgress from 'nprogress';
import Head from 'next/head'

export default function CustomApp({ Component, pageProps }) {
  NProgress.configure({showSpinner : false})
  Router.events.on('routeChangeStart',()=>{
    NProgress.start();
  })
  Router.events.on('routeChangeComplete',()=>{
    NProgress.done();
  })
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>
    <Head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    </Head>
  <Component {...pageProps} />;
  </>
  )
}
