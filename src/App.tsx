import * as React from 'react';
import './App.css';
import { AllButtons } from './components/Buttons/AllButtons';
import { TestButton } from './components/Buttons/Button';
import logo from './logo.svg';
import { SampleFormView } from './modules/SampleForm/components';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <h3>One Button</h3>
          <TestButton />
        </p>
        <p>
          <h3>All Buttons</h3>
          <AllButtons />
        </p>
        <div className="form-layout">
          <h3>Simple Form using Grid Layout</h3>
          <SampleFormView />
        </div>
      </div>
    );
  }
}

export default App;
