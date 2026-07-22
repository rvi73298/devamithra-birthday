import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Slide8 = () => {
  const [showPeekPanda, setShowPeekPanda] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPeekPanda(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
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
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            position: 'fixed',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: '10px',
            zIndex: 1,
          }}
        >
          ⭐
        </motion.div>
      ))}

      {/* Moon */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '15%',
          fontSize: '120px',
          zIndex: 5,
        }}
      >
        🌙
      </motion.div>

      {/* Two Pandas Sitting on Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '35%',
          left: '20%',
          fontSize: '80px',
          zIndex: 10,
        }}
      >
        🐼
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          position: 'absolute',
          top: '38%',
          left: '35%',
          fontSize: '80px',
          zIndex: 10,
        }}
      >
        🐼
      </motion.div>

      {/* Waving Panda */}
      <motion.div
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '33%',
          left: '25%',
          fontSize: '20px',
          zIndex: 11,
          transformOrigin: '50% 0',
        }}
      >
        👋
      </motion.div>

      {/* Heart Hugging */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '32%',
          fontSize: '40px',
          zIndex: 11,
        }}
      >
        ❤️
      </motion.div>

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'relative',
          zIndex: 12,
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(28px, 6vw, 52px)',
            color: '#ffd700',
            fontWeight: 700,
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          }}
        >
          Happy Birthday Devamithra ❤️
        </h1>
        <p
          style={{
            fontSize: 'clamp(16px, 3vw, 28px)',
            color: '#e1bee7',
            fontWeight: 500,
            lineHeight: '1.8',
            maxWidth: '90%',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Thank you for being such a wonderful friend.
          <br />
          I hope this little adventure made you smile.
        </p>
      </motion.div>

      {/* Birthday Wishes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        style={{
          position: 'relative',
          zIndex: 12,
          textAlign: 'center',
          maxWidth: '90%',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(14px, 2.5vw, 24px)',
            color: '#f3e5f5',
            fontWeight: 500,
            lineHeight: '1.8',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          May this year bring you happiness,
          <br />
          good health, peace,
          <br />
          and countless beautiful memories.
        </p>
      </motion.div>

      {/* Gift vs Memory Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
        style={{
          position: 'relative',
          zIndex: 12,
          textAlign: 'center',
          maxWidth: '90%',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(14px, 2.5vw, 22px)',
            color: '#ffd700',
            fontWeight: 600,
            fontStyle: 'italic',
            lineHeight: '1.8',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Some birthdays are celebrated with gifts...
          <br />
          Some are celebrated with memories...
          <br />
          This one was celebrated with both.
        </p>
      </motion.div>

      {/* Peeking Panda */}
      {showPeekPanda && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            fontSize: '100px',
            zIndex: 13,
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
          }}
        >
          👀
        </motion.div>
      )}

      {/* Panda Whisper */}
      {showPeekPanda && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            position: 'fixed',
            bottom: '140px',
            left: '60px',
            zIndex: 13,
          }}
        >
          <p
            style={{
              fontSize: '24px',
              color: '#ffd700',
              fontWeight: 700,
              fontStyle: 'italic',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Psst...
          </p>
        </motion.div>
      )}

      {/* Panda Running Away */}
      {showPeekPanda && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: [0, 100] }}
          transition={{ duration: 1.5, delay: 2 }}
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '100px',
            fontSize: '80px',
            zIndex: 13,
          }}
        >
          🐼
        </motion.div>
      )}

      {/* Panda Final Message */}
      {showPeekPanda && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            position: 'fixed',
            bottom: '60px',
            left: '40px',
            zIndex: 13,
          }}
        >
          <p
            style={{
              fontSize: '22px',
              color: '#ff69b4',
              fontWeight: 700,
              fontStyle: 'italic',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Don't forget to smile today...
            <br />
            Happy Birthday!! 🐼🎂
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Slide8;
