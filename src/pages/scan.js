// pages/scan.js
import dynamic from 'next/dynamic';

// Dynamically import the ScanComponent and disable SSR so it runs only on the client.
const ScanComponent = dynamic(() => import('../components/ScanComponent'), { ssr: false });

export default function ScanPage() {
  return <ScanComponent />;
}
