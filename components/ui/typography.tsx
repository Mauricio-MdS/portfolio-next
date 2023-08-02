import { cn } from "@/lib/utils"

export function TypographyH1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    />
  )
}

export function TypographyH2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 mt-8 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

export function TypographyP({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  )
}

export function TypographyLarge({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-lg font-semibold", className)} {...props} />
}

interface TypographyAProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
}

export function TypographyA({ className, ...props }: TypographyAProps) {
  return (
    <a
      className={cn("underline-offset-4 hover:underline", className)}
      {...props}
    />
  )
}
