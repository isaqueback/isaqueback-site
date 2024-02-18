import Image from 'next/image'

interface DeviceProps {
  img: string
}

export default function Device({ img }: DeviceProps) {
  return (
    <div className="w-[31.25rem] max-xl:w-[40rem] max-2xl:w-[45rem] max-xs:w-72 min-h-[17.5rem] relative rounded-sm">
      <Image
        src={img}
        alt="Imagem do site em diversos dispositivos"
        width={1920}
        height={882}
        className={`w-full h-full border-4 rounded-md border-slate-900`}
      />
    </div>
  )
}
