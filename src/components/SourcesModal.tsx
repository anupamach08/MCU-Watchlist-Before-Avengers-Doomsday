/**
 * src/components/SourcesModal.tsx
 *
 * Modal detailing:
 * - Editorial rationale & viewing methodologies
 * - Copyright-free algorithmic poster design architecture
 * - Documented data conflicts resolved in favor of Section 7
 * - Author attributions and rights notices
 */

import React from 'react';
import { X, ShieldAlert, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { conflictResolutions, methodologyContent } from '../data/sourcesData';
import { siteConfig } from '../data/siteConfig';

interface SourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourcesModal: React.FC<SourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sources-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-surface border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-text-muted hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close methodology modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 id="sources-modal-title" className="font-heading text-2xl font-bold uppercase text-text">
              Sources & Methodology
            </h2>
            <p className="text-xs text-text-muted font-mono">
              Editorial framework & copyright compliance
            </p>
          </div>
        </div>

        {/* Section 1: Editorial Philosophy */}
        <section className="mb-6 space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-text flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>1. Editorial Curation & Label System</span>
          </h3>
          <p className="text-sm text-text-muted leading-relaxed font-body">
            {methodologyContent.editorialPhilosophy}
          </p>
        </section>

        {/* Section 2: Data Conflicts Resolved */}
        <section className="mb-6 space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-text flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>2. Documented Conflict Resolutions</span>
          </h3>
          <div className="space-y-2.5">
            {conflictResolutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-2/60 border border-border/80 rounded-lg p-3 text-xs space-y-1"
              >
                <div className="font-semibold text-text">{item.item}</div>
                <div className="text-text-muted">
                  <span className="text-amber-text font-medium">Source Variant:</span> {item.sourceVariant}
                </div>
                <div className="text-green-text font-medium">
                  <span>Resolved To:</span> {item.resolvedTo}
                </div>
                <div className="text-text-muted/80 italic">{item.rationale}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Copyright-Free Poster Architecture */}
        <section className="mb-6 space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-text flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>3. Copyright-Free Poster Architecture</span>
          </h3>
          <p className="text-sm text-text-muted leading-relaxed font-body">
            {methodologyContent.posterNotice}
          </p>
          <p className="text-sm text-text-muted leading-relaxed font-body">
            {methodologyContent.pluggablePosters}
          </p>
        </section>

        {/* Section 4: Full Legal Disclaimer */}
        <section className="p-4 rounded-xl bg-surface-2 border border-border text-xs text-text-muted space-y-2">
          <div className="flex items-center gap-2 font-semibold text-text">
            <ShieldAlert className="w-4 h-4 text-accent-text" />
            <span>Disclaimer & Ownership Notice</span>
          </div>
          <p className="leading-relaxed">{siteConfig.fullDisclaimer}</p>
          <p className="font-medium text-text-muted pt-1 border-t border-border/60">
            © {new Date().getFullYear()} {siteConfig.author}. All rights reserved. Copyright covers original code, design, and editorial text only.
          </p>
        </section>

        {/* Bottom Done button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
