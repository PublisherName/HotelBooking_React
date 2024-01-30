import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';

import Home from './components/Home'
import RoomDetails from '#components/RoomDetails';
import BookingDetails from '#components/BookingDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="room/:id" element={<RoomDetails />} />
      <Route path="booking/:id" element={<BookingDetails />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;