"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const NAV_LINKS = [
    { label: "Services", href: "/#services" },
    { label: "Results", href: "/#results" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
];

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMenuOpen(false);
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
        <>
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-foreground/10 dark:bg-background/30 border-b border-foreground/20 dark:border-foreground/10">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-4">
                    {/* Logo */}
                    <Link href="/" aria-label="Go to homepage" className="flex items-center gap-0 group">
                        <Image
                            src="/cynexlabs.svg"
                            alt="CynexLabs logo"
                            width={32}
                            height={32}
                            priority
                            className="mr-[-2px]"
                        />
                        <span className="ml-1 text-lg font-semibold font-syne tracking-tight text-foreground group-hover:text-secondary transition-colors">
                            ynexLabs
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-16">
                        <ul className="flex items-center md:gap-4">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        onClick={(e) => handleScroll(e, href)}
                                        className="text-sm font-medium transition-colors hover:text-secondary hover:underline"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* <Link
                            href="/login"
                            className="relative rounded-full px-6 py-2 text-sm font-semibold text-foreground transition bg-black dark:bg-gray-700 border border-secondary shadow-[0_0_2px_#9cfeca] hover:shadow-[0_0_6px_#9cfeca] hover:brightness-110"
                        >
                            Login
                        </Link> */}
                    </div>

                    {/* Actions Container */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle Button */}
                        {mounted ? (
                            <button
                                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                                className="h-8 w-8 rounded-full flex items-center justify-center transition-colors hover:bg-background/10 dark:hover:bg-foreground/10"
                                aria-label="Toggle Theme"
                            >
                                {resolvedTheme === "dark" ? (
                                    <FaSun className="text-yellow-400" size={18} />
                                ) : (
                                    <FaMoon className="text-black dark:text-slate-700" size={18} />
                                )}
                            </button>
                        ) : <div className="h-8 w-8"></div>}

                        {/* Mobile Hamburger Button */}
                        <button
                            id="mobile-menu-toggle"
                            aria-label="Toggle mobile menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
                        >
                            <span
                                className={`block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "visible" : "invisible"
                    }`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className={`absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Slide-down drawer */}
                <div
                    className={`absolute top-0 left-0 w-full bg-background/90 border-b border-foreground/10 pt-20 pb-8 px-6 flex flex-col gap-6 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <ul className="flex flex-col gap-2">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    onClick={(e) => handleScroll(e, href)}
                                    className="block py-3 px-4 rounded-xl text-base font-medium text-black dark:text-gray-200 hover:text-secondary hover:bg-foreground/5 transition-colors"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* <Link
                        href="/login"
                        onClick={() => setMenuOpen(false)}
                        className="w-full text-center rounded-full px-6 py-3 text-sm font-semibold text-foreground bg-black dark:bg-gray-700 border border-secondary shadow-[0_0_2px_#9cfeca] hover:shadow-[0_0_6px_#9cfeca] hover:brightness-110 transition"
                    >
                        Login
                    </Link> */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
