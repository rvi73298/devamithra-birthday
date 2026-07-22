import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Petals from '../components/Petals';
import Sparkles from '../components/Sparkles';

const Slide5 = ({ onNext }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showHeartFormation, setShowHeartFormation] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const photos = [
    { name: 'Maroon saree', emoji: '💃', text: 'Strength looks beautiful on you...' },
    { name: 'Purple saree', emoji: '👑', text: 'You don\'t need to try to shine...' },
    { name: 'Traditional selfie', emoji: '🌟', text: 'Never forget how amazing you are...' },
  ];

  React.useEffect(() => {
    if (photoIndex === 0) {
      const timer = setTimeout(() => setPhotoIndex(1), 1500);
      return () => clearTimeout(timer);
    }
    if (photoIndex < photos.length) {
      const timer = setTimeout(() => setPhotoIndex(photoIndex + 1), 2500);
      return () => clearTimeout(timer);
    }
  }, [photoIndex, photos.length]);

  React.useEffect(() => {
    if (photoIndex > photos.length) {
      const timer = setTimeout(() => {
        setShowHeartFormation(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [photoIndex, photos.length]);

  React.useEffect(() => {
    if (showHeartFormation) {
      const timer = setTimeout(() => {
        setShowFinalMessage(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showHeartFormation]);

  React.useEffect(() => {
    if (showFinalMessage) {
      const timer = setTimeout(() => {
        setShowContinue(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showFinalMessage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #e1bee7 0%, #f3e5f5 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      <Petals count={20} />
      <Sparkles count={25} />

      {/* Individual Photos */}
      {!showHeartFormation && photoIndex <= photos.length && (
        <motion.div
          key={`photo-${photoIndex}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: '130px',
              marginBottom: '40px',
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))',
            }}
          >
            {photoIndex > 0 && photoIndex <= photos.length
              ? photos[photoIndex - 1].emoji
              : '✨'}
          </div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(20px, 4vw, 32px)',
              color: '#d81b60',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '20px',
              maxWidth: '90%',
            }}
          >
            {photoIndex > 0 && photoIndex <= photos.length
              ? photos[photoIndex - 1].text
              : ''}
          </motion.p>

          {/* Symbol below text */}
          {photoIndex > 0 && photoIndex <= photos.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: '40px',
                textAlign: 'center',
              }}
            >
              {photoIndex === 1 && '❤️'}
              {photoIndex === 2 && '⭐'}
              {photoIndex === 3 && '💫'}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Heart Formation */}
      {showHeartFormation && (
        <>
          {/* Three photos forming a heart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              position: 'relative',
              zIndex: 10,
              marginBottom: '40px',
              perspective: '1000px',
            }}
          >
            {photos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: idx === 0 ? -100 : idx === 2 ? 100 : 0,
                  y: idx === 1 ? -50 : 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.2,
                  type: 'spring',
                }}
                style={{
                  fontSize: '90px',
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))',
                }}
              >
                {photo.emoji}
              </motion.div>
            ))}
          </motion.div>

          {/* Heart connecting them */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              fontSize: '80px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 5,
            }}
          >
            ❤️
          </motion.div>
        </>
      )}

      {/* Final Message */}
      {showFinalMessage && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            zIndex: 11,
            textAlign: 'center',
            marginTop: '40px',
            maxWidth: '90%',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 3vw, 28px)',
              color: '#7b1fa2',
              fontWeight: 500,
              lineHeight: '1.8',
              marginBottom: '20px',
            }}
          >
            Every picture tells a story...
          </p>
          <p
            style={{
              fontSize: 'clamp(14px, 2.5vw, 24px)',
              color: '#d81b60',
              fontWeight: 600,
              fontStyle: 'italic',
            }}
          >
            But none of them can fully capture the wonderful person you are.
          </p>
        </motion.div>
      )}

      {/* Continue Button */}
      {showContinue && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          style={{
            marginTop: '40px',
            padding: '12px 32px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, #d81b60, #f06292)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(216, 27, 96, 0.4)',
            fontWeight: 600,
            fontFamily: 'Poppins',
            position: 'relative',
            zIndex: 11,
          }}
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
};

export default Slide5;
