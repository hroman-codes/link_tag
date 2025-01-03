import './App.css';
import Container from '@mui/material/Container'
import Hero from './components/Hero';
import ContentBannerTwo from './components/ContentBannerTwo';
import HPSeekerCards from './components/HPSeekerCards';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Hero />
      <ContentBannerTwo />

      <Container>
        <HPSeekerCards />
      </Container> 

      <Container maxWidth='xl'>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
