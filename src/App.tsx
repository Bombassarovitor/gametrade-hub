import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import HowToSell from "./pages/HowToSell";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import CreateBlogPost from "./pages/CreateBlogPost";
import Suggestions from "./pages/Suggestions";
import CreateListing from "./pages/CreateListing";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import Categories from "./pages/Categories";
import Help from "./pages/Help";
import HowItWorks from "./pages/HowItWorks";
import Benefits from "./pages/Benefits";
import Pricing from "./pages/Pricing";
import PaymentMethods from "./pages/PaymentMethods";
import AccountVerification from "./pages/AccountVerification";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Rewards from "./pages/Rewards";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/how-to-sell" element={<HowToSell />} />
          <Route path="/dashboard/buyer" element={<Dashboard />} />
          <Route path="/dashboard/seller" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/create" element={<CreateBlogPost />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/help" element={<Help />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/account-verification" element={<AccountVerification />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
