'use client'

import { useEffect, useState } from 'react'
import SocialMedia from './SocialMedia'
import styles from './presentation.module.sass'

export default function Presentation() {
  const [isSmMediaQueryActive, setIsSmMediaQueryActive] = useState(false)

  const checkSmMediaQuery = () => {
    setIsSmMediaQueryActive(window.innerWidth < 640)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSmMediaQuery)
    checkSmMediaQuery()
  }, [])
  return (
    <div
      className={`flex flex-col max-sm:items-baseline uppercase max-2xl:mb-5 ${styles.title}`}
    >
      <div
        className={`font-normal max-sm:font-medium text-[2rem] max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-lg:mb-3 drop-shadow-md`}
      >
        Oi, eu sou o Isaque
      </div>
      <div className="flex max-sm:flex-col items-baseline gap-10 max-sm:gap-0 mt-5 max-2xl:mt-0">
        {!isSmMediaQueryActive && (
          <span className="font-black leading-none text-[10rem] max-2xl:text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-6xl drop-shadow-2xl">
            Full Stack
          </span>
        )}
        {isSmMediaQueryActive && (
          <span className="font-black max-2xl:text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-6xl drop-shadow-2xl">
            Full
          </span>
        )}
        {isSmMediaQueryActive && (
          <span className="font-black max-2xl:text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-6xl drop-shadow-2xl">
            Stack
          </span>
        )}
        {!isSmMediaQueryActive && <SocialMedia />}
      </div>
      <span className="font-black leading-none text-[10rem] max-2xl:text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-6xl self-end drop-shadow-2xl">
        Developer
      </span>
      {isSmMediaQueryActive && <SocialMedia />}
    </div>
  )
}
