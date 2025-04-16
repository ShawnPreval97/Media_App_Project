import React from "react";
import { cn } from "@/lib/utils";

const Card = ({ className, ...props }) => (
  <div className={cn("rounded-2xl border bg-white text-card-foreground shadow", className)} {...props} />
);

const CardHeader = ({ className, ...props }) => (
  <div className={cn("p-4 border-b", className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-4", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardContent };
