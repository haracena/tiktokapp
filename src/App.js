import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { store, persistor } from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import SignIn from './users/SignIn';
import { logOut } from './store/user';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<NotImplemented />} />

            <Route path="/usuarios" element={<UsuariosOutlet />}>
              <Route path="registro" element={<NotImplemented />} />
              <Route path="login" element={<SignIn />} />

              <Route path=":id" element={<NotImplemented />} />
              <Route path=":id/videos" element={<NotImplemented />} />
            </Route>

            <Route path="/videos">
              <Route path="/" element={<NotImplemented />} />
              <Route path="nuevo" element={<NotImplemented />} />
              <Route path=":id" element={<NotImplemented />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

const UsuariosOutlet = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doLogOut = () => {
    dispatch(logOut());
    navigate('/usuarios/login');
  };

  return (
    <>
      {user && <button onClick={doLogOut}>Logout</button>}
      <Outlet />
    </>
  );
};

const NotImplemented = () => {
  return <h1>no implementado</h1>;
};

const PageNotFound = () => {
  return <h1>Error 404</h1>;
};

export default App;
