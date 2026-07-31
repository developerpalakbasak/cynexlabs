"use client";
import React from 'react';
import Link from 'next/link';

const PLANS = [
    {
        name: "Starter",
        price: "799",
        maintenanceFee: "49",
        pages: "Up to 3 Pages",
        description: "Perfect if you're just getting started and need a professional online presence that gets you noticed.",
        features: [
            "Up to 3 Custom Pages",
            "A Beautiful, Custom Website",
            "Works on All Phones & Tablets",
            "Show Up on Google (Basic SEO)",
            "Contact Form & Social Links",
        ],
        buttonText: "Get Started",
        recommended: false
    },
    {
        name: "Growth",
        price: "2,499",
        maintenanceFee: "149",
        pages: "Up to 8 Pages",
        description: "Best for growing businesses that want to attract more customers, sell online, and run smoother operations.",
        features: [
            "Up to 8 Custom Pages",
            "Website + Mobile App",
            "Online Store or Booking System",
            "Get Found on Google (Full SEO)",
            "Accept Payments Online",
            "Priority Support (Up to 3 Months)",
            "Monthly Performance Report (Up to 3 Months)"
        ],
        buttonText: "Start Growing",
        recommended: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        maintenanceFee: null,
        pages: "Unlimited Pages",
        description: "For established businesses that need a complete digital overhaul or a powerful custom system built from scratch.",
        features: [
            "Unlimited Pages & Sections",
            "Full Custom Software Solution",
            "Web + Mobile + Desktop Apps",
            "Advanced Google SEO Strategy",
            "Dedicated Account Manager",
            "Lifetime Ongoing Support",
            "Scales As Your Business Grows"
        ],
        buttonText: "Let's Talk",
        recommended: false
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className=" pt-12 sm:pt-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Simple, Honest Pricing</h2>
                    <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6">
                        You Know Exactly <br />
                        <span className="text-secondary">What You're Getting</span>
                    </h3>
                    <p className="text-black dark:text-gray-400 max-w-2xl mx-auto text-lg font-space-grotesk">
                        No hidden fees. No confusing packages. Just clear, fair pricing that grows with your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {PLANS.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative flex flex-col p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                                plan.recommended 
                                ? "bg-foreground/10 border-secondary/50 shadow-[0_0_40px_rgba(156,254,202,0.1)] z-20" 
                                : "bg-foreground/5 border-foreground/10 hover:border-foreground/20 z-10"
                            }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-black text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-[0_0_20px_rgba(156,254,202,0.4)]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <h4 className="text-base font-semibold font-syne text-foreground">{plan.name}</h4>
                                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary">
                                        {plan.pages}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-foreground">
                                        {plan.price !== "Custom" ? `$${plan.price}` : "Custom"}
                                    </span>
                                    {plan.price !== "Custom" && <span className="text-black dark:text-gray-400">/project</span>}
                                </div>
                                {plan.maintenanceFee && (
                                    <p className="mt-2 text-xs text-black dark:text-gray-500 font-space-grotesk">
                                        + <span className="text-black dark:text-gray-400 font-semibold">${plan.maintenanceFee}/mo</span> optional maintenance
                                    </p>
                                )}
                                {plan.price === "Custom" && (
                                    <p className="mt-2 text-xs text-black dark:text-gray-500 font-space-grotesk">
                                        Maintenance fee <span className="text-black dark:text-gray-400 font-semibold">negotiated</span> per scope
                                    </p>
                                )}
                                <p className="mt-4 text-black dark:text-gray-400 font-space-grotesk">{plan.description}</p>
                            </div>

                            <ul className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-black dark:text-gray-300 font-space-grotesk">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 opacity-70 ${plan.recommended ? "text-secondary" : ""}`}>
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link 
                                href="#contact"
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent('selectPlan', { detail: plan.name }));
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                                plan.recommended 
                                ? "rounded-xl px-6 py-3 font-semibold text-white transition bg-btn shadow-[0_0_2px_#9cfeca] hover:shadow-[0_0_6px_#9cfeca] hover:brightness-110" 
                                : "bg-foreground/10 text-foreground hover:bg-foreground/20 border border-foreground/10"
                            }`}>
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-5xl mx-auto bg-foreground/5 border border-foreground/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex-1 text-center md:text-left relative z-10">
                        <h4 className="text-lg md:text-xl font-syne font-bold text-foreground mb-2">Our Development Promise</h4>
                        <p className="text-black dark:text-gray-400 font-space-grotesk text-sm max-w-md mx-auto md:mx-0">
                            We want you to be 100% satisfied. That's why every project comes with standard guarantees to give you peace of mind.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                        <div className="flex items-center gap-4 bg-foreground/5 rounded-2xl px-5 py-4 border border-foreground/5 w-full sm:w-auto transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold border border-secondary/30">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-secondary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                                </svg>
                            </div>
                            <div className="text-left">
                                <span className="block text-sm font-bold text-foreground">3 Months</span>
                                <span className="block text-xs text-black dark:text-gray-400">Free Support</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 bg-foreground/5 rounded-2xl px-5 py-4 border border-foreground/5 w-full sm:w-auto transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold border border-secondary/30">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-secondary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 2v6h6"/>
                                </svg>
                            </div>
                            <div className="text-left">
                                <span className="block text-sm font-bold text-foreground">Unlimited</span>
                                <span className="block text-xs text-black dark:text-gray-400">Revisions During Dev</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
