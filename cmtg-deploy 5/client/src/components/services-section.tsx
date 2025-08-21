import { Video, Palette, Bot, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: "Hollywood Video Editing",
      description: "Professional video editing with cinematic quality from talent with Hollywood backgrounds.",
      features: ["Cinematic storytelling", "Color grading & VFX", "Motion graphics", "Professional transitions"]
    },
    {
      icon: Bot,
      title: "AI-Enhanced Content",
      description: "Leverage cutting-edge AI to streamline content creation and optimize performance.",
      features: ["Automated editing workflows", "Smart thumbnail generation", "Performance optimization", "Content scheduling"]
    },
    {
      icon: Palette,
      title: "Creative Graphic Design",
      description: "Stunning visual designs that capture attention and communicate your brand message.",
      features: ["Brand identity design", "Social media graphics", "Custom illustrations", "Template creation"]
    },
    {
      icon: BarChart3,
      title: "Strategic Planning",
      description: "Data-driven content strategies that align with your business goals and audience needs.",
      features: ["Content calendars", "Analytics & insights", "Platform optimization", "ROI tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Clio Award Winners • 98.3% Customer Satisfaction
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CMTG Social Complete
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We turn your social media into a real competitive advantage. 
            Combining 25 years of Hollywood experience with AI innovation to create content that captivates and converts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
