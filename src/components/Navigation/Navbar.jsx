import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";


const defaultItems = ["about", "projects", "certificates"];

const Navbar = ({ items = defaultItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul className="flex gap-8 text-sm text-gray-600">
          {items.map((item) => (
            <li key={item}>
              <Link
                to={`/${item}`}
                className="hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
