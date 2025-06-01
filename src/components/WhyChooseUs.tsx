
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WebContent = [
    {
    title: 'Tailored Website Solutions',
    description:
      'From business websites to custom web apps, we design and develop solutions perfectly suited to your unique needs and goals.',
  },
  {
    title: 'Expert Guidance by Faisal Malik',
    description:
      'Led by our experienced instructor Faisal Malik, we ensure top-notch quality and personalized support throughout your project.',
  },
  {
    title: 'Comprehensive Service Range',
    description:
      'Whether you need an e-commerce store, landing page, or a complete branding package, we cover all aspects of your online presence.',
  },
  {
    title: 'Focus on Performance & SEO',
    description:
      'We optimize every website for speed and search engine visibility, helping your business get found and grow organically.',
  },
  {
    title: 'Ongoing Maintenance & Support',
    description:
      'We don’t just build your website and leave; our maintenance packages keep your site updated, secure, and running smoothly.',
  },
  {
    title: 'Affordable & Transparent Pricing',
    description:
      'Our clear pricing plans are designed to provide you with maximum value without compromising quality or features.',
  },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={WebContent} />
    </div>
  )
}

export default WhyChooseUs