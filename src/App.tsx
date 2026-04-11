import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ScrollManager from "@/components/ScrollManager";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ContactPage from "./pages/ContactPage.tsx";
import Index from "./pages/Index.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/carta" element={<MenuPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/pedido-online" element={<Navigate replace to="/carta" />} />
          <Route path="/nosotros" element={<Navigate replace to="/contacto" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
