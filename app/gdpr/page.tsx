import Link from 'next/link';
import styles from './legal.module.css';

export const metadata = {
  title: 'GDPR - Ochrana osobních údajů | KMWS s. r. o.',
  description: 'Informace o zpracování osobních údajů a ochraně soukromí.',
};

export default function GDPRPage() {
  return (
    <main className={styles.legalPage}>
      <div className="container">
        <Link href="/" className={styles.backLink}>
          ← Zpět na hlavní stránku
        </Link>

        <h1 className={styles.title}>Ochrana osobních údajů (GDPR)</h1>

        <section className={styles.section}>
          <h2>1. Správce osobních údajů</h2>
          <p>
            Správcem vašich osobních údajů je společnost <strong>KMWS s. r. o.</strong>, se sídlem
            [adresa], IČ: [IČO], zapsaná v obchodním rejstříku vedeném [Městským soudem v Praze],
            oddíl [C], vložka [číslo].
          </p>
          <p>
            Kontakt na správce: <strong>info@kmws.cz</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Cookies</h2>
          <p>
            Tyto webové stránky <strong>nevyužívají cookies</strong> ani jiné sledovací technologie
            pro sběr osobních údajů.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Kontaktní formulář</h2>
          <p>
            Osobní údaje získané prostřednictvím kontaktního formuláře (jméno, e-mail, zpráva)
            jsou zpracovávány výhradně za účelem odpovědi na váš dotaz.
          </p>
          <p>
            <strong>Tyto údaje nejsou sdíleny s třetími stranami</strong> a jsou uchovávány pouze
            po dobu nezbytně nutnou k vyřízení vašeho požadavku.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Vaše práva</h2>
          <p>V souvislosti se zpracováním osobních údajů máte následující práva:</p>
          <ul>
            <li>Právo na přístup k osobním údajům</li>
            <li>Právo na opravu osobních údajů</li>
            <li>Právo na výmaz osobních údajů</li>
            <li>Právo na omezení zpracování</li>
            <li>Právo vznést námitku proti zpracování</li>
            <li>Právo na přenositelnost údajů</li>
          </ul>
          <p>
            Pro uplatnění svých práv nás kontaktujte na e-mailu: <strong>info@kmws.cz</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Právní základ zpracování</h2>
          <p>
            Zpracování osobních údajů je prováděno na základě vašeho souhlasu (čl. 6 odst. 1 písm.
            a) GDPR) nebo je nezbytné pro účely oprávněných zájmů správce (čl. 6 odst. 1 písm. f)
            GDPR).
          </p>
        </section>

        <section className={styles.section}>
          <p className={styles.updateDate}>Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}</p>
        </section>
      </div>
    </main>
  );
}
