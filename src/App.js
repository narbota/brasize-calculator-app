import './App.css';
import EuBraSize from './EuBraSize';
import React, { useState } from 'react';

export default function App() {
  const [underBust, setUnderBust] = useState(0);
  const [fullBust, setFullBust] = useState(0);
  const [conversion, setConversion]=useState(0);
  // const [difference, setDifference] = useState(0);
  const [braSize, setBraSize] = useState(0);
  const getBraSize = (event) => {
    event.preventDefault();
    const newbraSize = fullBust - underBust;
    setBraSize(newbraSize);
  };
  

  return (
    <>
      <div className="App">
        <h2>Bra size calculator</h2>
        <form onSubmit={getBraSize}>
          <label>Full Bust:</label>
          <input
            type="text"
            placeholder="in inches"
            value={fullBust}
            onChange={(event) => setFullBust(event.target.value)}
          />
          <label>Under Bust:</label>
          <input
            type="text"
            placeholder="in inches"
            value={underBust}
            onChange={(event) => setUnderBust(event.target.value)}
          />

          <button type="submit">Get bra size</button>
        </form>
        <p>
          Your bra size is:
          {(() => {
            switch (braSize) {
              case 1:
                return `${underBust}A`;
              case 2:
                return `${underBust}B`;
              case 3:
                return `${underBust}C`;
              case 4:
                return `${underBust}D`;
              case 5:
                return `${underBust}E`;
              case 6:
                return `${underBust}F`;
              case 7:
                return `${underBust}G`;
              case 8:
                return `${underBust}H`;
              case 9:
                return `${underBust}I`;
              case 10:
                return `${underBust}J`;
              default:
                return 'Please enter your information';
            }
          })()}
        </p>
        <EuBraSize/>
      </div>
    </>
  );
}
