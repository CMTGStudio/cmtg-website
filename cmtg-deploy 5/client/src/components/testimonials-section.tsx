import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechFlow Solutions",
      avatar: "SM",
      rating: 5,
      quote: "CMTG transformed our social media presence completely. The Hollywood-quality editing combined with their AI optimization increased our engagement by 400%. Our campaigns now look like they belong in major productions.",
      results: "400% engagement increase"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director, Luxury Brands Co.",
      avatar: "MR",
      rating: 5,
      quote: "The creative magic they bring is unmatched. Our campaigns now look like they belong in Hollywood productions, but at a fraction of the cost. The ROI has been incredible - we're seeing 3x more qualified leads.",
      results: "3x more qualified leads"
    },
    {
      name: "Emily Chen",
      role: "Founder, Sustainable Fashion Brand",
      avatar: "EC",
      rating: 5,
      quote: "Their AI-enhanced workflow is incredible. We get professional results in half the time, and their team truly understands our brand vision. Sales have increased 250% since we started working with CMTG.",
      results: "250% sales increase"
    },
    {
      name: "David Thompson",
      role: "Restaurant Chain Owner",
      avatar: "DT",
      rating: 5,
      quote: "The before and after transformation was like night and day. Our social media went from generic posts to scroll-stopping content that drives real foot traffic. Revenue is up 75% across all locations.",
      results: "75% revenue increase"
    },
    {
      name: "Lisa Anderson",
      role: "E-commerce Director",
      avatar: "LA",
      rating: 5,
      quote: "Most of all, their content sets us miles above our competitors. Customers, new and old, always comment on how professional our company looks and sounds. Conversion rates improved by 180%.",
      results: "180% conversion improvement"
    },
    {
      name: "James Wilson",
      role: "Nonprofit Executive Director",
      avatar: "JW",
      rating: 5,
      quote: "A wholly professional and efficient service in every respect. First class. Their storytelling approach helped us reach 5M+ people globally and increase donations by 300%. Truly transformational.",
      results: "5M+ global reach"
    }
  ];

  const brandLogos = [
    "TECHFLOW", "LUXURY CO", "GREENWAY", "INNOVATE", "STYLE+", "PREMIUM", "CREATIVE LABS", "FUTURE BRANDS"
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--cmtg-navy))] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Real results from real businesses who've experienced the CMTG transformation
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[hsl(var(--cmtg-gold))] fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-[hsl(var(--cmtg-coral))]">98.3%</div>
            <div className="text-gray-600">Customer Satisfaction Rating</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-[hsl(var(--cmtg-gold))] mr-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="bg-[hsl(var(--cmtg-coral))]/10 text-[hsl(var(--cmtg-coral))] px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.results}
                  </div>
                </div>
                
                <Quote className="w-8 h-8 text-[hsl(var(--cmtg-coral))]/20 mb-4" />
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarFallback className="bg-[hsl(var(--cmtg-coral))] text-white font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-[hsl(var(--cmtg-navy))]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[hsl(var(--cmtg-navy))] mb-8">
            Trusted by Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brandLogos.map((logo, index) => (
              <div key={index} className="text-lg font-bold text-gray-400 hover:text-[hsl(var(--cmtg-coral))] transition-colors cursor-pointer">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--cmtg-coral))] mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--cmtg-coral))] mb-2">98.3%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--cmtg-coral))] mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--cmtg-coral))] mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
