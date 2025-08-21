import { TrendingUp, Users, Clock, Target } from "lucide-react";

export default function StatisticsSection() {
  const stats = [
    {
      icon: TrendingUp,
      percentage: "47%",
      description: "of Small & Midsize businesses are under-utilizing Social Media",
      subtext: "Missing out on growth opportunities",
      color: "text-red-500"
    },
    {
      icon: Users,
      percentage: "72%",
      description: "of U.S. adults use at least one social media platform daily",
      subtext: "Reach New Customers",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      percentage: "2.5 Hours",
      description: "The average American spends per day on social media in 2025",
      subtext: "Time to Win Attention and Drive Sales",
      color: "text-purple-600"
    },
    {
      icon: Target,
      percentage: "75%",
      description: "of businesses using effective social media generate more leads",
      subtext: "Grow Sales",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Social Media Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The statistics don't lie. Social media is where your customers are spending their time, 
            and where your competitors are either winning or losing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              
              <div className={`text-4xl font-bold mb-4 ${stat.color}`}>
                {stat.percentage}
              </div>
              
              <p className="text-gray-900 font-semibold mb-2 text-lg">
                {stat.description}
              </p>
              
              <p className={`text-sm font-medium ${stat.color}`}>
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              <strong>50%</strong> of SMEs investing in social media see positive ROI within 6 months. 
              The question isn't whether you should invest in social media – it's whether you can afford not to.
            </p>
            <p className="text-sm opacity-90">
              Source: We Are Social - 2025 Digital Report
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}