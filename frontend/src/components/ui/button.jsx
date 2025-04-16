import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({ className, variant = "default", ...props }) => {
  const base = "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
    link: "text-blue-600 hover:underline px-0 py-0"
  };

  return <button className={cn(base, variants[variant], className)} {...props} />;
};
