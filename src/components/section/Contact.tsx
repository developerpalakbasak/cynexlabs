"use client";
import React, { useState, useEffect } from 'react';

const CONTACT_INFO = [
  {
    label: "Drop Us an Email",
    value: "contact.cynexlabs@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    )
  },
  {
    label: "We Reply Within",
    value: "24 Hours, Guaranteed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    )
  },
  {
    label: "We're Available",
    value: "7 Days a Week",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  }
];

const ContactFormInner = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "Custom Software Development",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleSelectPlan = (e: CustomEvent) => {
      setSelectedPlan(e.detail);
    };

    window.addEventListener('selectPlan', handleSelectPlan as EventListener);
    
    return () => {
      window.removeEventListener('selectPlan', handleSelectPlan as EventListener);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          plan: selectedPlan
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "Custom Software Development",
        message: ""
      });
      setSelectedPlan("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative bg-foreground/5 border border-secondary/10 p-6 md:p-10 rounded-2xl md:rounded-[32px] backdrop-blur-xl shadow-2xl">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-black dark:text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-foreground placeholder:text-black dark:placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-black dark:text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-foreground placeholder:text-black dark:placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-black dark:text-gray-400 uppercase tracking-widest ml-1">Phone Number (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-foreground placeholder:text-black dark:placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-black dark:text-gray-400 uppercase tracking-widest ml-1">Interested Plan</label>
            <select 
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-foreground focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-background text-foreground">Not Sure Yet</option>
              <option value="Starter" className="bg-background text-foreground">Starter ($799)</option>
              <option value="Growth" className="bg-background text-foreground">Growth ($2,499)</option>
              <option value="Enterprise" className="bg-background text-foreground">Enterprise (Custom)</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-black dark:text-gray-400 uppercase tracking-widest ml-1">Project Type</label>
          <select 
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-foreground focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all appearance-none cursor-pointer"
          >
            <option value="Custom Software Development" className="bg-background text-foreground">Custom Software Development</option>
            <option value="Mobile App Architecture" className="bg-background text-foreground">Mobile App Architecture</option>
            <option value="SEO & Marketing Domination" className="bg-background text-foreground">SEO & Marketing Domination</option>
            <option value="E-commerce Transformation" className="bg-background text-foreground">E-commerce Transformation</option>
            <option value="Maintenance & Security" className="bg-background text-foreground">Maintenance & Security</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-black dark:text-gray-400 uppercase tracking-widest ml-1">How can we help?</label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your goals and technical requirements..."
            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-foreground placeholder:text-black dark:placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all resize-y min-h-[120px] max-h-[400px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-foreground/5 [&::-webkit-scrollbar-thumb]:bg-secondary/30 hover:[&::-webkit-scrollbar-thumb]:bg-secondary/50 [&::-webkit-scrollbar-thumb]:rounded-full"
          ></textarea>
        </div>

        {status === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm">
            {errorMessage}
          </div>
        )}

        {status === "success" && (
          <div className="p-4 bg-secondary/10 border border-secondary/50 rounded-xl text-secondary text-sm">
            Message sent successfully! We'll be in touch shortly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full py-5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(156,254,202,0.1)] hover:shadow-[0_0_40px_rgba(156,254,202,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send My Message — It's Free"
          )}
        </button>

        <p className="text-center text-xs text-black dark:text-gray-500 font-space-grotesk mt-6">
          🔒 Your information is private and will never be shared.
        </p>
      </div>
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pb-6 sm:pb-24 pt-12 sm:pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Let's Connect</h2>
            <h3 className="text-2xl md:text-3xl font-medium font-syne mb-8 leading-tight">
              We're Here to Help <br />
              <span className="text-secondary">Your Vision Grow</span>
            </h3>
            <p className="text-black dark:text-gray-400 text-lg font-space-grotesk mb-12 max-w-lg leading-relaxed">
              Have a question or a project in mind? We'd love to hear from you. Send us a message and let's start a conversation about how we can support your journey.
            </p>

            <div className="space-y-8">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-[0_0_10px_rgba(156,254,202,0.1)] group-hover:shadow-[0_0_20px_rgba(156,254,202,0.3)] transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black dark:text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-xl font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            {/* Decorative glow behind form */}
            <div className="absolute -inset-4 bg-secondary/5 rounded-[40px] blur-3xl pointer-events-none" />

            <ContactFormInner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
