'use client'

import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-serif"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-serif"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-serif "
      >
        Welcome to my web development portfoilo! Explore  collection of projects showcasing my expertise in full-stack web development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {workData.map((project, index) => {
          const href = project.link // expect each item to have a 'link'
          const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href)

          const Card = (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-no-repeat bg-cover bg-center rounded-lg relative group shadow-lg h-48 sm:h-64 md:h-72 lg:h-80
                         transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              {/* Info bar */}
              <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                           justify-between duration-500 group-hover:bottom-7"
              >
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center
                             shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                >
                  <Image src={assets.send_icon} alt="send icon" className="w-5" />
                </div>
              </div>
            </motion.div>
          )

          // Wrap with Link if a valid link exists; otherwise render static card
          return href ? (
            <Link
              key={index}
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`${project.title} – open project`}
              className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            >
              {Card}
            </Link>
          ) : (
            <div key={index} className="block">{Card}</div>
          )
        })}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/SaikrishnaSamudrala3"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
                   border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lime-100 duration-500 cursor-pointer"
      >
        Show more <Image src={assets.right_arrow_bold} alt="Right Arrow" className="w-4" />
      </motion.a>
    </motion.div>
  )
}

export default Work
