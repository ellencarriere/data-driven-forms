import './App.css';

import BasicForm from './BasicForm';
import ComponentMap from './ComponentMap';
import FormRender from './FormRender';
import RequiredForm from './RequiredForm';

function App() {
  return (
    <div className="App">
      <h1> Data Driven Forms</h1>
        <div>
          <h2>Basic Form</h2>
          <BasicForm/>
        </div>
        <div>
          <ComponentMap/>
        </div>
        <div>
          <FormRender/>
        </div>
        <div>
          <h2>Required Form</h2>
          <RequiredForm/>
        </div>
      </div>
  );
}

export default App;
