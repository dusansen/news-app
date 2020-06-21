import React from 'react';
import LeftArrow from '../src/components/arrows/LeftArrow';
import RightArrow from '../src/components/arrows/RightArrow';

export default {
  title: 'Arrows'
};

export const Left = () => <LeftArrow />;

export const Right = () => <RightArrow />;

export const ArrowWithSize = () => <LeftArrow size={80} />;

export const ArrowWithColor = () => <RightArrow color='red' />;