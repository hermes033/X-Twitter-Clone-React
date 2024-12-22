import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { HelmetProvider } from 'react-helmet-async'
import './assets/css/tailwind.css'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={routes} />
  </HelmetProvider>
)
