import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type SectionWrapperProps = {
  children: ReactNode
  className?: string
  full?: boolean
}

const Section = ({ children, className, full }: SectionWrapperProps) => {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 min-h-screen h-full w-full md:px-10 px-5 overflow-hidden",
        className ?? "",
        full ? "max-w-full" : "max-w-screen-2xl mx-auto"
      )}
    >
      {full ? (
        <div className="flex flex-col gap-4 w-full max-w-screen-2xl mx-auto">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

export default Section
