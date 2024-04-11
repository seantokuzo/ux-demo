// import "./index.css";
import './index.css';
import { Routes, Route } from 'react-router-dom';
import TemplateColumns from './components/Grid/TemplateColumns';
import GridAreas from './components/Grid/GridAreas';
import GridTricks from './components/Grid/GridTricks';
import FlexBox from './components/Flexbox/FlexBox';
import EmRem from './components/EmRem/EmRem';
import Pseudo from './components/Pseudo/Pseudo';
import MediaQ from './components/MediaQ/MediaQ';
import Sass from './components/SassSass/Sass';
import Home from './components/Home';
import Specificity from './components/Specificity/Specificity';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specificity" element={<Specificity />} />
        <Route path="/template-columns" element={<TemplateColumns />} />
        <Route path="/grid-areas" element={<GridAreas />} />
        <Route path="/grid-tricks" element={<GridTricks />} />
        <Route path="/flexbox" element={<FlexBox />} />
        <Route path="/em-rem" element={<EmRem />} />
        <Route path="/pseudo" element={<Pseudo />} />
        <Route path="/media-queries" element={<MediaQ />} />
        <Route path="/sass" element={<Sass />} />
      </Routes>
    </main>
  );
}

export default App;
