// components/RemoteWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const RemoteWidget = dynamic(() => import('./RemoteWidget'), {
  ssr: false,
});

export default function RemoteWrapper() {
  return (
    <div>
      <div style={{ padding: '20px', outline: 'red dashed 1px', marginBottom: '10px' }}>
        Component from NextJS
      </div>
      <RemoteWidget />
      <div style={{ padding: '20px', outline: 'red dashed 1px', marginBottom: '10px' }}>
        Component from NextJS
      </div>
    </div>
  );
}
