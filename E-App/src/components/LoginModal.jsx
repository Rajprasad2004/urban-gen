import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import AuthForm from './AuthForm';

const LoginModal = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl mx-4 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute -right-2 -top-12 md:-right-12 md:top-0 text-white hover:text-gray-300"
        >
          <X size={32} />
        </button>

        <AuthForm onClose={onClose} isModal={true} />
      </div>
    </div>
  );
};

export default LoginModal;
