import logo from './logo.svg';
import './App.css';
import  {Blog,Features,Footer,Header,Possibility,WhatGpt3} from './containers';
import  {Article,Brand,Cta,Feature,Navbar} from './components';

function App() {
  return (
    <div  className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
        
    </div>
  );
}

export default App;
