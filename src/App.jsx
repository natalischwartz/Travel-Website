import { useState, useEffect } from 'react';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from './pages/Index';

import AOS from 'aos';
import "aos/dist/aos.css";

const queryClient = new QueryClient();



function App() {

   // ✅ useEffect dentro del cuerpo del componente
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);
 

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
