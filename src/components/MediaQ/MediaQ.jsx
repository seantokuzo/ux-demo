import NavBtns from '../NavBtns';
import './mediaQ.css';

const MediaQ = () => {
  return (
    <div className="page">
      <h1>Media Queries</h1>
      <div className="media-container">
        <section className="media-section">
          <h2>Section 1</h2>
        </section>
        <section className="media-section">
          <h2>Section 2</h2>
        </section>
        <section className="media-section">
          <h2>Section 3</h2>
        </section>
      </div>
      <NavBtns prev="/pseudo" next="/sass" />
    </div>
  );
};

export default MediaQ;
