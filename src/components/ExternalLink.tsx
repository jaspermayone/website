"use client";

import {
  useCallback,
  MouseEvent,
  ReactNode,
  AnchorHTMLAttributes,
} from "react";

interface ExternalLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
> {
  href: string;
  children: ReactNode;
}

/**
 * External link component that adds UTM params on click.
 * Shows clean URL on hover, but navigates with tracking params.
 */
export function ExternalLink({
  href,
  children,
  onClick,
  ...props
}: ExternalLinkProps) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      // Call any passed onClick handler
      onClick?.(e);

      // Add UTM params
      const url = new URL(href);
      url.searchParams.set("utm_source", "jaspermayone.com");
      url.searchParams.set("utm_medium", "referral");

      window.open(url.toString(), "_blank", "noopener,noreferrer");
    },
    [href, onClick]
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
