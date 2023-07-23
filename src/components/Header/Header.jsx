import { BsChevronLeft, BsThreeDotsVertical, BsThreeDots } from 'react-icons/bs';
import './Header.css';

function Header(props) {
  const { menuOpenClose, setMenuOpenClose, handleMenu } = props;

  return (
    <div className='headerContainer'>
      <button className='icon'>
        <BsChevronLeft />
      </button>
      <p className='headerTitle darkText'>Bitcoin Wallet</p>
      <button onClick={() => handleMenu()} className='icon'>
        {menuOpenClose ? <BsThreeDots /> :  <BsThreeDotsVertical />} 
      </button>
    </div>
  );
}

export default Header;
