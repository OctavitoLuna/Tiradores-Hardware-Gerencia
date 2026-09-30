import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GestionTecnologia from './pages/GestionTecnologia';
import CienciaTecnologia from './pages/CienciaTecnologia';
import MisionVision from './pages/MisionVision';
import Organigrama from './pages/Organigrama';
import MBTI from './pages/MBTI';
import Scrum from './pages/Scrum';
import IDEF0 from './pages/IDEF0';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gestion-tecnologia" element={<GestionTecnologia />} />
          <Route path="ciencia-tecnologia-innovacion" element={<CienciaTecnologia />} />
          <Route path="mision-vision" element={<MisionVision />} />
          <Route path="organigrama" element={<Organigrama />} />
          <Route path="mbti" element={<MBTI />} />
          <Route path="scrum" element={<Scrum />} />
          <Route path="idef0" element={<IDEF0 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
