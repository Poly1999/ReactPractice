import HelloWorldComponents from './HelloWorldComponents';
import MyClassComponent from './MyClassComponent';

import './App.css';

function App() {
  const hello = 'Hello World';
  const component = 'functional';

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{hello}</p>
        {component === 'functional' ? (
          <HelloWorldComponents />
        ) : (
          <MyClassComponent />
        )}
      </header>
    </div>
  );
}

export default App;
