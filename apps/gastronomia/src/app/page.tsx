'use client';

import { motion } from 'framer-motion';
import { Layout, Hero, ContactForm } from '@potenciapp/landing-core/components';
import { content } from '@/content';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <Layout
      header={{
        brandName: content.brandName,
        logo: content.logo,
        navItems: [
          { label: 'Menú', href: '#menu' },
          { label: 'Servicios', href: '#servicios' },
          { label: 'Contacto', href: '#contacto' },
        ],
      }}
      footer={{
        brandName: content.brandName,
        contact: content.contact,
        social: content.social,
      }}
    >
      <Hero {...content.hero} />

      <section id="menu" className="py-20 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]"
            {...fadeInUp}
          >
            Nuestro Menú
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {content.menu.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)]"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-sm text-[var(--accent-primary)] font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 text-[var(--text-primary)]">
                  {item.name}
                </h3>
                <p className="text-[var(--text-secondary)] mt-2">
                  {item.description}
                </p>
                <p className="text-lg font-bold mt-4 text-[var(--accent-primary)]">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]"
            {...fadeInUp}
          >
            Servicios
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {content.services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-8"
                variants={fadeInUp}
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-semibold mt-4 text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] mt-2">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-[var(--text-primary)]"
            {...fadeInUp}
          >
            Contactanos
          </motion.h2>
          
          <motion.div {...fadeInUp}>
            <ContactForm 
              vertical="gastronomia"
              brandName={content.brandName}
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
