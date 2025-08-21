import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckCircle, Star, Clapperboard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { trackEvent } from "@/lib/analytics";
import { trackMetaEvent } from "@/lib/meta-pixel";

export default function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  const submitLeadMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
      
      // Track conversion event for analytics
      trackEvent('lead_submission', 'lead_generation', 'demo_request');
      trackMetaEvent('Lead', {
        content_name: 'Free Demo Request',
        content_category: 'Lead Generation'
      });
      
      toast({
        title: "Success!",
        description: "We'll be in touch within 24 hours with your custom strategy.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Something went wrong: ${error.message}. Please try again.`,
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertLead) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const result = await response.json();
      
      // Success handling
      setIsSubmitted(true);
      trackEvent('lead_submission', 'lead_generation', 'demo_request');
      trackMetaEvent('Lead', {
        content_name: 'Free Demo Request',
        content_category: 'Lead Generation'
      });
      
      toast({
        title: "Success!",
        description: "We'll be in touch within 24 hours with your custom strategy.",
      });
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast({
        title: "Error", 
        description: `Something went wrong: ${errorMessage}. Please try again.`,
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-capture" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="text-center py-16">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You! We'll Be In Touch Soon
              </h3>
              <p className="text-gray-600 text-lg">
                We'll review your information and get back to you within 24 hours with next steps.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-capture" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-blue-200 shadow-lg">
          <CardHeader className="text-center pb-8 bg-blue-50">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Demo
            </CardTitle>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See exactly how Hollywood-quality content combined with AI optimization can transform your social media ROI. 
              Get your complimentary demo and discover the custom approach that will skyrocket your engagement.
            </p>
            <div className="flex items-center justify-center gap-8 mt-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" aria-hidden="true" fill="currentColor" />
                <span>5.0 average rating</span>
              </div>
              <div className="border-l border-slate-300 h-4"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>50+ brands transformed</span>
              </div>
              <div className="border-l border-slate-300 h-4"></div>
              <div className="flex items-center gap-2">
                <Clapperboard className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>Hollywood-trained team</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                From Demo to Transformation in 14 Days
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Your plan, your edits, your launch - done.
              </p>
            </div>
            

            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            {...field} 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Smith" 
                            {...field} 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Business Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="john@company.com" 
                          {...field} 
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company" 
                            {...field} 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+1 (555) 123-4567" 
                            {...field} 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4 space-y-3">
                  <Button 
                    type="submit" 
                    className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent font-extrabold">
                      Get My Free Demo
                    </span>
                  </Button>
                </div>
                
                <div className="text-center mt-4 space-y-2">
                  <p className="text-sm text-red-600 font-medium">
                    Only 5 demos available this week
                  </p>
                  <p className="text-sm text-gray-500">
                    No spam, ever. We respect your privacy and will only send you valuable insights.
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}