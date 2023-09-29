import Link from 'next/link'

interface Button1Props {
  text: string
  href: string
  target?: '_self' | '_target'
  fontSize: string
}

export default function Button1({
  text,
  href,
  target = '_self',
  fontSize,
}: Button1Props) {
  return (
    <Link
      className={`rounded-md w-fit px-20 py-5 max-xl:px-12 text-stone-50 text-${fontSize} bg-slate-900 font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out`}
      href={href}
      target={target}
    >
      {text}
    </Link>
  )
}
