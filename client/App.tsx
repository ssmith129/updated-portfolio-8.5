import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import ComputisCaseStudy from "./pages/ComputisCaseStudy";
import EzEMRxCaseStudy from "./pages/EzEMRxCaseStudy";
import MedicoCaseStudy from "./pages/MedicoCaseStudy";
import MoneyFarmCaseStudy from "./pages/MoneyFarmCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies/computis-crypto-tax-engine" element={<ComputisCaseStudy />} />
          <Route path="/case-studies/ezemrx-redesigning-ehr" element={<EzEMRxCaseStudy />} />
          <Route path="/case-studies/medico-hospital-management-system" element={<MedicoCaseStudy />} />
          <Route path="/case-studies/moneyfarm-ai-powered-personal-finance" element={<MoneyFarmCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
