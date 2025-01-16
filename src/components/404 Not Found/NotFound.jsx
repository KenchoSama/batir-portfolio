import React from 'react'
import { motion } from "framer-motion";
const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className='w-full h-[90vh] flex items-center justify-center'
    >
        404 Error
    </motion.div>
  )
}

export default NotFound