
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "floral";
  size?: "default" | "sm" | "lg" | "icon" | "wide";
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  asChild?: boolean;
}

const CustomButton = ({
  variant = "default",
  size = "default",
  children,
  className,
  loading = false,
  icon,
  asChild = false,
  ...props
}: CustomButtonProps) => {
  const getVariantClasses = () => {
    if (variant === "floral") {
      return "bg-floral-400 text-white hover:bg-floral-500 transition-all duration-300";
    }
    return "";
  };

  const getSizeClasses = () => {
    if (size === "wide") {
      return "py-3 px-8 w-full sm:w-auto min-w-40";
    }
    return "";
  };

  return (
    <Button
      variant={variant === "floral" ? "default" : variant}
      size={size === "wide" ? "default" : size}
      className={cn(
        "relative overflow-hidden transition-all font-medium",
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      disabled={loading || props.disabled}
      asChild={asChild}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      <span className={cn("flex items-center gap-2", { "opacity-0": loading })}>
        {icon && <span>{icon}</span>}
        {children}
      </span>
    </Button>
  );
};

export default CustomButton;
