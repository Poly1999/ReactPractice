import UncontrolledForms from './UncontrolledForms/UncontrolledForms';
import ControledForms from './ControlledForms/ControledForms';
import FormikComponent from './Forms/Formik';
import './App.css';

function App() {
  return (
    <div className='App'>
      <UncontrolledForms />
      <ControledForms />
      <FormikComponent />
    </div>
  );
}

export default App;
