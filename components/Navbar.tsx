"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FilledButton from "./FilledButtons";
import MobileNavbar from "./MobileNavbar";
import { NavbarProps, NavLinkProps } from "@/types";

const Navbar: React.FC<NavbarProps> = ({
    logoSrc = '/logo.png',
    primaryColor = "#683695",
    secondaryColor = "#6AA4D9",
    navLinks = [
        { name: "HOME", path: "/" },
        { name: "SERVICES", path: "/services" },
        { name: "ABOUT", path: "/about" },
    ],
}) => {

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full p-5 bg-transparent z-50"
            style={{ willChange: "opacity" }}
        >
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            y: -5,
                            transition: { type: "spring", stiffness: 1000, damping: 20 },
                        }}
                        whileTap={{ scale: 1.0 }}
                    >
                        <Image
                            src={logoSrc}
                            alt="Company Logo"
                            width={80}
                            height={40}
                            priority
                            className="object-contain"
                        />
                    </motion.div>
                </Link>

                {/* Navigation Links */}
                <div className="space-x-8 hidden md:flex">
                    {navLinks.map((link, index) => (
                        <NavLink key={index} link={link} primaryColor={primaryColor} secondaryColor={secondaryColor} />
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex">
                    <FilledButton text="Contact Us" link="/contact" />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </motion.nav>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ link, primaryColor, secondaryColor }) => (
    <Link href={link.path} aria-label={link.name}>
        <motion.span
            whileHover={{
                scale: 1.1,
                color: primaryColor,
                y: -3,
                transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold"
            style={{ color: secondaryColor }}
        >
            {link.name}
        </motion.span>
    </Link>
);

export default Navbar;
