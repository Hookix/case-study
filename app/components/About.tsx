'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../../styles/components/About.module.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section section-alt" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h2 className={styles.title}>Kdo jsme</h2>
          <div className={styles.text}>
            <p>
              Jsme technologická společnost, která propojuje sport s digitálním světem. Vytváříme
              moderní webové aplikace, poskytujeme strategický consulting a pomáháme sportovním
              organizacím i investičním partnerům růst díky datům a inovacím.
            </p>
            <p>
              Naše expertíza pokrývá celý životní cyklus digitálních produktů – od koncepce přes
              vývoj až po strategické řízení projektů. Kombinujeme technologické know-how s
              hlubokým porozuměním sportovnímu byznysu.
            </p>
          </div>

          <div className={styles.stats}>
            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Projektů</div>
            </motion.div>

            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Let zkušeností</div>
            </motion.div>

            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Dedikace</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
