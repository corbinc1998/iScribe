import { useEffect } from 'react';
import { runDemo } from './services/testgithub';

function App() {
  useEffect(() => {
    runDemo();
  }, []);

  return <div>Check the console</div>;
}

export default App;