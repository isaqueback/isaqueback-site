import Image from 'next/image'

interface DeviceProps {
  img: string
}

export default function Device({ img }: DeviceProps) {
  return (
    <div className="w-[31.25rem] max-xl:w-[40rem] max-2xl:w-[45rem] max-xs:w-72 min-h-[17.5rem] relative">
      <Image
        src={img}
        alt="Imagem do site em diversos dispositivos"
        width={100}
        height={100}
        className={`w-full h-full`}
      />
    </div>
  )
}
