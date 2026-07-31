import React from 'react';

const SERVICES = [
  {
    title: "Websites & Web Apps",
    description: "Get a beautiful, professional website that works perfectly on every device. We design it to impress visitors and turn them into paying customers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
    )
  },
  {
    title: "Mobile Apps for Android & iPhone",
    description: "Give your customers a great experience on their phone. We build smooth, easy-to-use apps that people actually enjoy opening every day.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
    )
  },
  {
    title: "Desktop Software for Your Team",
    description: "Need a custom tool your team uses every day on their computer? We build fast, reliable desktop software that fits perfectly into how you work.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect width="18" height="12" x="3" y="4" rx="2" ry="2" /><line x1="2" x2="22" y1="20" y2="20" /><line x1="5" x2="19" y1="16" y2="16" /></svg>
    )
  },
  {
    title: "Connect All Your Business Tools",
    description: "Do you use different apps that don't talk to each other? We connect them all so your business runs automatically, saving you hours of manual work every week.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><line x1="10" x2="14" y1="6" y2="18" /></svg>
    )
  },
  {
    title: "Accept Payments Online, Easily",
    description: "We set up secure online payments for your business so your customers can pay you from anywhere in the world, using any card or mobile wallet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
    )
  },
  {
    title: "Online Stores That Sell",
    description: "Launch your own online shop and start selling 24/7. We build stores that are easy for your customers to browse, and even easier for you to manage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
    )
  },
  {
    title: "Designs That Make People Stay",
    description: "First impressions matter. We make sure your digital presence looks so good that visitors trust you immediately and want to work with you.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="M3 9h18" /></svg>
    )
  },
  {
    title: "Get Found on Google",
    description: "When someone searches for what you offer, your business should show up first. We make that happen — bringing you more visitors without you spending on ads.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" /></svg>
    )
  },
  {
    title: "Always Here When You Need Us",
    description: "We don't disappear after launch. Our team is always available to fix issues, make updates, and keep everything running perfectly — day or night.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-12 sm:pt-16 relative overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">What We Do For You</h2>
          <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6">
            Everything Your Business Needs <span className="text-secondary">Online</span>
          </h3>
          <p className="text-black dark:text-gray-400 max-w-2xl mx-auto text-lg font-space-grotesk">
            From getting your first website live to growing a full digital business — we are the only team you will ever need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:bg-foreground/10 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20 shadow-[0_0_10px_rgba(156,254,202,0.1)] group-hover:shadow-[0_0_15px_rgba(156,254,202,0.3)] transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-base font-semibold font-syne mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h4>
                <p className="text-black dark:text-gray-400 font-space-grotesk leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
