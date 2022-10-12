import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './nav/components'
import Header from './header/components'
import Cards from './cards/components'
import Info from './information/components'
import Footer from './footer/components'


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Cards />  
      <Info />
      <Footer />
    </div>
  );
}

export default App;
