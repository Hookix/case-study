'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Briefcase, TrendingUp, Calculator } from 'lucide-react';
import styles from '../../styles/components/Services.module.css';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code,
      title: 'Webové aplikace',
      description:
        'Od nápadu po nasazení. Stavíme škálovatelná řešení s ohledem na výkon a uživatelskou zkušenost.',
    },
    {
      icon: Briefcase,
      title: 'Projektový management',
      description:
        'Pomáháme řídit projekty efektivně a transparentně. Zajišťujeme, aby vše běželo podle plánu.',
    },
    {
      icon: TrendingUp,
      title: 'Consulting',
      description:
        'Strategická a technologická rozhodnutí s reálným dopadem na váš byznys a dlouhodobý růst.',
    },
    {
      icon: Calculator,
      title: 'Finanční valuace',
      description:
        'Oceňujeme sportovní projekty a digitální produkty s precizností a tržním nadhledem.',
    },
  ];

  return (
    <section className="section" id="services" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Naše služby</h2>
          <p className={styles.subtitle}>
            Komplexní digitální řešení pro sportovní odvětví
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`card ${styles.serviceCard}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <service.icon size={32} className={styles.icon} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
