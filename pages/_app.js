import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import * as Sentry from '@sentry/react';

Sentry.init({dsn});

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}
