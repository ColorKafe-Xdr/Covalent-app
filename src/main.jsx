import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Page from './Components/PDFViewer/PDFViewer.jsx'
import './index.css'
import App from './App.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Teste from './Components/PDFViewer/Teste.jsx'

const er = <ErrorPage></ErrorPage>

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: er
  },
  
  {
    path: '/livro',
    element: <Page></Page>,
    errorElement: er
  },

  {
    path: '/teste',
    element: <Teste></Teste>,
    errorElement: er
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider  router={router} > </RouterProvider>
  </StrictMode>,
)
