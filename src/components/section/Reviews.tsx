import React from 'react';

const REVIEWS = [
    {
        name: "Sarah Mitchell",
        role: "Owner, Bloom Boutique",
        content: "I had zero online presence before CynexLabs. Within 6 weeks, I had a gorgeous website and an online store. My sales have been incredible ever since. Best investment I've made for my business.",
        rating: 5,
        avatar: "SM"
    },
    {
        name: "James Okoro",
        role: "Director, Okoro Real Estate",
        content: "We were invisible on Google. CynexLabs fixed that completely. Now we get calls from people who found us online every single day. I wish I had done this years ago.",
        rating: 5,
        avatar: "JO"
    },
    {
        name: "Priya Nair",
        role: "Founder, Spice & Co. Restaurant",
        content: "I needed an app for online orders and table bookings. The team delivered something way better than I imagined, and my customers absolutely love it. Our weekend bookings are always full now.",
        rating: 5,
        avatar: "PN"
    },
    {
        name: "Marcus Webb",
        role: "CEO, Webb Logistics",
        content: "Managing our deliveries used to be a nightmare of spreadsheets. CynexLabs built us a custom tracking tool and now everything runs on its own. Our team saves hours every day.",
        rating: 5,
        avatar: "MW"
    },
    {
        name: "Layla Hassan",
        role: "Founder, LH Fashion Brand",
        content: "I was skeptical about selling clothes online but they made it so easy. My store looks amazing, payments work perfectly, and I'm getting orders from customers I have never even met in person.",
        rating: 5,
        avatar: "LH"
    },
    {
        name: "David Chen",
        role: "Owner, Chen's Dental Clinic",
        content: "Our old website was embarrassing. CynexLabs gave us a professional online presence, set up an appointment booking system, and now patients can find and book us easily. Truly life-changing.",
        rating: 5,
        avatar: "DC"
    }
];

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="pt-12 sm:pt-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Client Stories</h2>
                    <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6">
                        Real People. <span className="text-secondary">Real Results.</span>
                    </h3>
                    <p className="text-black dark:text-gray-400 max-w-2xl mx-auto text-lg font-space-grotesk">
                        Don't just take our word for it. Here's what business owners across different industries say about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REVIEWS.map((review, index) => (
                        <div 
                            key={index}
                            className="group relative p-8 rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:bg-foreground/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold border border-secondary/30">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold font-syne text-foreground">{review.name}</h4>
                                    <p className="text-sm text-black dark:text-gray-500">{review.role}</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#9cfeca" stroke="#9cfeca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                ))}
                            </div>

                            <p className="text-black dark:text-gray-300 font-space-grotesk leading-relaxed italic">
                                "{review.content}"
                            </p>
                            
                            {/* Decorative quotes */}
                            <div className="absolute top-6 right-8 text-secondary/10 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.466 15 15.521 15C16.576 15 17.025 16.896 17.025 18L17.025 21H14.017ZM6.017 21L6.017 18C6.017 16.896 6.466 15 7.521 15C8.576 15 9.025 16.896 9.025 18L9.025 21H6.017ZM21 3V10H16.141C15.424 10 14.773 10.378 14.414 11H12.586C12.227 10.378 11.576 10 10.859 10H6V3H21ZM16.141 8H19V5H8V8H10.859C11.576 8 12.227 8.378 12.586 9H14.414C14.773 8.378 15.424 8 16.141 8Z"/></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
