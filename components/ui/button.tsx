import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#121212] text-yellow-400 border border-yellow-900 hover:bg-[#1a1a1a] hover:shadow-[0_0_20px_rgba(255,213,0,0.3)] active:scale-95 active:shadow-[0_0_30px_rgba(255,213,0,0.5)] transition-all duration-500",
        destructive: "bg-red-900 text-white hover:bg-red-800",
        outline: "border border-yellow-900 text-yellow-400 hover:shadow-[0_0_20px_rgba(255,213,0,0.3)] active:scale-95 active:shadow-[0_0_30px_rgba(255,213,0,0.5)] transition-all duration-500",
        secondary: "bg-[#1a1a1a] text-[#f5f5f5] hover:bg-[#111]",
        ghost: "hover:bg-[rgba(255,255,255,0.05)]",
        link: "text-yellow-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
