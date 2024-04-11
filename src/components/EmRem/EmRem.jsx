import NavBtns from '../NavBtns';
import './emRem.css';

const EmRem = () => {
  return (
    <div className="page">
      <h1>Ems and Rems</h1>
      <div className="emrem-parent">
        <p className="base">My font size is the default 16px</p>
        <p className="em">
          My font size is set with <i>em</i>
        </p>
        <p className="rem">
          My font size is set with <i>rem</i>
        </p>
      </div>
      <NavBtns prev="/flexbox" next="/pseudo" />
    </div>
  );
};

export default EmRem;
