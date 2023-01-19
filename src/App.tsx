import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import customRoutes from './components/navigation/customRoutes';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  useMsalAuthentication(InteractionType.Redirect);
  const renderRoutes = () => {
    const allRoutes = customRoutes.map(r => <Route key={0} path={r.path || ''} element={<r.component />} />);
    return [...allRoutes, <Route key={0} path='*' element={<NotFoundPage />} />];
  }

  return (
    <div>
      <AuthenticatedTemplate >
        <Router>
          <Layout>
            <Routes>
              {renderRoutes()}
            </Routes>
          </Layout>
        </Router>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>No users are signed in!</p>
      </UnauthenticatedTemplate>
    </div>

  );
}

export default App;
