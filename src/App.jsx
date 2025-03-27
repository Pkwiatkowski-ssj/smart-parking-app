import React from 'react';
import MapScreen from './MapScreen';

function App() {
  console.log('App is rendering MapScreen');

  return (
    <div className="App">
      {/* Debugging header to check if Tailwind is working */}
      <h1 className="text-4xl font-bold text-red-500 bg-yellow-500">Tailwind is working!</h1>

      {/* Your MapScreen Component */}
      <MapScreen />
    </div>
  );
}

export default App;
