import NavBtns from '../NavBtns';
import './templateColumns.css';

const TemplateColumns = () => {
  return (
    <div className="page">
      <h1>Grid Template Columns</h1>
      <div className="col-container">
        {/* 15 boxes */}
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
        <div className="col-box"></div>
      </div>
      <NavBtns prev="/specificity" next="/grid-areas" />
    </div>
  );
};

export default TemplateColumns;
