'use client';

import { useEffect, useState, useRef } from 'react';

const WORDS = [
  'inoubliable',
  'performant',
  'rentable',
  'optimisé',
  'professionnel',
  'sur‑mesure',
];

const CHAR_DELAY_MIN = 65;
const CHAR_DELAY_MAX = 110;
const DELETE_DELAY   = 38;
const PAUSE_FULL     = 2200;
const PAUSE_EMPTY    = 350;

type Phase = 'typing' | 'waiting' | 'deleting';

function randomDelay(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function TypewriterWord() {
  const [wordIdx, setWordIdx]       = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [phase, setPhase]           = useState<Phase>('typing');
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const word = WORDS[wordIdx];
    clearTimeout(timeoutRef.current);

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, randomDelay(CHAR_DELAY_MIN, CHAR_DELAY_MAX));
      } else {
        timeoutRef.current = setTimeout(() => setPhase('waiting'), PAUSE_FULL);
      }
    }

    if (phase === 'waiting') {
      setPhase('deleting');
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, DELETE_DELAY);
      } else {
        timeoutRef.current = setTimeout(() => {
          setWordIdx((i) => (i + 1) % WORDS.length);
          setPhase('typing');
        }, PAUSE_EMPTY);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, phase, wordIdx]);

  const maxWord = WORDS.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span
      className="relative inline-block align-bottom"
      style={{ minWidth: `${maxWord.length * 0.58}em` }}
      aria-label={WORDS[wordIdx]}
      aria-live="polite"
    >
      <span
        style={{
          background: 'linear-gradient(135deg, #03045E 0%, #0077B6 60%, #90E0EF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 900,
        }}
      >
        {displayed}
      </span>
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          width: 3,
          height: '0.8em',
          marginLeft: 4,
          borderRadius: 2,
          background: '#0077B6',
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s ease',
          boxShadow: showCursor ? '0 0 8px rgba(0,119,182,0.6)' : 'none',
        }}
      />
    </span>
  );
}
