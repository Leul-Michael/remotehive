import React, { ReactNode } from "react"

type CategoryExcerptProps = {
  title: string
  icon: ReactNode
}

const CategoryExcerpt = ({ title, icon }: CategoryExcerptProps) => {
  return (
    <div className="border border-border p-6 flex flex-col justify-center items-center text-center gap-6 rounded-md">
      {icon}
      <h1 className="md:text-[1.75rem] text-xl font-bold leading-none">
        {title}
      </h1>
      <p className="text-muted-foreground text-sm">
        Whether you have a team of 2 or 200, our shared team inboxes keep
        everyone on the same page and in the loop.
      </p>
    </div>
  )
}

export default CategoryExcerpt
