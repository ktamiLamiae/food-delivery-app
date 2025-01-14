import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import ContactUs from './pages/ContactUs';
import NoNavbarLayout from './pages/NoNavbarLayout';
import { ThemeProvider} from './context/ThemeContext';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NoNavbarLayout />} />
      </>
    )
  );

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
