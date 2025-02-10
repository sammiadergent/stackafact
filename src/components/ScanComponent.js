// components/ScanComponent.js
import React, { useState } from 'react';
import { useZxing } from 'react-zxing';
import { questions } from '../data/questions';

export default function ScanComponent() {
  const [scannedCode, setScannedCode] = useState('');
  const [linkedQuestion, setLinkedQuestion] = useState(null);

  // useZxing sets up the camera and scanning.
  const { ref } = useZxing({
    onResult: (result) => {
      if (result) {
        const code = result.getText();
        setScannedCode(code);

        // Look up the question that corresponds to the scanned code.
        const foundQuestion = questions.find((q) => q.code === code);
        setLinkedQuestion(foundQuestion);
      }
    },
    onError: (error) => {
      console.error('QR scan error:', error);
    },
  });

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>QR Scanner with Linked Question</h1>
      <p>Point your camera at the QR code.</p>
      
      {/* The video element that shows the camera feed */}
      <div style={{ width: '300px', margin: 'auto' }}>
        <video ref={ref} style={{ width: '100%' }} />
      </div>
      
      {scannedCode && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Scanned Code: {scannedCode}</h2>
          {linkedQuestion ? (
            <>
              <h3>Question:</h3>
              <p>{linkedQuestion.question}</p>
              <p style={{ fontStyle: 'italic', color: '#555' }}>
                {linkedQuestion.info}
              </p>
            </>
          ) : (
            <p>No question is linked to this code.</p>
          )}
        </div>
      )}
    </div>
  );
}
