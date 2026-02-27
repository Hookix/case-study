'use client';

import { Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import styles from '../../styles/components/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <Image src="/logo.svg" alt="KMWS" width={120} height={40} className={styles.logo} />
            <p className={styles.description}>
              Digitální řešení pro sportovní odvětví. Webové aplikace, consulting a projektový
              management.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Rychlé odkazy</h4>
            <ul className={styles.links}>
              <li>
                <a href="#about" className={styles.link}>
                  O nás
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Služby
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Právní informace</h4>
            <ul className={styles.links}>
              <li>
                <a href="/gdpr" className={styles.link}>
                  GDPR
                </a>
              </li>
              <li>
                <a href="/obchodni-podminky" className={styles.link}>
                  Obchodní podmínky
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kontakt</h4>
            <ul className={styles.contactInfo}>
              <li>
                <Mail size={18} />
                <a href="mailto:info@kmws.cz" className={styles.contactLink}>
                  info@kmws.cz
                </a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Praha, Česká republika</span>
              </li>
              <li>
                <Linkedin size={18} />
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.company}>
            <p>
              <strong>KMWS s. r. o.</strong>
            </p>
            <p>IČ: 12345678 | DIČ: CZ12345678</p>
            <p className={styles.ceo}>Jednatel: Ing. Daniel Milka</p>
          </div>
          <p className={styles.copyright}>© {currentYear} KMWS s. r. o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
