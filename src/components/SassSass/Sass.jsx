import NavBtns from '../NavBtns';
import './index.scss';

const Sass = () => {
  return (
    <div className="page">
      <h1>Sass (Syntactically Awesome Stylesheets)</h1>
      <div className="sass">
        <div className="sass-box">
          <p>Hello</p>
        </div>
        <div className="sass-box">
          <p>{"I'm"}</p>
        </div>
        <div className="sass-box">
          <p>Sassy</p>
        </div>
      </div>
      <NavBtns prev="/media-queries" next="/sass" />
    </div>
  );
};

export default Sass;
