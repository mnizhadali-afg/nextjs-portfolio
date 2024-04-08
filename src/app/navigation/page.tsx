"use client";
import Link from "next/link";
export default function Page() {
  const links = [
    {
      href: "/",
      label: "Welcome",
    },
    {
      href: "/#",
      label: "Who am I?",
    },
    {
      href: "/#",
      label: "Projects",
    },
    {
      href: "/#",
      label: "Resume",
    },
    {
      href: "/#",
      label: "Testimonials",
    },
    {
      href: "/#",
      label: "Contact",
    },
  ];

  return (
    <nav className='py-5'>
      <ul className='flex justify-around'>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={`${link.href}`}
              className='uppercase tracking-widest font-medium text-rang-600 hover:text-rang-950 active:text-rang-950'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
