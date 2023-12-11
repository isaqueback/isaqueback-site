import H3 from '../../../hTags/H3'
import styles from './projects.module.sass'
import Project from './project/Project'
import todoDevices from '@/app/assets/illustrations/todo-devices.svg'
import gitHubBlog from '@/app/assets/illustrations/github-blog-devices.svg'
import countdown from '@/app/assets/illustrations/countdown-devices.svg'
import myCurriculumDevices from '@/app/assets/illustrations/mycurriculum-devices.svg'
import findAFriendDevices from '@/app/assets/illustrations/findAFriend-devices.svg'

export interface ProjectType {
  title: string
  description: string
  img: string
  technologies: string[]
  gitHubUrl: string
  siteUrl?: string
}

export default function Projects() {
  const projects: ProjectType[] = [
    {
      title: 'FindAFriend',
      description:
        'Este projeto permite colocar seu animal para adoção ou encontrar seu futuro pet. Projeto full-stack, mas com seu back-end em andamento.',
      gitHubUrl: 'https://github.com/isaqueback/find-a-friend',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'Tailwind',
        'TypeScript',
        'JavaScript',
        'Next.js',
        'Zod',
        'API Rest',
        'GoogleMapReact',
        'Node.js',
        'Prisma (ORM)',
        'Fastify',
        'Vittest (testes)',
      ],
      siteUrl: 'https://find-a-friend-isaqueback.vercel.app/',
      img: findAFriendDevices,
    },
    {
      title: 'GitHub Blog',
      description:
        'Este projeto utiliza a API do GitHub para buscar issues de um repositório e dados de perfil e mostrar em tela em forma de blog.',
      img: gitHubBlog.src,
      technologies: [
        'HTML',
        'CSS',
        'Styled Components',
        'JavaScript',
        'TypeScript',
        'React (Vite.js)',
        'Consumo de API',
        'React Router Dom',
      ],
      gitHubUrl: 'https://github.com/isaqueback/github-blog',
      siteUrl: 'https://github-blog-isaqueback.netlify.app/',
    },
    {
      title: 'MyCurriculum',
      description:
        'Este projeto será um futuro site para a criação de currículos profissionais.',
      img: myCurriculumDevices.src,
      technologies: [
        'HTML',
        'Styled Components',
        'TypeScript',
        'Next.js',
        'Node',
        'Sequelize',
        'PostgreSQL',
        'Express',
        'API REST',
        'Multer',
        'Amazon AWS',
        'Nodemailer',
      ],
      gitHubUrl: 'https://github.com/isaqueback/mycurriculum',
    },
    {
      title: 'Countdown',
      description:
        'É um countdown timer (contagem regressiva) para o lançamento de um suposto produto.',
      img: countdown.src,
      technologies: [
        'HTML',
        'CSS',
        'Styled Components',
        'JavaScript',
        'TypeScript',
        'React (Vite.js)',
        'React Boostrap',
        'Date-fns',
      ],
      gitHubUrl: 'https://github.com/isaqueback/countdown',
      siteUrl: 'https://countdown-isaqueback.netlify.app/',
    },
    {
      title: 'To-do',
      description:
        'É uma aplicação que ajuda os usuários a organizar e gerenciar suas tarefas diárias, pendências, compromissos ou projetos.',
      img: todoDevices.src,
      technologies: [
        'HTML',
        'CSS Modules',
        'SASS/SCSS',
        'JavaScript',
        'TypeScript',
        'React (Vite.js)',
      ],
      gitHubUrl: 'https://github.com/isaqueback/desafio-1-ignite-to-do-list',
      siteUrl: 'https://todo-isaqueback.netlify.app/',
    },
  ]
  return (
    <section
      id="projects"
      className={`font-source-sans-pro min-h-screen bg-stone-200 flex flex-col items-center gap-24 max-xl:gap-16 py-20 px-20 max-md:px-4 max-lg:px-10 max-xl:px-14 max-xl:py-10  ${styles.projects}`}
    >
      <H3 text="PROJETOS" />
      <div className="flex flex-col gap-24 max-2xl:gap-20 max-xl:gap-16">
        {projects.map((project, idx) => (
          <Project
            key={idx}
            title={project.title}
            description={project.description}
            img={project.img}
            technologies={project.technologies}
            gitHubUrl={project.gitHubUrl}
            siteUrl={project.siteUrl}
          />
        ))}
      </div>
    </section>
  )
}
