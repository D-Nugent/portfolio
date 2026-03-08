import React, { useEffect } from 'react';
import './UpdateNoticeModal.scss';

const UpdateNoticeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="update-notice-modal" onClick={onClose}>
      <div className="update-notice-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="update-notice-modal__message">
          <p className="update-notice-modal__greeting">Hi there,</p>
          <p className="update-notice-modal__body">
            Looks like you're visiting while I'm in the process of updating my portfolio website. 
            While you can expect great things soon, in the meantime feel free to check out my{' '}
            <a 
              href="https://www.linkedin.com/in/d-nugent/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="update-notice-modal__link"
            >
              LinkedIn page here
            </a>
            {' '}which is up to date with recent experience.
          </p>
          <p className="update-notice-modal__signature">Talk soon,</p>
          <p className="update-notice-modal__name">David</p>
        </div>
        <button 
          className="update-notice-modal__button" 
          onClick={onClose}
          aria-label="Close update notice"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UpdateNoticeModal;
