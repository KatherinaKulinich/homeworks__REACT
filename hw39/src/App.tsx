import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserPage from "./pages/UsersPage/UserPage";
import './App.css'
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import ErrorPage from "./pages/404/404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />
  },
  {
    path: "/users/:userId/albums",
    element: <AlbumsPage />
  },
  {
    path: "/users/:userId/albums/albums/:albumId/photos",
    element: <PhotosPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
