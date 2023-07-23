import { BsCurrencyDollar } from 'react-icons/bs';
import './TradeBox.css';

function TradeBox(props) {
  const { displayOpenClose } = props;

  return (
    <>
      {!displayOpenClose && (
        <div className='tradeContainer'>
          <div className="tradeBuySell">
            <div className="tradeBuySellContent">
              <button className='buttonBuy whiteText'>
                <BsCurrencyDollar />
              </button>
              <p className='darkText'>Buy BTC</p>
            </div>
          </div>

          <div className="tradeBuySell">
            <div className="tradeBuySellContent">
              <button className='buttonSell whiteText'>
                <BsCurrencyDollar />
              </button>
              <p className='darkText'>Sell BTC</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TradeBox;
