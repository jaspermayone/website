import * as React from "react";

import { cn } from "../../lib/utils";

function Card({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-card text-card-foreground rounded-lg border shadow-sm",
        className
      )}
      {...props}
    />
  );
}
Card.displayName = "Card";

function CardHeader({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}
CardHeader.displayName = "CardHeader";

function CardTitle({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl leading-none font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
CardTitle.displayName = "CardTitle";

function CardDescription({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"p">) {
  return (
    <p
      ref={ref}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
CardDescription.displayName = "CardDescription";

function CardContent({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
}
CardContent.displayName = "CardContent";

function CardFooter({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
}
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
