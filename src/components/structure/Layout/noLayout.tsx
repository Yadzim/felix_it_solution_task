import React, { useState, useEffect } from 'react';
import { LayoutWrapper } from './styled';

const NoLayout: React.FC<{children: React.ReactNode}> = ({children}): JSX.Element => {

  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
};

export default NoLayout;