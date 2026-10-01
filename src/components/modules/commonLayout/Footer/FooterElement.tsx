"use client";

import Image from "next/image";
import React from "react";

const FooterElement = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo/Header_Logo.png"
                height={37}
                width={171}
                alt="Bytespace Logo"
                className="text-black bg-black"
              />
            </div>

            {/* Newsletter Text */}
            <p className="text-gray-500 text-[14px] mb-6">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Form */}
            <form
              className="flex items-center gap-3 mb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow max-w-[280px] px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#D6F266] hover:bg-[#c2e055] text-gray-900 font-bold text-sm px-8 py-3 rounded-full transition-colors"
              >
                Search
              </button>
            </form>

            {/* Privacy Disclaimer */}
            <p className="text-gray-400 text-[12px] leading-relaxed max-w-[350px]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links (Takes up 7 columns on large screens) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Featured Courses
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Featured Categories
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Business
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                IT
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Design
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Development
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Marketing
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Photography
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Finance
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Sport
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Become a Creator
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Affiliate Program
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                Help
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Legal --- */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[13px]">
            © 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-[13px] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-[13px] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-[13px] transition-colors"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterElement;
