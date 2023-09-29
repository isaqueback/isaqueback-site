'use client'

import Image from 'next/image'
import { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'

interface DeviceProps {
  img: string
}

export default function Device({ img }: DeviceProps) {
  const [reveal, setReveal] = useState(false)
  const visibility = reveal ? 'visible' : 'invisible'
  const loader = reveal ? 'hidden' : 'visible'

  return (
    <div className="w-[31.25rem] max-xl:w-[40rem] max-2xl:w-[45rem] max-xs:w-72 min-h-[17.5rem] relative">
      <Image
        src={img}
        alt="Imagem do site em diversos dispositivos"
        width={100}
        height={100}
        onLoadingComplete={() => setReveal(true)}
        className={`w-full h-full absolute ${visibility}`}
      />
      <Skeleton
        variant="rounded"
        animation="wave"
        className={`w-[31.25rem] max-xl:w-[40rem] max-2xl:w-[45rem] max-xs:w-72 min-h-[17.5rem] absolute top-0 left-0 ${loader}`}
      />
    </div>
  )
}
