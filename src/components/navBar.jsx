"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { topVariants, middleVariants, bottomVariants, listVariants, listItemVariants } from "./variants";

const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Portfolio", url: "/portfolio" },
    { title: "Contact", url: "/contact" },
];
const socials = [
    { title: "github", url: "https://www.github.com/kandapagari" },
    { title: "linkedin", url: "https://www.linkedin.com/in/kandapagari" },
    { title: "twitter", url: "https://www.twitter.com/zephyr_347" },
    { title: "instagram", url: "https://www.instagram.com/abhimanyu_pavan" },
    { title: "facebook", url: "https://www.facebook.com/abhi619pavan" },
];
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link
                    href="/"
                    className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">
                        Kandapagari
                    </span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
                        .ai
                    </span>
                </Link>
            </div>
            {/* SOCIALS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {socials.map(social => (
                    <Link href={social.url} key={social.title} target="_blank">
                        <Image src={`/${social.title}.png`} alt={social.title} width={24} height={24} />
                    </Link>
                ))}
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={(() => setOpen(prev => !prev))}>
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div
                        variants={middleVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                        {links.map(link => (
                            <motion.div
                                variants={listItemVariants}
                                key={link.title}>
                                <Link href={link.url}> {link.title} </Link>
                            </motion.div>

                        ))}
                    </motion.div>)}
            </div>
        </div >
    );
}

export default Navbar;
