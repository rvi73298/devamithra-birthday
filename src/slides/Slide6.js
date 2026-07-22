import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Slide6 = ({ onNext }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showFlower, setShowFlower] = useState(false);
  const [showStar, setShowStar] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  React.useEffect(() => {
    const timings = [2000, 4000, 6000, 8000, 10000];
    timings.forEach((delay, idx) => {
      const timer = setTimeout(() => {
        if (idx === 0) setShowMessage(true);
        if (idx === 1) setShowFlower(true);
        if (idx === 2) setShowStar(true);
        if (idx === 4) setShowContinue(true);
      }, delay);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      {/* Stars Background */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: i * 0.1 }}
          style={{
            position: 'fixed',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: '12px',
            zIndex: 1,
          }}
        >
          ⭐
        </motion.div>
      ))}

      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          fontSize: '100px',
          zIndex: 5,
        }}
      >
        🌙
      </motion.div>

      {/* Lantern Panda Walking */}
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          fontSize: '70px',
          zIndex: 10,
        }}
      >
        🐼
      </motion.div>

      {/* Lantern */}
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '35%',
          left: '10%',
          fontSize: '50px',
          zIndex: 9,
        }}
      >
        🏮
      </motion.div>

      {/* Father's Photo Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'spring' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150px',
          height: '150px',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
          border: '3px solid rgba(255, 215, 0, 0.3)',
          zIndex: 8,
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/photos/slide6/father.jpg"
          alt="Father"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            console.warn('Father photo not found at /photos/slide6/father.jpg');
          }}
        />
      </motion.div>

      {/* Sitting Panda */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '40%',
          fontSize: '80px',
          zIndex: 10,
        }}
      >
        🐼
      </motion.div>

      {/* Message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            zIndex: 11,
            textAlign: 'center',
            maxWidth: '85%',
            marginBottom: '40px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 3vw, 28px)',
              color: '#ffffff',
              fontWeight: 600,
              lineHeight: '1.8',
              marginBottom: '20px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Some bonds never fade.
            <br />
            Some love never leaves.
          </p>
          <p
            style={{
              fontSize: 'clamp(14px, 2.5vw, 24px)',
              color: '#e1bee7',
              fontWeight: 500,
              lineHeight: '1.8',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Even though your dad isn't here today...
            <br />
            His love will always stay with you.
          </p>
        </motion.div>
      )}

      {/* Extended Message */}
      {showFlower && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            zIndex: 11,
            textAlign: 'center',
            maxWidth: '85%',
            marginBottom: '30px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(14px, 2.5vw, 22px)',
              color: '#f3e5f5',
              fontWeight: 500,
              lineHeight: '1.8',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            I hope birthdays remind you not only of what you've lost...
            <br />
            But also of all the love that continues to surround you.
            <br />
            <br />
            Whenever life feels heavy...
            <br />
            Remember you don't have to face it alone.
            <br />
            I'll always be here as a friend...
            <br />
            Supporting you. Cheering for you.
            <br />
            Hoping to see you smile.
          </p>
        </motion.div>
      )}

      {/* White Flower Below Frame */}
      {showFlower && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{
            position: 'absolute',
            top: '58%',
            left: '48%',
            fontSize: '40px',
            zIndex: 9,
          }}
        >
          🌼
        </motion.div>
      )}

      {/* Shining Star */}
      {showStar && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.6, 1],
            scale: [0, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            fontSize: '60px',
            zIndex: 6,
          }}
        >
          ⭐
        </motion.div>
      )}

      {/* Final Text */}
      {showStar && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            position: 'relative',
            zIndex: 11,
            textAlign: 'center',
            maxWidth: '85%',
            marginTop: '30px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 3vw, 28px)',
              color: '#ffd700',
              fontWeight: 600,
              fontStyle: 'italic',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              lineHeight: '1.8',
            }}
          >
            Some people may be out of sight...
            <br />
            But never out of love.
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
            background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
            color: '#333',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.5)',
            fontWeight: 600,
            fontFamily: 'Poppins',
            position: 'relative',
            zIndex: 20,
          }}
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
};

export default Slide6;
