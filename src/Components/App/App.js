import ErrorBoundary from '../ErrorBoundry/ErrorBoundry';
import ExError from '../ExError/ExError';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ExError/>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
