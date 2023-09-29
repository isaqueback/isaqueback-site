import Overview from './overview/Overview'
import Skills from './skills/Skills'

export default function UserProfile() {
    return (
        <section className='font-source-sans-pro w-screen min-h-screen bg-stone-50 text-stone-900 flex max-xl:flex-col items-start justify-center  gap-40 max-xl:gap-0 py-20 px-20 max-xl:py-0 max-xl:px-0'>
            <Overview />
            <Skills />
        </section>
    )
}