import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <div className="layout-wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
