'use client'
import Image from 'next/image'
import Link from 'next/link'
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-serif"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-serif"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-serif"
      >
        I combine full-stack development with AI-driven solutions to build intelligent, reliable, and user-centric applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => {
          const href = link || '#'
          const external = /^https?:\/\//i.test(href)

          return (
            <Link
              key={index}
              href={href}
              prefetch={false}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`${title} – Read more`}
              className="group block h-full w-full pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 h-full w-full flex flex-col justify-between
                           border border-gray-400 rounded-lg px-8 py-12 transition duration-500
                           group-hover:-translate-y-1 group-hover:bg-blue-300 group-hover:shadow-amber-500"
              >
                <Image src={icon} alt="" className="w-10" />
                <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600 leading-5">{description}</p>

                {link && (
                  <span className="flex items-center gap-2 text-sm mt-5">
                    Read more <Image alt="right arrow" src={assets.right_arrow} className="w-4" />
                  </span>
                )}
              </motion.div>
            </Link>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Services
