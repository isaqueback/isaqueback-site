import Link from 'next/link'

interface Button1Props {
  text: string
  href: string
  target?: '_self' | '_target'
  fontSize: string
}

export default function Button2({
  text,
  href,
  target = '_self',
  fontSize,
}: Button1Props) {
  return (
    <Link
      className={`rounded-md w-fit px-16 py-4 max-xl:px-10 text-stone-50 text-${fontSize} bg-slate-900 font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out`}
      href={href}
      target={target}
    >
      {text}
    </Link>
  )
}
