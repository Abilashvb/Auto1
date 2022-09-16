import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from "./AppContext/AppProvider";
import AppRoutes from './components/Routes';
import './components/Style.css';

function App() {
  return (
    <AppProvider siteUrl="http://localhost:3000/">
      <AppRoutes />
    </AppProvider>
  );
}

export default App;