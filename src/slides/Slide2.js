import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Petals from '../components/Petals';
import Sparkles from '../components/Sparkles';

const Slide2 = ({ onNext }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  const photos = [
    { name: 'Blue saree', image: '/photos/slide2/photo1.jpg' },
    { name: 'Pink saree selfie', image: '/photos/slide2/photo2.jpg' },
    { name: 'Black shirt with glasses', image: '/photos/slide2/photo3.jpg' },
    { name: 'Maroon saree', image: '/photos/slide2/photo4.jpg' },
    { name: 'Blue floral shirt', image: '/photos/slide2/photo5.jpg' },
    { name: 'Light blue dress', image: '/photos/slide2/photo6.jpg' },
    { name: 'Grey saree', image: '/photos/slide2/photo7.jpg' },
    { name: 'Black & white patterned top', image: '/photos/slide2/photo8.jpg' },
  ];

  const texts = [
    'Before we celebrate today...',
    "There's someone I'd love to introduce...",
    'Someone whose smile can brighten even ordinary days.',
    'Someone who doesn\'t even try to be beautiful...',
    'Yet somehow always is.',
    'Some people don\'t just walk into your life...',
    'They quietly become a part of it.',
    'Out of everyone I could\'ve met...',
    'I\'m grateful life introduced me to you.',
  ];

  React.useEffect(() => {
    if (currentPhotoIndex === 0) {
      const timer = setTimeout(() => {
        setCurrentPhotoIndex(1);
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (currentPhotoIndex < photos.length) {
      const timer = setTimeout(() => {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowContinue(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPhotoIndex, photos.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      <Petals count={15} />
      <Sparkles count={20} />

      {/* Photo Display Area */}
      <motion.div
        key={currentPhotoIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '400px',
          maxHeight: '400px',
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 10,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          border: '3px solid rgba(255, 215, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        {currentPhotoIndex > 0 && currentPhotoIndex <= photos.length ? (
          <img
            src={photos[currentPhotoIndex - 1].image}
            alt={photos[currentPhotoIndex - 1].name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '17px',
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              console.warn(`Image not found: ${photos[currentPhotoIndex - 1].image}`);
            }}
          />
        ) : (
          <div style={{ fontSize: '120px', textAlign: 'center' }}>📷</div>
        )}
      </motion.div>

      {/* Glow effect behind photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent)',
          borderRadius: '50%',
          top: '35%',
          zIndex: 9,
        }}
      />

      {/* Text */}
      <motion.p
        key={`text-${currentPhotoIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(16px, 4vw, 32px)',
          fontWeight: 500,
          color: '#7b1fa2',
          textAlign: 'center',
          maxWidth: '85%',
          position: 'relative',
          zIndex: 10,
          marginBottom: '40px',
          lineHeight: '1.6',
        }}
      >
        {currentPhotoIndex === 0
          ? texts[0]
          : currentPhotoIndex <= photos.length
          ? texts[currentPhotoIndex]
          : 'I think she\'s really special...'}
      </motion.p>

      {/* Panda reactions */}
      {currentPhotoIndex > 0 && currentPhotoIndex <= photos.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: '50px',
            position: 'absolute',
            right: '5%',
            top: '50%',
            zIndex: 10,
          }}
        >
          {['😍', '🥰', '😊', '🤩', '💕', '😌', '👑', '🌟'][currentPhotoIndex - 1]}
        </motion.div>
      )}

      {/* Final message */}
      {currentPhotoIndex > photos.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '60px', marginBottom: '20px' }}
          >
            🐼
          </motion.div>
          <p
            style={{
              fontSize: 'clamp(14px, 3vw, 24px)',
              color: '#d81b60',
              fontWeight: 600,
              fontStyle: 'italic',
            }}
          >
            "I think she's really special..." 🐼
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
            zIndex: 10,
          }}
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
};

export default Slide2;
