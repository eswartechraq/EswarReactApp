import logo from './logo.svg';
import './App.css';
// import ParentComponent from './components/parent-to-child/ParentComponent'
// import ParentComponent from './components/child-to-parent/ParentComponent';
import UseStateHook from './components/hooks/UseStateHook';
import UseEffectHook from './components/hooks/UseEffectHook';
import UseContextHook from './components/hooks/UseContextHook/UseContextHook';
import UseRefHook from './components/hooks/UseRefHook';
import DataBindingWithUseEffect from './components/hooks/DataBindingWithUseEffect';
import FormSubmit from './components/forms/FormSubmit';
import Routing from './components/react-routing/Routing';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <p>React Boot Camp App</p>
      <div>
        {/* Passing data from parent to child */}
        {/* <ParentComponent /> */}

        {/* Passing data from child to parent */}
        {/* <ParentComponent /> */}

        {/* useState hook example */}
        {/* <UseStateHook /> */}

        {/* useEffect hook example */}
        {/* <UseEffectHook /> */}

        {/* Data binding with useEffect */}
        {/* <DataBindingWithUseEffect /> */}

        {/* useContext hook example */}
        {/* <UseContextHook/> TODO*/}

        {/* useRef hook example */}
        {/* <UseRefHook /> */}

        {/* react form submit */}
        {/* <FormSubmit /> */}

        {/* react routing */}
        <Routing />
      </div>
    </div>
  );
}

export default App;
