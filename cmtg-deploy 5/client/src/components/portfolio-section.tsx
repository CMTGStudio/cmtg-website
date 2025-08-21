import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Play } from "lucide-react";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Fashion Brand Transformation",
      description: "Complete social media makeover resulting in 300% engagement increase and 150% sales growth",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Video Editing", "AI Enhancement", "Brand Strategy"],
      metrics: { engagement: "+300%", sales: "+150%" }
    },
    {
      title: "Tech Startup Viral Campaign",
      description: "AI-optimized content strategy that generated 1M+ impressions and 50K new followers",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Motion Graphics", "AI Strategy", "Viral Content"],
      metrics: { impressions: "1M+", followers: "+50K" }
    },
    {
      title: "Restaurant Chain Rebrand",
      description: "Hollywood-quality food photography and video content that increased foot traffic by 75%",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Food Photography", "Video Production", "Local Marketing"],
      metrics: { traffic: "+75%", orders: "+125%" }
    },
    {
      title: "E-commerce Success Story",
      description: "AI-enhanced product showcases that boosted conversion rates by 250% and reduced ad spend",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["E-commerce", "AI Optimization", "Product Videos"],
      metrics: { conversion: "+250%", adSpend: "-40%" }
    },
    {
      title: "Nonprofit Awareness Campaign",
      description: "Emotional storytelling that reached 5M+ people globally and increased donations by 400%",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Storytelling", "Social Impact", "Global Reach"],
      metrics: { reach: "5M+", donations: "+400%" }
    },
    {
      title: "Luxury Brand Elevation",
      description: "Sophisticated content strategy that elevated brand perception and increased average order value",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      tags: ["Luxury Branding", "Premium Content", "Brand Elevation"],
      metrics: { aov: "+180%", perception: "+95%" }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--cmtg-navy))] mb-4">
            Before & After Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed social media presence for brands across industries with 
            our Hollywood magic + AI efficiency approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.title} - showcasing professional social media content transformation`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[hsl(var(--cmtg-coral))] text-white border-0">
                    Case Study
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--cmtg-navy))] mb-2 group-hover:text-[hsl(var(--cmtg-coral))] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  {Object.entries(item.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-[hsl(var(--cmtg-coral))]">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center text-[hsl(var(--cmtg-blue))] text-sm font-medium group-hover:text-[hsl(var(--cmtg-coral))] transition-colors cursor-pointer">
                  View Full Case Study
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[hsl(var(--cmtg-navy))] to-[hsl(var(--cmtg-blue))] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to See Your Transformation?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join the brands that have already discovered the power of Hollywood magic combined with AI efficiency. 
              Your before & after story could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[hsl(var(--cmtg-coral))] text-white px-8 py-3 rounded-full font-semibold hover:bg-[hsl(var(--cmtg-coral-light))] transition-colors">
                Start My Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[hsl(var(--cmtg-navy))] transition-colors">
                View More Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
