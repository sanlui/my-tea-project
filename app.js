import { Analytics } from '@vercel/analytics';
import '../styles/globals.css'; // Assicurati di avere un file CSS globale

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* Inizializza il pacchetto di analytics */}
    </>
  );
}

export default MyApp;
