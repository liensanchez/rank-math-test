import { BsCurrencyBitcoin, BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import TradeBox from '../TradeBox/TradeBox';
import './Display.css';

function Display(props) {
  const { displayOpenClose, setDisplayOpenClose } = props;

  const handleDisplay = () => {
    setDisplayOpenClose(!displayOpenClose);
  };

  let cryptoBalance = 3.529020;
  let dollarBalance = 19.153;
  let percentagechange = -2.32;

  return (
    <div className={displayOpenClose ? 'displayContainerOpen' : 'displayContainer'}>
      <div className="displayTitle">
        <div className='displayBtcContainer'>
          <BsCurrencyBitcoin />
        </div>
        <div className='displayText'>
          <p className='darkText'>Bitcoin</p>
          <p className='lightText'>BTC</p>
        </div>
      </div>

      <div className="displayCriptoBalance">
        <p className='darkText'>{cryptoBalance} BTC</p>
      </div>

      <div className="displayDollarBalance">
        <p className='lightText'>${dollarBalance} USD</p>
        <div className='displayPercentageContainer'>
          <p className='whiteText'>{percentagechange}%</p>
        </div>
      </div>

      {displayOpenClose && <TradeBox />}

      <button
        className='icon openBalanceMenu'
        onClick={() => handleDisplay()}
      >
        {displayOpenClose ? <BsChevronCompactUp /> : <BsChevronCompactDown/>}
      </button>
    </div>
  );
}

export default Display;
