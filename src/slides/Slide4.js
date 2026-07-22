import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Petals from '../components/Petals';
import ConfettiExplosion from '../components/ConfettiExplosion';

const Slide4 = ({ onNext }) => {
  const [cakeCut, setCakeCut] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const handleCutCake = () => {
    setCakeCut(true);
    setTimeout(() => setShowContinue(true), 2500);
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
        background: 'linear-gradient(135deg, #fff9c4 0%, #ffee58 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',n      }}
    >
      <Petals count={25} />
      {cakeCut && <ConfettiExplosion count={100} duration={3} />}

      {/* Pandas Entering */}
      {!cakeCut && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
              style={{
                position: 'absolute',
                fontSize: '60px',
                top: `${30 + i * 15}%`,
                left: `${20 + i * 12}%`,
                zIndex: 10 + i,
              }}
            >
              {['🐼', '🐼', '😅', '😎', '😄'][i]}
            </motion.div>
          ))}
        </>
      )}

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          fontSize: 'clamp(28px, 6vw, 48px)',
          fontWeight: 700,
          color: '#d81b60',
          textAlign: 'center',
          marginBottom: '20px',
          position: 'relative',
          zIndex: 20,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        Happy Birthday Devamithra 🎂
      </motion.h1>

      {/* Cake */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: cakeCut ? 0 : 2.5,
          type: 'spring',
        }}
        style={{
          fontSize: cakeCut ? '140px' : '120px',
          marginBottom: '30px',
          position: 'relative',
          zIndex: 15,
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
        }}
      >
        🎂
      </motion.div>

      {/* Candles - Animate if cake is cut */}
      {!cakeCut && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{
            position: 'absolute',
            top: '35%',
            fontSize: '30px',
            zIndex: 16,
          }}
        >
          🕯️🕯️🕯️
        </motion.div>
      )}

      {/* Cut Cake Animation */}
      {cakeCut && (
        <>
          <motion.div
            initial={{ x: -20, rotate: -10 }}
            animate={{ x: -60, rotate: -30 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              top: '40%',
              fontSize: '80px',
              zIndex: 16,
            }}
          >
            🍰
          </motion.div>
          <motion.div
            initial={{ x: 20, rotate: 10 }}
            animate={{ x: 60, rotate: 30 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              top: '40%',
              fontSize: '80px',
              zIndex: 16,
            }}
          >
            🍰
          </motion.div>
        </>
      )}

      {/* Celebrating Pandas */}
      {cakeCut && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={`dancing-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                position: 'absolute',
                fontSize: '50px',
                top: `${55 + i * 8}%`,
                left: `${15 + i * 18}%`,
                zIndex: 10,
              }}
            >
              🐼
            </motion.div>
          ))}
        </>
      )}

      {/* Cut Button */}
      {!cakeCut && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCutCake}
          style={{
            marginTop: '60px',
            padding: '15px 40px',
            fontSize: '20px',
            border: 'none',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, #ff6f00, #ff8f00)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 111, 0, 0.4)',
            fontWeight: 700,
            fontFamily: 'Poppins',
            position: 'relative',
            zIndex: 20,
          }}
        >
          🔪 Cut the Cake
        </motion.button>
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
            zIndex: 20,
          }}
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
};

export default Slide4;
