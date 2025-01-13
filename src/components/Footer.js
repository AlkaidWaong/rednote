// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About</h3>
            <p className="mt-4 text-base text-gray-500">
              Your comprehensive guide to Xiaohongshu (Red Note App), China&apos;s leading lifestyle and social commerce platform. Learn, share, and succeed in the Chinese market.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-base text-gray-500 hover:text-gray-900">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-base text-gray-500 hover:text-gray-900">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Learn More</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://www.xiaohongshu.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  Official Site
                </a>
              </li>
              <li>
                <a href="https://business.xiaohongshu.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  Business Portal
                </a>
              </li>
              <li>
                <a href="https://creator.xiaohongshu.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  Creator Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Xiaohongshu Wiki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}