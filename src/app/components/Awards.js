'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';
import Image from 'next/image';

export default function Awards() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="layout-container py-24 md:py-32" id="awards">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-12 md:mb-16">
          Awards & Recognition
        </h2>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="group flex flex-col md:flex-row gap-8 items-center p-8 md:p-12 rounded-3xl bg-[var(--bg-secondary)] transition-colors duration-300">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">Spot Award</h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Recognizing outstanding performance, dedication, and significant contributions to critical project deliverables.
            </p>
          </div>
          <div
            className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden border border-[var(--border-color)] aspect-video md:aspect-square lg:aspect-[4/3] relative shadow-md cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/Spot Award.jpeg"
              alt="Spot Award Certificate"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl leading-none hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/Spot Award.jpeg"
                alt="Spot Award Certificate"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
