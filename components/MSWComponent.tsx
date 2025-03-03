'use client';

import { useEffect, useRef, useState } from 'react';

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const initialized = useRef(false);
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      const initMsw = await import('../mocks').then(res => res.initMsw);
      await initMsw();
      setMswReady(true);
    };

    init();
  }, []);

  if (!mswReady) return null;

  return <>{children}</>;
};
