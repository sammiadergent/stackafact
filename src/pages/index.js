import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Game Master</h1>
      <p>This is the starting page for your game experience.</p>

      <div style={{ marginTop: '1rem' }}>
        <Link href="/tutorial">
          Go to the Tutorial
        </Link>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Link href="/scan">
          Scan a QR Code
        </Link>
      </div>
    </div>
  );
}
