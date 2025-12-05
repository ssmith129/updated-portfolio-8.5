import "./global.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageAnimationWrapper from "./components/PageAnimationWrapper";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import ComputisCaseStudy from "./pages/ComputisCaseStudy";
import ComputisCaseStudySandbox from "./pages/ComputisCaseStudySandbox";
import EzEMRxCaseStudy from "./pages/EzEMRxCaseStudy";
import SymplifyCaseStudy from "./pages/SymplifyCaseStudy";
import MoneyFarmCaseStudy from "./pages/MoneyFarmCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <PageAnimationWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/case-studies/computis-crypto-tax-engine"
              element={<ComputisCaseStudy />}
            />
            <Route
              path="/case-studies/computis-crypto-tax-engine-sandbox"
              element={<ComputisCaseStudySandbox />}
            />
            <Route
              path="/ComputisCaseStudy"
              element={
                <Navigate
                  to="/case-studies/computis-crypto-tax-engine"
                  replace
                />
              }
            />
            <Route
              path="/case-studies/ezemrx-redesigning-ehr"
              element={<EzEMRxCaseStudy />}
            />
            <Route
              path="/case-studies/symplify-hospital-management-system"
              element={<SymplifyCaseStudy />}
            />
            <Route
              path="/case-studies/moneyfarm-ai-powered-personal-finance"
              element={<MoneyFarmCaseStudy />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageAnimationWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
