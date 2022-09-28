import logo from './logo.svg';
import './App.css';
import { AppProvider } from '@shopify/polaris';
import QueryBuilder from './pages/QueryBuilder';
import { useEffect, useState } from 'react';
function App() {
  const [main, setMain] = useState(
    [{ groupId: Math.floor(Math.random() * 48484874), row: [] }]
  );

  useEffect(()=> {
    console.log(main,"45544545");
  })
  
  return (
    <AppProvider>
      <div className="App">
        <QueryBuilder main={main} setMain={setMain} />
      </div>
    </AppProvider>
  );
}

export default App;
    