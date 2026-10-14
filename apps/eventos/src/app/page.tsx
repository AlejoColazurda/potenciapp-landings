'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Hero, ContactForm } from '@potenciapp/landing-core/components';
import { content } from '@/content';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const eventTypesRef = useRef<HTMLDivElement>(null);
  const venuesRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.event-type-card', {
        scrollTrigger: {
          trigger: eventTypesRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.venue-card', {
        scrollTrigger: {
          trigger: venuesRef.current,
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });

      gsap.from('.package-card', {
        scrollTrigger: {
          trigger: packagesRef.current,
          start: 'top 80%',
        },
        x: (index) => (index % 2 === 0 ? -50 : 50),
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout
      header={{
        brandName: content.brandName,
        logo: content.logo,
        navItems: [
          { label: 'Eventos', href: '#eventos' },
          { label: 'Salones', href: '#salones' },
          { label: 'Paquetes', href: '#paquetes' },
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

      <section id="eventos" className="py-20 px-6 bg-[var(--bg-primary)]" ref={eventTypesRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
            Tipos de Eventos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.eventTypes.map((eventType, index) => (
              <div
                key={index}
                className="event-type-card p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-3 text-[var(--text-primary)]">
                  {eventType.name}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {eventType.description}
                </p>
                {eventType.features && (
                  <ul className="space-y-2">
                    {eventType.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-[var(--text-secondary)]">
                        <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.venues && content.venues.length > 0 && (
        <section id="salones" className="py-20 px-6 bg-[var(--bg-secondary)]" ref={venuesRef}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
              Nuestros Salones
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {content.venues.map((venue, index) => (
                <div
                  key={index}
                  className="venue-card p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-default)]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                      {venue.name}
                    </h3>
                    <span className="px-3 py-1 bg-[var(--accent-primary)] text-white text-sm rounded-full">
                      {venue.capacity}
                    </span>
                  </div>
                  {venue.description && (
                    <p className="text-[var(--text-secondary)] mb-4">{venue.description}</p>
                  )}
                  {venue.amenities && (
                    <div className="flex flex-wrap gap-2">
                      {venue.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm rounded-lg"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.packages && content.packages.length > 0 && (
        <section id="paquetes" className="py-20 px-6 bg-[var(--bg-primary)]" ref={packagesRef}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
              Paquetes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {content.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`package-card p-8 rounded-2xl border-2 ${
                    pkg.recommended
                      ? 'border-[var(--accent-primary)] bg-[var(--bg-secondary)]'
                      : 'border-[var(--border-default)] bg-[var(--bg-primary)]'
                  }`}
                >
                  {pkg.recommended && (
                    <span className="inline-block px-3 py-1 bg-[var(--accent-primary)] text-white text-xs font-semibold rounded-full mb-4">
                      Recomendado
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold mb-2 text-[var(--text-primary)]">
                    {pkg.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">{pkg.description}</p>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-[var(--text-secondary)]">
                        <svg
                          className="w-5 h-5 text-[var(--color-success)] mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contacto" className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">
            Consultanos
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Te asesoramos sin compromiso para tu próximo evento
          </p>
          
          <ContactForm 
            vertical="eventos"
            brandName={content.brandName}
          />
        </div>
      </section>
    </Layout>
  );
}
