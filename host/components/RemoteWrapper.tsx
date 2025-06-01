// components/RemoteWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const RemoteWidget = dynamic(() => import('./RemoteWidget'), {
  ssr: false,
});

export default function RemoteWrapper() {
  return (
    <div>
      <h1 style={ { color: 'red', textAlign: 'center' } }>
        React App (Host by NextJS)
      </h1>
      <div style={{ padding: '20px', outline: 'red dashed 1px', marginBottom: '10px' }}>
        Component from NextJS
      </div>
      <RemoteWidget />
    </div>
  );
}
