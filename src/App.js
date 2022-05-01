import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import $ from 'jquery';
import Header from './components/Header'
import TopContent from './components/TopContent'
import MiddleContent from './components/MiddleContent'
import Footer from './components/Footer'
// import fontawesome from '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TopContent />
      <MiddleContent />
      <Footer />
    </div>
  );
}

export default App;
