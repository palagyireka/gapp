import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import About from './pages/main/About';
import Identifier from './pages/Form/Identifier/Identifier';
import IdentifierResult from './pages/Form/Identifier/IdentifierResult';
import InsectResult from './pages/Form/PlantDoctor/InsectResult';
import CropResult from './pages/Form/PlantDoctor/CropResult';
import RecommendationSurvey from './pages/Form/RecommendationSurvey';
import PlantDoctor from './pages/Form/PlantDoctor/PlantDoctor';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="GAPP | Kertészkedési tanácsadás" />
              <About />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="GAPP | Kertésznaptár" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/forms/identifier"
          element={
            <>
              <PageTitle title="GAPP | Növényhatározó" />
              <Identifier />
            </>
          }
        />
        <Route
          path="/forms/identifier/result"
          element={
            <>
              <PageTitle title="GAPP | Azonosított növények" />
              <IdentifierResult />
            </>
          }
        />
        <Route
          path="/forms/recommendation-survey"
          element={
            <>
              <PageTitle title="GAPP | Környezetfelmérés - Növényajánló" />
              <RecommendationSurvey />
            </>
          }
        />
        <Route
          path="/forms/plant-doctor"
          element={
            <>
              <PageTitle title="GAPP | Növénydoktor - Mi baja lehet a növényemnek?" />
              <PlantDoctor />
            </>
          }
        />
        <Route
          path="/forms/plant-doctor/result/insect"
          element={
            <>
              <PageTitle title="GAPP | Azonosított rovar" />
              <InsectResult />
            </>
          }
        />
        <Route
          path="/forms/plant-doctor/result/health"
          element={
            <>
              <PageTitle title="GAPP | Egészség" />
              <CropResult />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
