
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
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-8 py-12 relative z-10">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] pt-20">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 px-4">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Connecting</span>
                <span className="block text-emerald-600">Farms to</span>
                <span className="block">World</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                Premier import-export solutions for agricultural products, textiles, and industrial goods. 
                Building bridges between farmers and global markets with quality and reliability.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 text-xl">
                Explore Products
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-5 text-xl">
                Contact Us
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-emerald-600">15+</div>
                <div className="text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-emerald-600">50+</div>
                <div className="text-base text-gray-600">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-emerald-600">1000+</div>
                <div className="text-base text-gray-600">Clients</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Larger Image Carousel */}
          <div className="relative px-4">
            <Carousel 
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 lg:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-8 text-white">
                          <h3 className="text-2xl font-semibold">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-6" />
              <CarouselNext className="right-6" />
            </Carousel>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <Globe className="h-10 w-10 text-emerald-600 mb-6" />
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Global Network</h3>
                <p className="text-base text-gray-600">Worldwide partnerships and distribution channels</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                <Shield className="h-10 w-10 text-green-600 mb-6" />
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Quality Assured</h3>
                <p className="text-base text-gray-600">Certified products with international standards</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Founder's Vision Section - Moved to Middle */}
        <div className="mt-32 mb-20 py-20 bg-white/90 backdrop-blur-sm rounded-3xl border border-emerald-100 mx-4 lg:mx-8">
          <div className="text-center space-y-12 px-8 lg:px-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full">
              <Quote className="h-10 w-10 text-emerald-600" />
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Founder's Vision</h2>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                "With over 40+ years of experience in international trade, our vision is to bridge the gap 
                between local farmers and global markets. We believe in creating sustainable partnerships 
                that not only benefit our clients but also contribute to the economic growth of farming 
                communities worldwide. Quality, integrity, and innovation are the pillars that guide our 
                journey in connecting farms to the world."
              </blockquote>
              
              <div className="pt-8">
                <div className="inline-block">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-200 p-2 bg-white">
                    <img 
                      src="/lovable-uploads/e3535517-870b-4414-a49c-ed95e4eea9ff.png"
                      alt="Durga Fibers Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900">Mr. Founder Name</h4>
                    <p className="text-emerald-600 font-medium text-lg">Founder & CEO, Durga Fibers</p>
                    <p className="text-base text-gray-600 mt-2">40+ Years in Global Trade</p>
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
