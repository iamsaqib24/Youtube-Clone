import './App.css';
import Body from './components/Body'
import Head from './components/Head'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainSection from './components/MainSection'
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainSection />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>

  );
}

export default App;
