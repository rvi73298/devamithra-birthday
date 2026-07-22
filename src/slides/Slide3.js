import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Petals from '../components/Petals';
import Sparkles from '../components/Sparkles';

const Slide3 = ({ onNext }) => {
  const [showLetter, setShowLetter] = useState(false);
  const [letterProgress, setLetterProgress] = useState(0);

  const letterText = `Dear Devamithra,

Today is YOUR day, and I wanted to take a moment to tell you something you might already know but should hear again:

You are truly special.

In this world of chaos and uncertainty, your presence brings peace. Your laughter brings joy. Your kindness brings hope.

I wish for you endless happiness—the kind that comes not just from big moments, but from small, quiet ones. The kind that makes you smile at 3 AM when you remember something beautiful.

I wish for you strength—not just to face the storms, but to dance in the rain and find beauty in the struggle.

I wish for you love—surrounding you from every direction, reminding you that you are never alone.

I wish for you laughter—loud, genuine, the kind that echoes and makes your belly hurt.

I wish for you unforgettable memories—ones that you'll treasure forever and share with the people you love.

But most importantly, I want to thank you. Thank you for being the kind of friend who makes life richer just by existing in it. Thank you for your endless support and beautiful heart.

Happy Birthday, Devamithra! 🐼💖

With all my love,
Your Friend`;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLetter(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (showLetter && letterProgress < letterText.length) {
      const timer = setTimeout(() => {
        setLetterProgress(letterProgress + 1);
      }, 15);
      return () => clearTimeout(timer);
    }
  }, [showLetter, letterProgress, letterText]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
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
      <Sparkles count={15} />

      {/* Envelope Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: showLetter ? -80 : 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: '120px',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 11,
        }}
      >
        💌
      </motion.div>

      {/* Panda Struggling with Envelope */}
      {!showLetter && (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            fontSize: '80px',
            position: 'absolute',
            right: '10%',
            top: '40%',
            zIndex: 10,
          }}
        >
          🐼
        </motion.div>
      )}

      {/* Letter Content Box */}
      {showLetter && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '90%',
            maxHeight: '70vh',
            overflow: 'auto',
            position: 'relative',
            zIndex: 12,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Sitting Panda */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              fontSize: '60px',
            }}
          >
            🐼
          </motion.div>

          {/* Typewriter Effect */}
          <p
            style={{
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: '#333',
              lineHeight: '1.8',
              fontFamily: '"Courier New", monospace',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              paddingRight: '80px',
            }}
          >
            {letterText.substring(0, letterProgress)}
            {letterProgress < letterText.length && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ color: '#d81b60' }}
              >
                |
              </motion.span>
            )}
          </p>
        </motion.div>
      )}

      {/* Continue Button */}
      {letterProgress === letterText.length && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          style={{
            marginTop: '30px',
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
            zIndex: 12,
          }}
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
};

export default Slide3;
