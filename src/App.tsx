import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Dashboard from "./components/Dashboard";
// import Features from './components/Features';
import AboutCasa from "./components/AboutCasa";
import HowItWorks from "./components/HowItWorks";
import WhyCasa from "./components/WhyCasa";
import CustomerReviews from "./components/CustomerReviews";
import PricingSection from "./components/PricingSection";
// import TotalSales from "./components/TotalSales";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className=" pt-80">
        <Dashboard />
      </div>
      <TrustedBy />
      {/* <Features /> */}
      <AboutCasa />
      <HowItWorks />
      <WhyCasa />
      <CustomerReviews />
      <PricingSection />

      {/* <TotalSales /> */}
    </div>
  );
}

export default App;
