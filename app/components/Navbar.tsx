'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        open: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 }
    };

    return (
        <motion.nav 
            className="navbar bg-base-100 fixed top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <motion.ul
                        tabIndex={0}
                        variants={menuVariants}
                        animate={isOpen ? 'open' : 'closed'}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </motion.ul>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl">Your Logo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link href="/">Home</Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link href="/about">About</Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link href="/services">Services</Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link href="/contact">Contact</Link>
                        </motion.div>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/get-started" className="btn btn-primary">Get Started</Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;