'use client'

import Link from 'next/link'
import styles from './abilitiesShowButton.module.sass'

export default function AbilitiesShowButton() {
  return (
    <Link
      className={`max-sm:hidden ${styles.abilitiesShowButton} `}
      href="#projects"
    >
      <div className="w-6 h-10 absolute bottom-2 border border-amber-100 rounded-2xl flex justify-center items-start py-2">
        <span className="bg-slate-950 w-1 h-1 rounded-full"></span>
      </div>
    </Link>
  )
}
