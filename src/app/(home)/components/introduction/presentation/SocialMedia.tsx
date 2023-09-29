'use client'

import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function SocialMedia() {
  return (
    <nav className={`flex gap-10 max-sm:mt-3 max-sm:self-center`}>
      <Link
        className="w-[4.5rem] h-[4.5rem] max-2xl:w-[3.5rem] max-2xl:h-[3.5rem] max-xl:w-[2.5rem] max-xl:h-[2.5rem] max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[1.8rem] max-md:h-[1.8rem] max-sm:w-[2.75rem] max-sm:h-[2.75rem]"
        href="https://www.linkedin.com/in/isaqueback/"
        target="_blank"
      >
        <LinkedinLogo color="rgb(254 243 199)" weight="duotone" />
      </Link>
      <Link
        className="w-[4.5rem] h-[4.5rem] max-2xl:w-[3.5rem] max-2xl:h-[3.5rem] max-xl:w-[2.5rem] max-xl:h-[2.5rem] max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[1.8rem] max-md:h-[1.8rem] max-sm:w-[2.75rem] max-sm:h-[2.75rem]"
        href="https://github.com/isaqueback"
        target="_blank"
      >
        <GithubLogo color="rgb(254 243 199)" weight="duotone" />
      </Link>
    </nav>
  )
}
