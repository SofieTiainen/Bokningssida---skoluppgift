import './assets/css/index.scss';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from './routes/Root';
import Home from './routes/Home';
import SpecificEventPage from './routes/SpecificEventPage';
import Booking from './routes/BookingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/movement/event" element={<Root />}>
      <Route index element={<Home />} />
      <Route path=":categoryId" element={<SpecificEventPage />} />
      <Route path="booking" element={<Booking />} />
    </Route>
  )
)

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
