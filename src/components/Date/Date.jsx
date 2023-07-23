import './Date.css';

function Date(props) {
  const { selectedOption, setSelectedOption } = props;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='dateContainer'>
      <button
        className={selectedOption === 'Day' ? 'selectedOption' : 'dateButton'}
        onClick={() => handleOptionClick('Day')}
      >
        Day
      </button>
      <button
        className={selectedOption === 'Week' ? 'selectedOption' : 'dateButton'}
        onClick={() => handleOptionClick('Week')}
      >
        Week
      </button>
      <button
        className={selectedOption === 'Month' ? 'selectedOption' : 'dateButton'}
        onClick={() => handleOptionClick('Month')}
      >
        Month
      </button>
      <button
        className={selectedOption === 'Year' ? 'selectedOption' : 'dateButton'}
        onClick={() => handleOptionClick('Year')}
      >
        Year
      </button>
    </div>
  );
}

export default Date;
