import './App.css';
import Welcome from './components/welcome'
// import UserTraits from './components/userTraits'

import Manager from './components/Manager';

function App() {
  return (
    <div className="App">
      
      <Welcome/>

      {/* <UserTraits/> */}
      <Manager/>

       

    </div>
  );
}

export default App;
