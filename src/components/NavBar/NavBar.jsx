import { useState } from 'react';
import { IoIosWallet, IoIosCompass, IoIosNotifications, IoIosSettings } from "react-icons/io";
import './NavBar.css';

function NavBar() {
  const [selectedOption, setSelectedOption] = useState('wallet');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='navbarContainer'>
      <div className='navbarButtonContainer'>
        <button
          className={selectedOption === 'wallet' ? 'navbarButtonSelected icon' : 'navbarButton icon'}
          onClick={() => handleOptionClick('wallet')}
        >
          <IoIosWallet/>
        </button>
        <button
          className={selectedOption === 'navigator' ? 'navbarButtonSelected icon' : 'navbarButton icon'}
          onClick={() => handleOptionClick('navigator')} 
        >
          <IoIosCompass/>
        </button>
        <button 
          className={selectedOption === 'alert' ? 'navbarButtonSelected icon' : 'navbarButton icon'}
          onClick={() => handleOptionClick('alert')}
        >
          <IoIosNotifications/>
        </button>
        <button 
          className={selectedOption === 'settings' ? 'navbarButtonSelected icon' : 'navbarButton icon'}
          onClick={() => handleOptionClick('settings')}
        >
          <IoIosSettings/>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
