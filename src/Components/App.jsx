import { useState } from 'react';
import Editor from './Editor';
import Formulation from './Formulation';
import Solution from './Solution';
import ActionButton from './ActionButton';
import Notification from './Notification';
import { ExpandContextProvider } from './ExpandContext';

import '../Styles/App.css';

function App() {
  const [error_message, setErrorMessage] = useState("")
  return (
    <div className="app">
        <h2 className="title">Grail Solver</h2>
        {error_message!=="" && <Notification e={error_message} close={setErrorMessage} />}
        <div className="buttons-container">
            <ActionButton setErrorMessage= {setErrorMessage}/>
        </div>
        <ExpandContextProvider>
          <div id="main-bloc" className="block-container">
              <div className="problem">
                  <Editor/>
                  <Formulation/>
              </div>
              <Solution />
          </div>
        </ExpandContextProvider>
    </div>
  );
}

export default App;
