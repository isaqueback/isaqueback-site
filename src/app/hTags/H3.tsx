interface H3Props {
  text: string
}

export default function H3({ text }: H3Props) {
  return (
    <h3 className="w-fit max-xl:mx-auto text-5xl font-black max-xl:text-center text-stone-900 relative after:content-[''] after:w-10 after:h-2 after:bg-amber-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-5 after:rounded-full">
      {text}
    </h3>
  )
}
