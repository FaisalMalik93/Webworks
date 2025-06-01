'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWeb() {

  const featuredServices = [
  {
    title: 'Custom Website Development',
    description:
      'We build responsive, fast, and scalable websites tailored to your business needs.',
    slug: 'custom-website-development',
    isFeatured: true,
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'Launch your online store with seamless product management, secure checkout, and modern UI.',
    slug: 'ecommerce-solutions',
    isFeatured: true,
  },
  {
    title: 'Portfolio & Business Sites',
    description:
      'Perfect for professionals, agencies, and startups looking to establish a strong online presence.',
    slug: 'portfolio-business-sites',
    isFeatured: true,
  },
  {
    title: 'Landing Pages & Funnels',
    description:
      'High-converting landing pages and sales funnels designed to boost engagement and conversions.',
    slug: 'landing-pages-and-funnels',
    isFeatured: true,
  },
  {
    title: 'Website Redesign Services',
    description:
      'Revamp your outdated site with modern design, improved UX, and optimized performance.',
    slug: 'website-redesign-services',
    isFeatured: true,
  },
  {
    title: 'SEO & Performance Optimization',
    description:
      'Improve your website’s speed, mobile-friendliness, and search engine rankings.',
    slug: 'seo-performance-optimization',
    isFeatured: true,
  },
];


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED SERVICES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">We Bring Your Website Vision to Life</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredServices.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            View All Setvices
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWeb