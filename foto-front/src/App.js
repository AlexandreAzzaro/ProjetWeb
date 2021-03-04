import './css/App.css';
import Navigator from './Navigator'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
}

export default App;
