
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Global</span>
                <span className="block text-emerald-600">Trade</span>
                <span className="block">Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Premier import-export solutions for agricultural products, textiles, and industrial goods. 
                Connecting markets worldwide with quality and reliability.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-emerald-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-emerald-600">1000+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300">
                  <Globe className="h-8 w-8 text-emerald-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
                  <p className="text-sm text-gray-600">Worldwide partnerships and distribution channels</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 mt-8">
                  <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Growth Focus</h3>
                  <p className="text-sm text-gray-600">Sustainable business growth strategies</p>
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
                  <Shield className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                  <p className="text-sm text-gray-600">Certified products with international standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
