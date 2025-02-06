"use client";
import ChangeTheme from "./ChangeTheme";
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
            <div className="grid grid-flow-col grid-rows-1 gap-1">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/about" className="font-bold">HOME</Link>
                    </li>
                    <li>
                    <Link href="/about" className="font-bold">IMAGE</Link>
                    </li>
                    <li>
                    <Link href="/about" className="font-bold">ME</Link>
                    </li>
                    <li>
                    <ChangeTheme />
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Navbar;