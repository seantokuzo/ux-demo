import NavBtns from '../NavBtns';
import './specificity.css';

const Specificity = () => {
  return (
    <div className="page">
      <h1>Specificity</h1>
      <div className="specificity-container">
        <h5 id="specificity-text" className="specificity-text">
          Who is styling me?
        </h5>
      </div>
      <NavBtns prev="/" next="/template-columns" />
    </div>
  );
};

export default Specificity;
