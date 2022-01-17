import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/presentational/NavigationBar';

import Home from './components/pages/Home';
import Alerts from './components/pages/Alerts';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
