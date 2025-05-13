import { createRoot } from 'react-dom/client'
import './nullstyle.css'
import './tailwind.css'
import { App } from '../App/App.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  //strict double render (useEffect, useLayoutEffect)
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </StrictMode>,
)
