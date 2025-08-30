"use client";
import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 px-6 py-12">
        {/* About */}
        <div>
          <h3 className="font-bold text-white mb-3">
            <Link href="#">About</Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                What to know
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Articles */}
        <div>
          <h3 className="font-bold text-white mb-3">
            <Link href="#">Articles</Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                News
              </Link>
            </li>
          </ul>
        </div>

        {/* Podcasts */}
        <div>
          <h3 className="font-bold text-white mb-3">
            <Link href="#">Consulting</Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Where to begin?
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Peak performance
              </Link>
            </li>
          </ul>
        </div>

        {/* Speaking */}
        <div>
          <h3 className="font-bold text-white mb-3">
            <Link href="#">Events</Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Conferences
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Seminars
              </Link>
            </li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-white mb-3">
            <Link href="#">Resources</Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Courses
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Books
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-white mb-3">
            <Link href="#">Contact</Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400 text-sm">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-4">
          {/* Left: Esther Perel */}
          <p className="font-semibold text-white">Tunji Babajide</p>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Instagram">
              <Instagram size={20} className="hover:text-gray-400" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={20} className="hover:text-gray-400" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube size={20} className="hover:text-gray-400" />
            </Link>
          </div>

          {/* Right: Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} R-A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
