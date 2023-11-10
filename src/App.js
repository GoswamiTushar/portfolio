import './App.css';
import AllRoutes from './components/routing/routes';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      {/* <PageContextProvider> */}
      <AllRoutes />
      {/* </PageContextProvider> */}
    </div>
  );
}

export default App;
