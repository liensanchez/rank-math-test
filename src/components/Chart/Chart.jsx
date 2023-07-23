import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { BsCircleFill } from 'react-icons/bs';
import './Chart.css';

const CustomizedDot = (props) => {
  const { cx, cy, index } = props;

  const isLastIndex = index === props.dataLength - 1;
  let dotColor = "transparent";

  if (isLastIndex) {
    dotColor = "var(--color-darkGold)";
  }

  return (
    <g>
      <circle cx={cx} cy={cy} r={4} stroke="none" fill={dotColor} />
    </g>
  );
};

function Chart(props) {
  const dataOptions = {
    Day: [
      { name: 'PriceA', BTC: 300 },
      { name: 'PriceB', BTC: 600 },
      { name: 'PriceC', BTC: 400 }
    ],
    Week: [
      { name: 'PriceA', BTC: 100 },
      { name: 'PriceB', BTC: 300 },
      { name: 'PriceC', BTC: 700 },
      { name: 'PriceD', BTC: 800 },
      { name: 'PriceE', BTC: 500 },
    ],
    Month: [
      { name: 'PriceA', BTC: 1100 },
      { name: 'PriceB', BTC: 300 },
      { name: 'PriceC', BTC: 700 },
      { name: 'PriceD', BTC: 800 },
      { name: 'PriceE', BTC: 500 },
      { name: 'PriceF', BTC: 200 },
      { name: 'PriceG', BTC: 300 },
    ],
    Year: [
      { name: 'PriceA', BTC: 800 },
      { name: 'PriceB', BTC: 1000 },
      { name: 'PriceC', BTC: 1700 },
      { name: 'PriceD', BTC: 1400 },
      { name: 'PriceE', BTC: 1500 },
      { name: 'PriceF', BTC: 1200 },
      { name: 'PriceG', BTC: 1300 },
    ],
  };

  const displayedData = dataOptions[props.selectedOption] || dataOptions['day'];
  const lowestBTC = displayedData.reduce((min, current) => (current.BTC < min ? current.BTC : min), displayedData[0].BTC);
  const highestBTC = displayedData.reduce((max, current) => (current.BTC > max ? current.BTC : max), displayedData[0].BTC);
  const currentBTC = '5.483';

  return (
    <div className='chartContainer'>
      <div className="chartLowerHigher">
        <p className='lightText'>
          <BsCircleFill className='lowerIco'/> 
          Lower: ${lowestBTC}
        </p>
        <p className='lightText'>
          <BsCircleFill className='higherIco'/> 
          Higher: ${highestBTC}
        </p>
      </div>
      <ResponsiveContainer width="85%" height="85%">
        <AreaChart width={100} height={100} data={displayedData}>
          <Area type="monotone" dataKey="BTC" stroke="#ff9d22" fill="#fff7ee" dot={<CustomizedDot dataLength={displayedData.length} />} />
        </AreaChart>
      </ResponsiveContainer>
      <div className='chartCurrentPrice'>
        <p className='darkText'><BsCircleFill className='btcIco'/> 1 BTC = $ {currentBTC}</p>
      </div>
    </div>
  );
}

export default Chart;
