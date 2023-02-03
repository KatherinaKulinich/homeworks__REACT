
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import AlbumsPage from "./pages/AlbumsPage";
import ErrorPage from "./pages/ErrorPage404";
import PhotosPage from "./pages/PhotosPage";
import UsersPage from "./pages/UsersPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />
  },
  {
    path: "/users/:userId/albums",
    element: <AlbumsPage />
  },
  {
    path: "/users/:userId/albums/:albumId/photos",
    element: <PhotosPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);


function App() {

    return (
        <RouterProvider router={router} />
    )
}

export default App
