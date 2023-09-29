import H3 from '@/app/hTags/H3'
import styles from './skills.module.sass'

export default function Skills() {
    return (
        <div className={` flex flex-col gap-12 ${styles.skills} max-md:px-4 max-xl:py-10 max-lg:px-10 max-xl:px-14 max-w-full`}>
            <H3 text="HABILIDADES" />
            <ul className="flex flex-wrap max-xl:justify-center mt-2 gap-5 text-stone-700 text-2xl max-xs:text-xl max-xl:max-w-full max-w-[52.5rem]">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
            <ul className="flex flex-wrap max-xl:justify-center mt-2 gap-5 text-stone-700 text-2xl max-xs:text-xl max-xl:max-w-full max-w-[52.5rem]">
                <li>TypeScript</li>
                <li>API REST</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Design Responsivo</li>
                <li>ORM Sequelize (PostgreSQL)</li>
                <li>SASS</li>
                <li>Tailwind</li>
                <li>Multer (Amazon AWS)</li>
                <li>Nodemailer</li>
                <li>Trabalho em equipe</li>
                <li>Pensamento crítico</li>
                <li>Gestão do tempo</li>
                <li>Resiliência</li>
                <li>Ética profissional</li>
            </ul>
        </div>
    )
}