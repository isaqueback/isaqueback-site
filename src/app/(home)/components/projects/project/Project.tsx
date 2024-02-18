import Button2 from '../../../../buttons/Buttons2'
import { ProjectType } from '../Projects'
import Device from './device/Device'

export default function Project({
  title,
  description,
  img,
  technologies,
  gitHubUrl,
  siteUrl,
}: ProjectType) {
  return (
    <div
      className={`group project flex justify-start items-center gap-20 max-xl:gap-12 max-lg:gap-10 max-lg:flex-col shadow-lg rounded-lg px-10 max-xs:px-2 py-10 transition ease-out duration-300 hover:scale-[1.02] max-lg:scale-[1.01]`}
    >
      <Device img={img} />
      <div className="flex flex-col gap-6">
        <h4 className="lg:w-fit text-4xl max-lg:text-center font-black text-stone-900 relative after:content-[''] after:w-5 after:h-1 after:bg-amber-100 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-2 after:rounded-full">
          {title}
        </h4>
        <p className="text-stone-900 font-light text-2xl max-xl:text-xl max-lg:text-center">
          {description}
        </p>
        <ul className="flex items-center max-lg:justify-center flex-wrap gap-5 max-sm:gap-3 text-stone-500 text-lg max-xl:text-sm whitespace-nowrap">
          {technologies.map((technology, idx) => (
            <li key={idx}>{technology}</li>
          ))}
        </ul>
        <div className="mt-10 flex gap-10 max-lg:justify-center">
          <Button2
            text="GITHUB"
            fontSize="base"
            href={gitHubUrl || ''}
            target="_target"
          />
          {siteUrl && (
            <Button2
              text="SITE"
              fontSize="base"
              href={siteUrl || ''}
              target="_target"
            />
          )}
        </div>
      </div>
    </div>
  )
}
