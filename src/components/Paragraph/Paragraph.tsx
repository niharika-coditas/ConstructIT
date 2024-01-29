import React, { forwardRef } from 'react';
import { IParagraph } from './interfaces';
import style from './Paragraph.module.scss';

export const Paragraph = forwardRef<HTMLParagraphElement, IParagraph>(
  ({ type = 'Default', bold, ...props }, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={`${style.pMain} ${style[`type${type}`]} ${
          bold ? style.bold : ''
        } ${props?.className}`}
      />
    );
  }
);
