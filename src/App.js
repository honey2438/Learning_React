import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title1="Home" title2="Services" title3="Search" />
    <div className="container my-3">
    <TextForm heading="Text Area"/>
    </div>
    
    </>
  );
}

export default App;
