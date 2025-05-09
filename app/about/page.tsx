'use client';

import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

const About: React.FC = () => {
  return (
    <section className="mt-10 max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">About Me</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I&apos;m Hrishikesh, a passionate web developer who&apos;s currently learning Next.js and Tailwind CSS.
            I enjoy building clean and user-friendly web apps. My goal is to become a full-stack developer
            and contribute to real-world projects that make an impact.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3">
          <Image
            src="/profile.jpg"
            alt="Picture of Hrishikesh"
            width={400}
            height={400}
            className="rounded-full mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
