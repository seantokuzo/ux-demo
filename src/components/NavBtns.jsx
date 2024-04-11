import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const NavBtns = ({ prev, next }) => {
  const location = useLocation();
  return (
    <div className="nav-btns">
      <Link className="nav-btn" to={prev || location}>
        <FaCaretLeft />
      </Link>
      <Link className="nav-btn" to={next || location}>
        <FaCaretRight />
      </Link>
    </div>
  );
};

export default NavBtns;
