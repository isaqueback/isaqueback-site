'use client'

import styles from './description.module.sass'
import { useEffect, useRef } from 'react'

interface AnimateTextProps {
  text: string
  interval: number
}

export default function Description() {
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  function animateText({ text, interval }: AnimateTextProps) {
    const element = descriptionRef.current
    if (!element) return

    let currentCharIndex = 0

    const regex = /&\w+;|<[^>]+>|./g
    const matches = text.match(regex)

    const animationTimer = setInterval(() => {
      if (matches && currentCharIndex < matches.length) {
        const currentText = matches.slice(0, currentCharIndex + 1).join('')

        element.innerHTML = currentText
        currentCharIndex++
      } else {
        clearInterval(animationTimer)
      }
    }, interval)
  }

  useEffect(() => {
    const descriptionData = {
      elementRef: descriptionRef,
      text: '<span>&lt;p&gt;</span><br/><span style="margin-left: 60px">Sou desenvolvedor web full-stack. Possuo 24 anos e experiência em projetos pessoais na área.</span><br/><span>&lt;/p&gt;</span>',
      interval: 25,
      blink: 500,
    }

    animateText(descriptionData)
  }, [])

  return (
    <p
      className={`mt-5 max-2xl:mt-0 max-md:w-3/4 max-lg:w-2/3 h-[15.25rem] max-2x:h-[13.5rem] max-xl:h-[12rem] max-lg:h-[9rem] max-md:h-[8.5rem] max-sm:h-[10.75rem] w-1/2 max-sm:font-medium text-[2rem] max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg self-start max-sm:self-center text-stone-50 flex flex-col drop-shadow-2xl ${styles.description}`}
      ref={descriptionRef}
    ></p>
  )
}
