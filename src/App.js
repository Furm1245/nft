import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import StartingPage from './StartingPage/StartingPage';
import Wrapper from './components/Wrapper/Wrapper';


function App() {

  return (
    <BrowserRouter>
      {/* <Wrapper> */}
      <Routes>
        <Route exact path="/" element={<StartingPage />} />
      </Routes>
      {/* <Footer /> */}
      {/* </Wrapper> */}
    </BrowserRouter>
  );
}

export default App;