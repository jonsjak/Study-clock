import { Provider } from 'react-redux';
import './App.css';
import { BreakLength } from './components/BreakLength';
import { ClockStarter } from './components/ClockStarter';
import { Credits } from './components/Credits';
import { Session } from './components/Session';
import { StudyLength } from './components/StudyLength';
import { store } from './state/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Study O'clock</h1>
        <div>
          <BreakLength />
          <StudyLength />
          <Session />
          <ClockStarter />
          <Credits />
        </div>  
      </div>
    </ Provider>
  );
}

export default App;
