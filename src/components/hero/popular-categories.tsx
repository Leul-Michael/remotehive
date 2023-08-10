import React from "react"
import CategoryExcerpt from "../excerpts/category-excerpt"
import { Code } from "@/app/svgs"

const PopularCategories = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <p className="text-accent-green font-medium">Featured</p>
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-none">
        Popular Job Categories
      </h1>
      <div className="grid grid-cols-layout-450 gap-8 py-12">
        <CategoryExcerpt title="Developement" icon={<Code />} />
        <CategoryExcerpt title="Marketing" icon={<Code />} />
        <CategoryExcerpt title="UX/UI Design" icon={<Code />} />
        <CategoryExcerpt title="Technical support" icon={<Code />} />
        <CategoryExcerpt title="Consultancy" icon={<Code />} />
        <CategoryExcerpt title="Education" icon={<Code />} />
      </div>
    </div>
  )
}

export default PopularCategories
