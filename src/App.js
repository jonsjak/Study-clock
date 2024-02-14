import { Provider } from 'react-redux';
import './styles/App.css';
import styled from 'styled-components';
import { BreakLength } from './components/BreakLength';
import { Credits } from './components/Credits';
import { Session } from './components/Session';
import { StudyLength } from './components/StudyLength';
import { store } from './state/store';
import { ClockStarter } from './components/ClockStarter';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const BreakAndStudyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`
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
