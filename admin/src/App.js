import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.scss';
import Footer from './components/partials/Footer';
import Nav from './components/partials/Nav';
import Sidebar from './components/partials/Sidebar';
import { RouterProvider } from 'react-router-dom';
import MyRoute from './components/router/MyRoute';

function App() {
    return (
        <>
            <RouterProvider router={MyRoute} />
        </>
    );
}

export default App;
