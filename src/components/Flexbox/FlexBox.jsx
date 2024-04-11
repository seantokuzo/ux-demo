import NavBtns from '../NavBtns';
import './flexbox.css';

const FlexBox = () => {
  return (
    <div className="page">
      <h1>Flexbox</h1>
      <div className="flex-container">
        <div className="flex-box flex-box1"></div>
        <div className="flex-box flex-box2"></div>
        <div className="flex-box flex-box3"></div>
        {/* <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div>
        <div className="flex-box flex-box3"></div> */}
      </div>
      <NavBtns prev="/grid-tricks" next="/em-rem" />
    </div>
  );
};

export default FlexBox;
