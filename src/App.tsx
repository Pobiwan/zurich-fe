
import './App.css';
import {Login} from './pages/login';
import {Home} from './pages/home';
import ErrorRoute from './pages/errorroute';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthLayout from './layout/authlayout';
import Layout from './layout/layout';
import ProtectedRoute from './util/protectedRoute';

const clientId = '561343147824-gfar9c3avdldo5ca9kt5d5abv7b5gscs.apps.googleusercontent.com';

function App() {
  return (
    <div className="App">
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<ErrorRoute mode={1} errorMessage={"User not authorized. Please login first"}/>} />
            <Route path="*" element={<ErrorRoute mode={2} errorMessage={"Web address not found"}/>} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>

        </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
  </div>
  );
}

export default App;
