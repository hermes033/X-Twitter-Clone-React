import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { HelmetProvider } from 'react-helmet-async'
import './assets/css/tailwind.css'
import store from './store'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HelmetProvider>
      <RouterProvider router={routes} />
    </HelmetProvider>
  </Provider>

)
