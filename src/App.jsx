import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import Date from './components/Date/Date';
import Display from './components/Display/Display';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import TradeBox from './components/TradeBox/TradeBox';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';

function App() {
  const [menuOpenClose, setMenuOpenClose] = useState(false);
  const [displayOpenClose, setDisplayOpenClose] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Day');

  const handleMenu = () => {
    setMenuOpenClose(!menuOpenClose);
  };

  const updateMenuState = () => {
    if (window.innerWidth > 1023) {
      setMenuOpenClose(true);
    } else {
      setMenuOpenClose(false);
    }
  };

  useEffect(() => {
    updateMenuState();
    window.addEventListener('resize', updateMenuState);
    return () => {
      window.removeEventListener('resize', updateMenuState);
    };
  }, []);

  return (
    <div className='BitcoinWallet'>
      {window.innerWidth < 1023 ? <Header menuOpenClose={menuOpenClose} setMenuOpenClose={setMenuOpenClose} handleMenu={handleMenu}/> : ''}
      <div className='menucontainer'>
        <DropdownMenu menuOpenClose={menuOpenClose} setMenuOpenClose={setMenuOpenClose} handleMenu={handleMenu}/>
      </div>
      <div className="displaycontainer">
        <Display displayOpenClose={displayOpenClose} setDisplayOpenClose={setDisplayOpenClose} />
      </div>
      <div className="datecontainer">
        <Date selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>
      <div className="chartcontainer">
        <Chart selectedOption={selectedOption} />
      </div>
      <div className="tradeboxcontainer">
        <TradeBox displayOpenClose={displayOpenClose} />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
