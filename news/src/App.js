import logo from './logo.svg';
import './styles/globals.css'
import './App.css';
import { default as Header } from './static/header'
import { NewsList, NewsListUS, NewsListSport } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div className='container-fluid fluid-screen body' >
          <div className="row flex-nowrap index"> 
            <Routes>
            <Route path='/' element={<NewsList/>} />
            <Route path='/newsUS' element={<NewsListUS/>}/>
            <Route path='/newsSport' element={<NewsListSport/>}/>
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
