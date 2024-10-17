// components/AnimatedItem.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import { animateFromTop, animateFromLeft, animateFromRight, animateFromBottom } from '../../utils/gsapAnimations';

type AnimatedItemProps = {
  children: React.ReactNode;
  animation: 'top' | 'left' | 'right' | 'bottom';
};

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, animation }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (animation) {
            case 'top':
              animateFromTop(itemRef.current!);
              break;
            case 'left':
              animateFromLeft(itemRef.current!);
              break;
            case 'right':
              animateFromRight(itemRef.current!);
              break;
            case 'bottom':
              animateFromBottom(itemRef.current!);
              break;
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [animation]);

  return (
    <div ref={itemRef} >
      {children}
    </div>
  );
};

export default AnimatedItem;
