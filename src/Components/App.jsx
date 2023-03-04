import '../Styles/App.css';
import Editor from './Editor';
import Formulation from './Formulation';
import Solution from './Solution';
import ActionButton from './ActionButton';

function App() {
  return (
    <div>
        <h2 className="title">Grail Solver</h2>
        <div className="buttons-container">
            <ActionButton />
        </div>
        <div id="main-bloc" className="block-container">
            <div className="problem">
                <Editor/>
                <Formulation/>
            </div>
            <Solution />
        </div>
    </div>
  );
}

export default App;
