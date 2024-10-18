"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: '/register' },
  { name: "Login", href: '/login' },
  { name: "Forgot Passcode", href: '/forgetpassword' },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("")

  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div> 
            <input type="email" value={input} onChange={(e) => {
              setInput(e.target.value)
            }
            }></input>
          </div>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link href={link.href} key={link.href} passHref>
                <button className={`bg-red-300 ${isActive ? "bg-slate-300" : ""}`}>
                  {link.name}
                </button>
              </Link>
            );
          })}
        </div>
        <div>{children}</div> {/* Render children here if needed */}
      </body>
    </html>
  );
}
