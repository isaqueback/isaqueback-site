import AbilitiesShowButton from './abilitiesShowButton/AbilitiesShowButton'
import Description from './description/Description'
import Presentation from './presentation/Presentation'
import styles from './introduction.module.sass'

export default function Introduction() {
  return (
    <section
      className={`font-inter w-screen h-screen flex flex-col justify-center items-center ${styles.introductionContainer}`}
    >
      <div className="w-[76rem] max-2xl:w-[62rem] max-xl:w-[49rem] max-lg:w-[37rem] max-md:w-[32rem] max-sm:w-[24rem] flex flex-col justify-center items-start max-sm:items-center">
        <Presentation />
        <Description />
      </div>
      <AbilitiesShowButton />
    </section>
  )
}
