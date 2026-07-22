import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Petals from '../components/Petals';
import Sparkles from '../components/Sparkles';

const Slide7 = ({ onNext }) => {
  const [giftOpened, setGiftOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const handleOpenGift = () => {
    setGiftOpened(true);
    setTimeout(() => setShowContent(true), 800);
    setTimeout(() => setShowMessage(true), 2000);
    setTimeout(() => setShowContinue(true), 4500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #fce4ec 0%, #e1bee7 100%)',
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
      <Sparkles count={20} />

      {/* Gathering Pandas */}
      {!giftOpened && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                type: 'spring',
              }}
              style={{
                position: 'absolute',
                fontSize: '50px',
                top: `${40 + (i % 2) * 30}%`,
                left: `${20 + i * 15}%`,
                zIndex: 10,
              }}
            >
              🐼
            </motion.div>
          ))}
        </>
      )}

      {/* Gift Box */}
      <motion.div
        animate={giftOpened ? { y: -20, scale: 0.9 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '140px',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 11,
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))',
        }}
      >
        🎁
      </motion.div>

      {/* Pandas Whispering */}
      {!giftOpened && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              fontSize: '18px',
              color: '#d81b60',
              fontWeight: 600,
              zIndex: 10,
              fontStyle: 'italic',
            }}
          >
            Should we show her?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            style={{
              position: 'absolute',
              top: '20%',
              right: '15%',
              fontSize: '18px',
              color: '#7b1fa2',
              fontWeight: 600,
              zIndex: 10,
              fontStyle: 'italic',
            }}
          >
            I think she's ready...
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '16px',
              color: '#ff69b4',
              fontWeight: 700,
              zIndex: 10,
              fontStyle: 'italic',
            }}
          >
            OPEN IT!! OPEN IT!! 🎁
          </motion.div>
        </>
      )}

      {/* Open Button */}
      {!giftOpened && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenGift}
          style={{
            marginTop: '60px',
            padding: '15px 40px',
            fontSize: '20px',
            border: 'none',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
            color: '#333',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.5)',
            fontWeight: 700,
            fontFamily: 'Poppins',
            position: 'relative',
            zIndex: 20,
          }}
        >
          🎁 Open the Gift
        </motion.button>
      )}

      {/* Golden Light Burst */}
      {giftOpened && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [1, 0.5], scale: [1, 1.5] }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6), transparent)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 8,
          }}
        />
      )}

      {/* Sparkles burst */}
      {giftOpened && (
        <>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
              }}
              transition={{
                duration: 1.2,
                ease: 'easeOut',
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                fontSize: '25px',
                zIndex: 9,
              }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}

      {/* Gift Contents */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 12,
            textAlign: 'center',
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Selfie */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))',
            }}
          >
            <img
              src="/photos/slide7/selfie.jpg"
              alt="Selfie together"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '13px',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                console.warn('Selfie photo not found at /photos/slide7/selfie.jpg');
              }}
            />
          </motion.div>

          {/* Arrow */}
          <div style={{ fontSize: '50px', color: '#d81b60' }}>→</div>

          {/* Walking Feet */}
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))',
            }}
          >
            <img
              src="/photos/slide7/walking.jpg"
              alt="Walking feet"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '13px',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                console.warn('Walking photo not found at /photos/slide7/walking.jpg');
              }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Paw Prints */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '50%',
            fontSize: '40px',
            zIndex: 11,
          }}
        >
          🐾🐾
        </motion.div>
      )}

      {/* Gift Message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            zIndex: 13,
            textAlign: 'center',
            maxWidth: '85%',
            marginTop: '60px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 3vw, 28px)',
              color: '#d81b60',
              fontWeight: 600,
              marginBottom: '20px',
              lineHeight: '1.8',
            }}
          >
            No matter where life takes us...
            <br />
            I hope we always find our way back to the friendship
            <br />
            that made so many moments special.
          </p>
          <p
            style={{
              fontSize: 'clamp(14px, 2.5vw, 24px)',
              color: '#7b1fa2',
              fontWeight: 500,
              lineHeight: '1.8',
            }}
          >
            No matter what happens to you...
            <br />
            No matter what you do...
            <br />
            I'll always be here for you.
          </p>
        </motion.div>
      )}

      {/* Final Text */}
      {showMessage && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: 'relative',
            zIndex: 13,
            fontSize: 'clamp(14px, 2.5vw, 22px)',
            color: '#ffd700',
            fontWeight: 600,
            fontStyle: 'italic',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Some gifts aren't wrapped with ribbons...
          <br />
          They're wrapped with memories.
        </motion.p>
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
            zIndex: 13,
          }}
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
};

export default Slide7;
