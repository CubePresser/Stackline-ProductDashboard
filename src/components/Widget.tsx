import React from 'react';

export const Widget: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  return (
    <article className="widget card">{ children }</article>
  );
};