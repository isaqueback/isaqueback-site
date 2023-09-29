import Button1 from '@/app/buttons/Button1'
import styles from './overview.module.sass'
import H3 from '@/app/hTags/H3'

export default function Overview() {
  return (
    <div
      className={` max-xl:bg-stone-100 flex flex-col gap-12 ${styles.overview} max-xl:w-full max-md:px-4 max-xl:py-10 max-lg:px-10 max-xl:px-14`}
    >
      <H3 text="SOBRE MIM" />
      <div className="max-xl:max-w-full max-w-[51rem] flex flex-col gap-10 mb-10 max-xl:mb-5 text-stone-800 font-light text-2xl max-xl:text-3xl">
        <p>
          Olá! Sou um entusiasta apaixonado pela tecnologia, com um foco
          dedicado ao mundo do <strong>desenvolvimento web full stack</strong>.
          Minhas habilidades abrangem tanto o <strong>frontend</strong> quanto o{' '}
          <strong>backend</strong>, e estou totalmente comprometido em
          <strong>
            {' '}
            transformar ideias criativas em experiências digitais incríveis.
          </strong>
        </p>
        <p>
          Minha jornada na programação começou com a{' '}
          <strong>inspiração em Notch, o criador do Minecraft.</strong> Comecei
          explorando o desenvolvimento de jogos em Java e, ao longo do tempo,
          migrei para Python. Contudo, minha verdadeira paixão revelou-se no
          desenvolvimento web.
        </p>
        <p>
          Acredito que a <strong>aprendizagem é um processo contínuo</strong>, e
          estou sempre ansioso para adquirir novos conhecimentos e aprimorar
          minhas habilidades. Estou preparado para{' '}
          <strong>enfrentar desafios e criar soluções inovadoras.</strong>
        </p>
        <p>
          Ficaria muito contente em conversar com você e sua equipe sobre como
          minhas habilidades e paixão podem ser valiosas para o seu projeto ou
          empresa. Por favor, sinta-se à vontade para entrar em contato comigo a
          qualquer momento.
        </p>
      </div>
      <nav className="flex gap-10 max-md:gap-10 max-lg:gap-20 max-md:flex-col max-lg:flex-row max-xl:flex-col max-md:items-center max-xl:justify-center">
        <Button1 text="CONTATO" href="#contacts" fontSize="lg" />
        <Button1 text="PROJETOS" href="#projects" fontSize="lg" />
      </nav>
    </div>
  )
}
