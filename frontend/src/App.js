import React, { useState } from 'react';
import LandingPage from './LandingPage';
import TasteProfileForm from './TasteProfileForm';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started ? (
        <LandingPage onGetStarted={() => setStarted(true)} />
      ) : (
        <TasteProfileForm />
      )}
    </div>
  );
}

export default App;
