import './App.css';
import Lowerbar from './components/Lowerbar';
import Header from './components/Header';
import Newsbanners from './components/Newsbanners';
import MainArticles from './components/MainArticles';
import TopDaily from './components/TopDaily';

function App() {
  const lowerItems = [
    '',
    '',
    'Etusivu',
    'HS Visio',
    'Luetuimmat',
    'Uusimmat',
    'Politiikka',
    'Kaupunki',
    'Kulttuuri',
    'Tiede',
    'Hyvinvointi',
    'Ruoka',
    'Nyt',
    '',
    '',
    '',
    ''
  ];

  return (
    <div className="App">
        <Header/>
        <Lowerbar  listItems ={lowerItems}/>
        <Newsbanners/>
          <div className="aContainer">
            <MainArticles/>
            <TopDaily/>
          </div>
    </div>
  );
}

export default App;
