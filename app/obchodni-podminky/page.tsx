import Link from 'next/link';
import styles from '../gdpr/legal.module.css';

export const metadata = {
  title: 'Obchodní podmínky | KMWS s. r. o.',
  description: 'Všeobecné obchodní podmínky společnosti KMWS s. r. o.',
};

export default function TermsPage() {
  return (
    <main className={styles.legalPage}>
      <div className="container">
        <Link href="/" className={styles.backLink}>
          ← Zpět na hlavní stránku
        </Link>
      </div>
    </main>
  );
}
