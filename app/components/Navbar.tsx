"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="navbar bg-base-100"
            variants={variants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    Valentine
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Navbar;