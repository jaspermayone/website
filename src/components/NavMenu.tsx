"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItem {
  name: string;
  href: string;
  icon?: ReactNode;
  onClick?: () => void;
  target?: string;
}

interface NavMenuProps {
  items: NavItem[];
  className?: string;
  indicatorClass?: string;
  itemClass?: string;
  activeItemClass?: string;
}

export default function NavMenu({
  items,
  className = "",
  indicatorClass = "",
  itemClass = "",
  activeItemClass = "",
}: NavMenuProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex items-center space-x-4 ${className}`}>
      {items.map((item) => {
        const isActive = pathname === item.href;

        if (item.onClick) {
          return (
            <div key={item.name} className="relative group">
              <button
                onClick={item.onClick}
                className={`relative px-3 py-2 transition-colors duration-200 ${itemClass} ${isActive ? activeItemClass : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.name}
              </button>
              {isActive && (
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transform transition-transform duration-300 ${indicatorClass}`}
                />
              )}
            </div>
          );
        }

        return (
          <div key={item.name} className="relative group">
            <Link
              href={item.href}
              className={`relative px-3 py-2 transition-colors duration-200 ${itemClass} ${isActive ? activeItemClass : ""}`}
              aria-current={isActive ? "page" : undefined}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.name}
            </Link>
            {isActive && (
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transform transition-transform duration-300 ${indicatorClass}`}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
