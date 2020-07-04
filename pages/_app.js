import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import * as Sentry from '@sentry/react';

Sentry.init({dsn: "https://fb9841e2b1334bcbbb63dc51ea397f6e@o414201.ingest.sentry.io/5306179"});

export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}
