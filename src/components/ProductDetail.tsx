
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { slug } = useParams();

  const productData: Record<string, any> = {
    "soybean-oil": {
      name: "Soybean Oil",
      category: "Premium Oils & Extracts",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800",
      description: "Premium quality soybean oil extracted from the finest soybeans. Rich in polyunsaturated fats and vitamin E, our soybean oil is perfect for cooking, baking, and industrial applications. Processed using advanced extraction methods to ensure maximum purity and nutritional value.",
      features: [
        "100% Pure Soybean Oil",
        "Rich in Vitamin E",
        "Low Saturated Fat",
        "Neutral Taste",
        "High Smoke Point",
        "Cholesterol Free"
      ],
      specifications: {
        "Free Fatty Acid": "Max 0.1%",
        "Moisture": "Max 0.1%",
        "Iodine Value": "120-143",
        "Saponification Value": "189-195",
        "Peroxide Value": "Max 2.0 meq O2/kg"
      }
    },
    "mustard-oil": {
      name: "Mustard Oil",
      category: "Premium Oils & Extracts",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800",
      description: "Traditional cold-pressed mustard oil with its distinctive pungent flavor and aroma. Known for its antibacterial and antifungal properties, our mustard oil is perfect for cooking, massage, and medicinal uses. Extracted from premium mustard seeds using traditional methods.",
      features: [
        "Cold Pressed",
        "Natural Antibacterial Properties",
        "Rich in Omega-3 & Omega-6",
        "Traditional Processing",
        "Pungent Flavor",
        "Multi-purpose Use"
      ],
      specifications: {
        "Free Fatty Acid": "Max 2.0%",
        "Moisture": "Max 0.2%",
        "Iodine Value": "92-125",
        "Saponification Value": "170-184",
        "Erucic Acid": "22-60%"
      }
    },
    "wheat": {
      name: "Wheat",
      category: "Agricultural Products",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800",
      description: "Premium quality wheat grains sourced from the best farms. Our wheat varieties are carefully selected for their protein content, gluten strength, and overall quality. Perfect for flour production, baking, and various food processing applications.",
      features: [
        "High Protein Content",
        "Superior Gluten Quality",
        "Uniform Grain Size",
        "Low Moisture Content",
        "Pest Free",
        "Quality Tested"
      ],
      specifications: {
        "Protein Content": "11-14%",
        "Moisture": "Max 14%",
        "Foreign Matter": "Max 2%",
        "Damaged Grains": "Max 6%",
        "Test Weight": "Min 78 kg/hl"
      }
    },
    "cotton-yarn": {
      name: "Cotton Yarn",
      category: "Textile Materials",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800",
      description: "High-quality cotton yarn spun from premium cotton fibers. Available in various counts and specifications to meet diverse textile manufacturing needs. Our cotton yarn offers excellent strength, uniformity, and dyeability for superior textile production.",
      features: [
        "100% Pure Cotton",
        "High Tensile Strength",
        "Uniform Thickness",
        "Excellent Dyeability",
        "Low Hairiness",
        "Multiple Counts Available"
      ],
      specifications: {
        "Count Range": "10s to 60s",
        "Strength": "18-22 cN/tex",
        "Evenness": "U% 8-12",
        "Hairiness": "3.5-5.5",
        "Moisture": "7-8.5%"
      }
    },
    "raw-cotton": {
      name: "Raw Cotton",
      category: "Natural Cotton",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
      description: "Premium raw cotton picked from the finest cotton plants. Our raw cotton is carefully processed to remove impurities while maintaining fiber quality. Ideal for spinning into yarn and various textile applications with consistent quality and purity.",
      features: [
        "Premium Grade Cotton",
        "Long Staple Length",
        "High Micronaire Value",
        "Minimal Contamination",
        "Bright White Color",
        "Machine Picked"
      ],
      specifications: {
        "Staple Length": "28-32 mm",
        "Micronaire": "3.5-4.9",
        "Strength": "28-32 g/tex",
        "Uniformity": "81-85%",
        "Moisture": "7.5-8.5%"
      }
    }
  };

  const product = productData[slug || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            
            {/* Product Details */}
            <div className="p-8">
              <div className="mb-4">
                <span className="text-sm text-emerald-600 font-medium">{product.category}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Button */}
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                Contact for Quote
              </Button>
            </div>
          </div>
          
          {/* Specifications */}
          <div className="border-t border-gray-200 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{key}</div>
                  <div className="text-emerald-600 font-semibold">{value as string}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
