"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Magnetic from '../utils/Magnetic';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/subscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Something went wrong' });
      } else {
        setStatus({ type: 'success', message: data.message || 'Subscribed successfully!' });
        setEmail('');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="relative bg-background border-t border-foreground/10 pt-8 sm:pt-16 pb-8 md:pb-12 overflow-hidden">
      {/* Accent glow elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-4 sm:pb-16">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <span
              className="inline-flex items-center gap-0 group"
            >
              <Image
                src="/cynexlabs.svg"
                alt="CynexLabs logo"
                width={32}
                height={32}
                priority
                className="w-6 h-6 lg:w-8 lg:h-8 mr-0.5"
              />
              <span className="ml-2 text-2xl font-bold font-syne tracking-tight text-foreground group-hover:text-secondary transition-colors">
                CynexLabs
              </span>
            </span>

            <p className="text-black dark:text-gray-400 font-space-grotesk text-sm max-w-sm leading-relaxed">
              We help businesses grow online with beautiful websites, mobile apps, online stores, and smart digital tools. You focus on your business — we handle the rest.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-[10px] uppercase font-bold text-black dark:text-gray-500 border border-foreground/10 bg-foreground/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                No Hidden Fees
              </span>
              <span className="text-[10px] uppercase font-bold text-black dark:text-gray-500 border border-foreground/10 bg-foreground/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-btn rounded-full" />
                Results Guaranteed
              </span>
            </div>
          </div>

          {/* Services + Explore — side by side on mobile */}
          <div className="flex flex-row gap-8 md:contents">

            {/* Capabilities Col */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold font-syne uppercase tracking-wider text-foreground mb-6">
                Our Services
              </h4>
              <ul className="space-y-4 text-sm font-space-grotesk text-black dark:text-gray-400">
                <li>
                  <Link
                    href="/#services"
                    onClick={(e) => handleScroll(e, "/#services")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Websites & Web Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    onClick={(e) => handleScroll(e, "/#services")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    onClick={(e) => handleScroll(e, "/#services")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Online Stores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    onClick={(e) => handleScroll(e, "/#services")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Get Found on Google
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    onClick={(e) => handleScroll(e, "/#services")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Ongoing Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore Col */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold font-syne uppercase tracking-wider text-foreground mb-6">
                Explore
              </h4>
              <ul className="space-y-4 text-sm font-space-grotesk text-black dark:text-gray-400">
                <li>
                  <Link
                    href="/#results"
                    onClick={(e) => handleScroll(e, "/#results")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    onClick={(e) => handleScroll(e, "/#pricing")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Investment Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#reviews"
                    onClick={(e) => handleScroll(e, "/#reviews")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    onClick={(e) => handleScroll(e, "/#contact")}
                    className="hover:text-secondary hover:underline transition-colors"
                  >
                    Hire Us
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Stay Connected Col */}
          <div>
            <h4 className="text-sm font-semibold font-syne uppercase tracking-wider text-foreground mb-6">
              Stay Connected
            </h4>
            <p className="text-black dark:text-gray-400 text-xs font-space-grotesk leading-relaxed mb-4">
              Get practical tips on growing your business online, straight to your inbox. No spam, ever.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                placeholder="architect@company.com"
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-xs text-foreground placeholder:text-black dark:placeholder:text-gray-600 focus:outline-none focus:border-secondary transition-all disabled:opacity-50"
              />
              <Magnetic>
                <button type="submit" disabled={loading} className="w-full btn-primary text-xs py-3 font-bold rounded-xl text-center shadow-none hover:shadow-[0_0_10px_#9cfeca] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </Magnetic>
              {status.message && (
                <p className={`text-[10px] mt-1 ${status.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-space-grotesk text-black dark:text-gray-500">
          <p>
            © {new Date().getFullYear()} CynexLabs. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-foreground transition-colors">Security Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
