import React, { useState, useRef, useEffect, useCallback, ReactNode } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isScrollingHeader, setIsScrollingHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const lastPos = useRef(0);

  const navLinkClassName =
    'mr-4 mt-4 block text-base font-medium text-gray-700 hover:text-indigo-600 md:mt-0 md:inline-block';

  function toggleMenu(event) {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  const handleHeaderScroll = useCallback(() => {
    const header = headerRef?.current;
    const currPos = document.documentElement.scrollTop;

    if (header) {
      if (currPos > +lastPos.current) {
        if (currPos > header.offsetHeight) {
          setIsScrollingHeader(true);
        }
      } else {
        setIsScrollingHeader(false);
      }
    }

    lastPos.current = currPos;
  }, [headerRef, lastPos, setIsScrollingHeader]);

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderScroll, false);

    return () => {
      window.removeEventListener('scroll', handleHeaderScroll, false);
    };
  }, [handleHeaderScroll]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 z-50 w-full transform bg-white px-6 py-5 transition-all duration-500 ease-in-out ${
          isScrollingHeader ? '-translate-y-full' : 'shadow-md'
        }`}
      >
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between">
          <div className="sm:mr-8">
            <Link className="flex items-center" to="/">
              <span className="self-center text-xl font-semibold text-indigo-700">
                Sexto Andar
              </span>
            </Link>
          </div>
          <nav
            className={`order-last mt-2 w-full flex-grow items-center md:order-none md:mt-0 md:flex md:w-auto ${
              !isMenuOpen ? 'hidden' : ''
            }`}
          >
            <NavLink
              to="/locador"
              className={({ isActive }) =>
                `${navLinkClassName} ${isActive ? 'text-indigo-600' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/inquilinos"
              className={({ isActive }) =>
                `${navLinkClassName} ${isActive ? 'text-indigo-600' : ''}`
              }
            >
              Inquilinos
            </NavLink>
            <NavLink
              to="/contas-receber"
              className={({ isActive }) =>
                `${navLinkClassName} ${isActive ? 'text-indigo-600' : ''}`
              }
            >
              Contas a Receber
            </NavLink>
            <NavLink
              to="/Imoveis"
              className={({ isActive }) =>
                `${navLinkClassName} ${isActive ? 'text-indigo-600' : ''}`
              }
            >
              Imóveis
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkClassName} ${isActive ? 'text-indigo-600' : ''}`
              }
              end
            >
              Log Out
            </NavLink>
          </nav>
          <div
            onClick={toggleMenu}
            className="flex cursor-pointer items-center text-gray-700 hover:text-indigo-600 sm:ml-6 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5 text-gray-900"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </div>
        </div>
        </header>
        <main className="mx-7 mt-28 flex-grow lg:mx-6">
        <div className="mx-auto max-w-5xl">
          {children}
        </div>
      </main>
    </>
  );
};

export default RootLayout;