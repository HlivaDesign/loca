'use client';

import React, { useState } from 'react';
import styles from './ProductPage.module.css';

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  benefits: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  availability: string;
  isFeatured: boolean;
}

export default function ProductPage({ product }: { product: Product }) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(price);
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call for free order submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      {/* Header / Logo */}
      <header className={`${styles.header} fade-in`}>
        <div className={styles.logo}>LOCA</div>
      </header>

      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <div className={styles.imageWrapper}>
          <img src={product.images[0]} alt={product.name} className={styles.image} />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>{formatPrice(product.price)}</div>
          <p className={styles.description}>{product.description}</p>
          
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span> Ingyenes szállítás
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span> {product.availability}
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span> 14 napos garancia
            </div>
          </div>

          <button onClick={scrollToCheckout} className={styles.ctaButton}>
            {product.ctaText}
          </button>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className={`${styles.section} fade-in`}>
        <h2 className={styles.sectionTitle}>Miért válaszd ezt?</h2>
        <div className={styles.grid}>
          {product.benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTitle}>Előny #{index + 1}</div>
              <div>{benefit}</div>
            </div>
          ))}
          {product.features.map((feature, index) => (
            <div key={`feat-${index}`} className={styles.card}>
              <div className={styles.cardTitle}>Funkció</div>
              <div>{feature}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} fade-in`}>
        <h2 className={styles.sectionTitle}>Gyakori Kérdések</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {product.faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion}>{faq.question}</div>
              <div className={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Checkout Form */}
      <section id="checkout" className={`${styles.section} fade-in`}>
        <h2 className={styles.sectionTitle}>Rendelés leadása</h2>
        <div className={styles.checkoutForm}>
          {formStatus === 'success' ? (
            <div style={{ textAlign: 'center', color: 'var(--success-color)' }}>
              <h3>Sikeres megrendelés!</h3>
              <p>Hamarosan felvesszük veled a kapcsolatot a megadott elérhetőségeken.</p>
            </div>
          ) : (
            <form onSubmit={handleOrder}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Teljes név</label>
                <input required type="text" id="name" className={styles.input} placeholder="Kovács János" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">E-mail cím</label>
                <input required type="email" id="email" className={styles.input} placeholder="kovacs.janos@pelda.hu" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Telefonszám</label>
                <input required type="tel" id="phone" className={styles.input} placeholder="+36 30 123 4567" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="address">Szállítási cím</label>
                <input required type="text" id="address" className={styles.input} placeholder="1234 Budapest, Példa u. 1." />
              </div>
              <button disabled={formStatus === 'submitting'} type="submit" className={styles.ctaButton} style={{ width: '100%', marginTop: '1rem' }}>
                {formStatus === 'submitting' ? 'Feldolgozás...' : product.ctaText}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Loca.hu. Minden jog fenntartva.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          <a href="#" style={{ textDecoration: 'underline' }}>ÁSZF</a> | <a href="#" style={{ textDecoration: 'underline' }}>Adatkezelési Tájékoztató</a> | Kapcsolat: info@loca.hu
        </p>
      </footer>
    </div>
  );
}
