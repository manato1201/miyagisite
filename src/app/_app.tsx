import '../globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add('theme-uraraka'); // または 'theme-harutori'
  }, []);

  return <Component {...pageProps} />;
}