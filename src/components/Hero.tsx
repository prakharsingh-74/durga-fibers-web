
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, TrendingUp, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    // Auto-play functionality
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const carouselImages = [
    {
      src: "/lovable-uploads/25e03320-a3e2-44f1-9c71-f423d387afde.png",
      alt: "Global Trade & Shipping",
      title: "Global Trade Excellence"
    },
    {
      src: "/lovable-uploads/55fa7e34-5b3e-44a4-9f7e-aeecad05ed08.png",
      alt: "Quality Products",
      title: "Premium Quality Assurance"
    },
    {
      src: "/lovable-uploads/6d5cb898-9166-4008-a33c-268c0a64f42e.png",
      alt: "Agricultural Products",
      title: "Farm Fresh Products"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Connecting</span>
                <span className="block text-emerald-600">Farms to</span>
                <span className="block">World</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                Premier import-export solutions for agricultural products, textiles, and industrial goods. 
                Building bridges between farmers and global markets with quality and reliability.
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
          
          {/* Right Side - Image Carousel */}
          <div className="relative">
            <Carousel 
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-lg mx-auto"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-xl font-semibold">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <Globe className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-sm text-gray-600">Worldwide partnerships and distribution channels</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                <Shield className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-sm text-gray-600">Certified products with international standards</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Founder's Vision Section */}
        <div className="mt-20 py-16 bg-white/80 backdrop-blur-sm rounded-3xl border border-emerald-100">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full">
              <Quote className="h-8 w-8 text-emerald-600" />
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Founder's Vision</h2>
              
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                "With over 40+ years of experience in international trade, our vision is to bridge the gap 
                between local farmers and global markets. We believe in creating sustainable partnerships 
                that not only benefit our clients but also contribute to the economic growth of farming 
                communities worldwide. Quality, integrity, and innovation are the pillars that guide our 
                journey in connecting farms to the world."
              </blockquote>
              
              <div className="pt-6">
                <div className="inline-block">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-emerald-200">
                    <img 
                      src="/lovable-uploads/3fd77e17-697f-4bef-8a7f-e709f6e3f6eb.png"
                      alt="Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">Mr. Founder Name</h4>
                    <p className="text-emerald-600 font-medium">Founder & CEO, Durga Fibers</p>
                    <p className="text-sm text-gray-600 mt-1">40+ Years in Global Trade</p>
                  </div>
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
