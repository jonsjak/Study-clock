import { Provider } from 'react-redux';
import './styles/App.css';
import { BreakLength } from './components/BreakLength';
import { Credits } from './components/Credits';
import { Session } from './components/Session';
import { StudyLength } from './components/StudyLength';
import { store } from './state/store';
import { ClockStarter } from './components/ClockStarter';
import { AppContainer } from './components/styled_components/AppContainer';
import { BreakAndStudyContainer } from './components/styled_components/BreakAndStudyContainer';

const App = () => {
  return (
    <Provider store={store}>
        <AppContainer>
          <h1>Study O'clock</h1>
          <BreakAndStudyContainer>
            <BreakLength />
            <StudyLength />
          </BreakAndStudyContainer>
          <Session />
          <ClockStarter />
          <Credits />  
        </AppContainer>
    </ Provider>
  );
}

export default App;
