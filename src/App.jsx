
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
//import { useNavigate } from 'react-router-dom';
import { AppContent } from './components/AppContent';

// Root App component with Redux Provider
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App
