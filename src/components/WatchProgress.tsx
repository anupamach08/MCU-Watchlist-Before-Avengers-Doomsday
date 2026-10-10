/**
 * src/components/WatchProgress.tsx
 *
 * Local progress tracker banner:
 * - Shows dynamic ratio: "X of Y watched (Z%)"
 * - Responsive progress bar
 * - Reset watched progress button with an accessible confirmation modal
 */

import React, { useState } from 'react';
import { RotateCcw, CheckCircle2, AlertTriangle, X } from 'lucide-react';

interface WatchProgressProps {
  watchedCount: number;
  totalCount: number;
  onReset: () => void;
}

export const WatchProgress: React.FC<WatchProgressProps> = ({
  watchedCount,
  totalCount,
  onReset,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const percentage = totalCount > 0 ? Math.round((watchedCount / totalCount) * 100) : 0;

  const handleConfirmReset = () => {
    onReset();
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="bg-surface rounded-xl p-4 sm:p-5 border border-border shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-accent-text shrink-0" />
            <div>
              <span className="text-sm font-semibold text-text">
                Your Viewing Progress
              </span>
              <span className="text-xs text-text-muted ml-2 font-mono">
                {watchedCount} of {totalCount} watched ({percentage}%)
              </span>
            </div>
          </div>

          {watchedCount > 0 && (
            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-text-muted hover:text-white bg-surface-2 hover:bg-surface-2/80 border border-border transition-colors self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Progress</span>
            </button>
          )}
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-surface-2 rounded-full h-2.5 overflow-hidden border border-border/50">
          <div
            className="h-full bg-gradient-to-r from-accent to-accent-text transition-all duration-300 rounded-full"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Watched titles progress"
          />
        </div>
      </div>

      {/* Confirmation Modal for Reset */}
      {showConfirmModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-surface border border-border rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setShowConfirmModal(false)}
              className="absolute top-4 right-4 p-1.5 text-text-muted hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-accent-text mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-accent" />
              </div>
              <h3 id="reset-modal-title" className="font-heading text-lg font-bold text-text uppercase">
                Reset Watchlist Progress?
              </h3>
            </div>

            <p className="text-sm text-text-muted mb-6 font-body leading-relaxed">
              Are you sure you want to clear your watched status? All checked titles will be marked as unwatched. This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-text bg-surface-2 hover:bg-surface-2/80 border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
