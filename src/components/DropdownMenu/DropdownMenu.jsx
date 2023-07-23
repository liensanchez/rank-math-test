import { BsShare, BsArchive, BsDashCircle, BsLayoutSidebarReverse } from "react-icons/bs";
import './DropdownMenu.css';

function DropdownMenu(props) {
  const { menuOpenClose, handleMenu } = props;

  return (
    <>
      {menuOpenClose && (
        <div className="menuDropdownContainer"
        onClick={() => handleMenu()}
        >
          <div className="menuDropdownDisplay">
            <div className="menuDropdownOption">
              <p className='darkText'>Edit</p>
              <BsLayoutSidebarReverse className='darkText'/>
            </div>
            <div className="menuDropdownOption">
              <p className='darkText'>Courier Info</p>
              <BsArchive className='darkText'/>
            </div>
            <div className="menuDropdownOption">
              <p className='darkText'>Share</p>
              <BsShare className='darkText'/>
            </div>
            <div className="menuDropdownOption">
              <p className='redText'>Remove</p>
              <BsDashCircle className='redText'/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DropdownMenu;
