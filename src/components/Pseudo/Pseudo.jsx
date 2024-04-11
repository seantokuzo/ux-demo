import NavBtns from '../NavBtns';
import './pseudo.css';

const Pseudo = () => {
  return (
    <div className="page">
      <h1>CSS Pseudo Classes</h1>
      <div className="pseudo-container">
        <button className="pseudo-btn">Click Me</button>
        {/* <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div>
        <div className="pseudo-box"></div> */}
      </div>
      <NavBtns prev="/em-rem" next="/media-queries" />
    </div>
  );
};

export default Pseudo;
