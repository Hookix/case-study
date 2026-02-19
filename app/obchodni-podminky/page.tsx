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

        <h1 className={styles.title}>Obchodní podmínky</h1>

        <section className={styles.section}>
          <h2>1. Základní ustanovení</h2>
          <p>
            Tyto všeobecné obchodní podmínky (dále jen „VOP") upravují práva a povinnosti
            smluvních stran při poskytování služeb společností <strong>KMWS s. r. o.</strong> (dále
            jen „poskytovatel").
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Identifikační údaje poskytovatele</h2>
          <p>
            <strong>Obchodní firma:</strong> KMWS s. r. o.<br />
            <strong>Sídlo:</strong> [Adresa]<br />
            <strong>IČ:</strong> [IČO]<br />
            <strong>DIČ:</strong> [DIČ]<br />
            <strong>Zápis v obchodním rejstříku:</strong> [Městský soud v Praze], oddíl [C], vložka
            [číslo]<br />
            <strong>Kontakt:</strong> info@kmws.cz
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Předmět podnikání</h2>
          <p>Poskytovatel nabízí následující služby:</p>
          <ul>
            <li>Vývoj webových aplikací</li>
            <li>Projektový management</li>
            <li>Consulting v oblasti digitálních řešení</li>
            <li>Finanční valuace digitálních projektů</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Uzavření smlouvy</h2>
          <p>
            Smlouva o poskytnutí služeb vzniká na základě písemné objednávky klienta a jejího
            přijetí poskytovatelem. Konkrétní podmínky spolupráce jsou dohodnuty individuálně pro
            každý projekt.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Cena a platební podmínky</h2>
          <p>
            Cena služeb je stanovena na základě individuální nabídky. Fakturační podmínky a způsob
            platby jsou dohodnuty ve smlouvě s klientem.
          </p>
          <p>
            Poskytovatel si vyhrazuje právo na úpravu cen v případě změny rozsahu projektu nebo
            změny požadavků ze strany klienta.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Práva a povinnosti smluvních stran</h2>
          <p>
            Poskytovatel se zavazuje poskytovat služby s odbornou péčí v souladu se sjednanými
            podmínkami.
          </p>
          <p>
            Klient se zavazuje poskytnout poskytovateli veškeré potřebné informace a materiály
            nezbytné pro řádné provedení služby.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Ochrana duševního vlastnictví</h2>
          <p>
            Autorská práva k výsledkům práce jsou upravena individuálně v rámci smlouvy s klientem.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Reklamace</h2>
          <p>
            Klient má právo reklamovat vady poskytnutých služeb. Reklamace musí být uplatněna bez
            zbytečného odkladu, nejpozději však do 30 dnů od zjištění vady.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Závěrečná ustanovení</h2>
          <p>
            Tyto VOP jsou platné a účinné od {new Date().toLocaleDateString('cs-CZ')}. Poskytovatel
            si vyhrazuje právo tyto VOP změnit.
          </p>
          <p>Vztahy neupravené těmito VOP se řídí právním řádem České republiky.</p>
        </section>

        <section className={styles.section}>
          <p className={styles.updateDate}>
            Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
          </p>
        </section>
      </div>
    </main>
  );
}
