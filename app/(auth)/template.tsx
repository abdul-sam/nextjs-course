'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { title: 'Login', path: '/login' },
  { title: 'Register', path: '/register' },
  { title: 'Forgot Passowrd', path: '/forgot-password' },
];

const AuthLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return(
    <>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      { navLinks.map((link) => {
        const isActive = pathname === link.path;
        return(
          <Link key={link.path} href={link.path}
            className={`text-blue-500 hover:text-blue-700 mr-4 ${isActive ? 'font-bold text-red-800' : ''}`}
          >
            {link.title}
          </Link>
        )
      })}
      {children}
    </>
  )
}

export default AuthLayout;