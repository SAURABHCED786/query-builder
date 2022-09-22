import logo from './logo.svg';
import './App.css';
import { AppProvider } from '@shopify/polaris';
import QueryBuilder from './pages/QueryBuilder';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <QueryBuilder/>
      </div>
    </AppProvider>
  );
}

export default App;
