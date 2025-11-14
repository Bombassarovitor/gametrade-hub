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
import NotFound from "./pages/NotFound";

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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
