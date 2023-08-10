import { cn } from "@/lib/utils"
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react"

type SearchProps = {} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Search = ({ className, ...rest }: SearchProps) => {
  return (
    <input
      {...rest}
      className={cn(
        "flex flex-col outline-none border rounded-sm px-4 py-2 focus:border-accent-green",
        className
      )}
    />
  )
}

export default Search
