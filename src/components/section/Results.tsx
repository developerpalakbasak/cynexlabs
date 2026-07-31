"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const METRICS = [
    { label: "Happy Clients", value: "150+", description: "Businesses just like yours that trusted us and saw real results." },
    { label: "Projects Delivered", value: "200+", description: "Websites, apps and stores launched on time and on budget." },
    { label: "Client Satisfaction", value: "98%", description: "Our clients come back to us because we genuinely care about their success." },
    { label: "Always Available", value: "24/7", description: "We are here whenever something needs attention. No waiting, no excuses." }
];

const CASE_STUDIES = [
    {
        title: "Local Restaurant Chain Goes Digital",
        category: "Restaurant & Food",
        outcome: "3x more table bookings in 60 days",
        description: "A family-run restaurant group wanted to accept online orders and bookings. We built them a custom platform and within 2 months they tripled their reservations.",
        tags: ["Online Ordering", "Table Booking", "Menu Management", "Google SEO"]
    },
    {
        title: "Fashion Brand Launches Online Store",
        category: "E-commerce & Retail",
        outcome: "$80K in sales in the first month",
        description: "A clothing brand that only sold in-person came to us wanting to sell online. We designed their store, set up payments, and launched it in 3 weeks.",
        tags: ["Online Store", "Payment Setup", "Mobile Friendly", "Inventory"]
    },
    {
        title: "Real Estate Agency Gets More Leads",
        category: "Real Estate & Property",
        outcome: "5x more inquiries from Google",
        description: "A local property agency wasn't showing up on Google. We redesigned their website and optimized it for search. Inquiries jumped within the first month.",
        tags: ["Website Redesign", "Google SEO", "Lead Forms", "Property Listings"]
    }
];

const AnimatedCounter = ({ value, delay }: { value: string, delay: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <span ref={ref} className="inline-flex overflow-hidden py-1">
            {value.split('').map((char, i) => {
                const isEven = i % 2 === 0;
                const initialY = isEven ? 40 : -40;

                return (
                    <motion.span
                        key={i}
                        initial={{ y: initialY, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: initialY, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: delay + (i * 0.08),
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        style={{ display: 'inline-block' }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </span>
    );
};

const Results: React.FC = () => {
    return (
        <section id="results" className="py-20 relative overflow-hidden bg-background/40">
            {/* Ambient background glow */}
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Real Results, Real Businesses</h2>
                    <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6">
                        Numbers That <span className="text-secondary">Speak for Themselves</span>
                    </h3>
                    <p className="text-black dark:text-gray-400 max-w-2xl mx-auto text-lg font-space-grotesk">
                        Every project we deliver is measured by one thing — how much it moves the needle for your business.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32">
                    {METRICS.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className=" p-2 md:p-8 rounded-2xl border border-foreground/5 bg-foreground/5 backdrop-blur-sm hover:border-secondary/30 transition-colors shadow-lg"
                        >
                            <h4 className="text-2xl md:text-3xl font-semibold font-syne text-secondary mb-2 drop-shadow-[0_0_15px_rgba(156,254,202,0.15)] flex justify-center">
                                <AnimatedCounter value={metric.value} delay={index * 0.15 + 0.3} />
                            </h4>
                            <p className="text-foreground font-bold mb-2 uppercase tracking-widest text-xs">{metric.label}</p>
                            <p className="text-black dark:text-gray-400 text-sm font-space-grotesk ">{metric.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Real Success Stories</h2>
                        <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6 leading-tight">
                            Businesses Like Yours <br />
                            <span className="text-secondary">That Grew With Us.</span>
                        </h3>
                    </motion.div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {CASE_STUDIES.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative flex flex-col p-8 rounded-3xl border border-foreground/10 bg-foreground/5 transition-all duration-500 hover:-translate-y-2 hover:bg-foreground/10 hover:border-secondary/30 shadow-2xl overflow-hidden"
                        >
                            {/* Accent line glow on card hover */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="mb-6">
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                                    {study.category}
                                </span>
                            </div>
                            <h4 className="text-lg font-semibold font-syne text-foreground mb-3 group-hover:text-secondary transition-colors">
                                {study.title}
                            </h4>
                            <p className="text-base md:text-lg font-medium text-black dark:text-gray-200 mb-4 font-space-grotesk italic">
                                "{study.outcome}"
                            </p>
                            <p className="text-black dark:text-gray-400 font-space-grotesk mb-8 flex-1 leading-relaxed">
                                {study.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-foreground/5">
                                {study.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase font-bold text-black dark:text-gray-500 border border-foreground/10 bg-foreground/5 px-2.5 py-1 rounded transition-colors group-hover:border-secondary/20 group-hover:text-black dark:group-hover:text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
