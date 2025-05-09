import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900`}>
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Portfolio
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition">
                  About
                </Link>
                <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition">
                  Projects
                </Link>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition">
                  Contact
                </Link>
                <button
                  id="theme-toggle"
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
    <a
      href="https://github.com/Hrishiee"
      target="_blank"
      rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/hrishikesh-chakravartty/"
      target="_blank"
      rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      LinkedIn
    </a>
    <a
      href="mailto:chakravarty@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
Gmail
    </a>
              <span className="text-gray-600 dark:text-gray-300">
      +91-9365371611
    </span>
  </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
  </p>
            </div>
          </div>
</footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            // Check for saved theme preference, otherwise use system preference
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
              document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
            } else {
              document.documentElement.classList.remove('dark');
              document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
            }

            // Theme toggle functionality
            document.getElementById('theme-toggle').addEventListener('click', function() {
              // Toggle icons
              document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden');
              document.getElementById('theme-toggle-light-icon').classList.toggle('hidden');

              // If is set to dark then apply to document
              if (localStorage.theme === 'dark') {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
              } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
              }
            });
          `
        }} />
      </body>
    </html>
  )
}
