import NavBtns from '../NavBtns';
import './gridAreas.css';

const GridAreas = () => {
  return (
    <div className="page">
      <h1>Grid Areas</h1>
      <div>
        <div className="container">
          <div className="box header">
            <p className="areas-text">HEADER</p>
          </div>
          <div className="box box1">
            <p className="areas-text">ITEM 1</p>
          </div>
          <div className="box box2">
            <p className="areas-text">ITEM 2</p>
          </div>
          <div className="box box3">
            <p className="areas-text">SIDEBAR</p>
          </div>
          <div className="box footer">
            <p className="areas-text">FOOTER</p>
          </div>
        </div>
      </div>
      <NavBtns prev="/template-columns" next="/grid-tricks" />
    </div>
  );
};

export default GridAreas;
