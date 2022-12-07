import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ReferenceScreen from './screens/ReferenceScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
  return (
    <div className="App col-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/reference" element={<ReferenceScreen />} />
        <Route path="/details/:id" element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
