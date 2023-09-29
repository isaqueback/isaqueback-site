'use client'

import H3 from '@/app/hTags/H3'
import styles from './contacts.module.sass'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Check, SealWarning, CircleNotch } from '@phosphor-icons/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import axios from 'axios'
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material'

interface Contact {
    name: string
    email: string
    subject: string
    message: string
    honeypot: string
    replyTo: string
    accessKey: string
}

interface Response {
    type: 'error' | 'success'
    message:
    'Mensagem enviada com sucesso. Obrigado por entrar em contato comigo.' |
    'Um erro ocorreu ao enviar a mensagem. Por favor, recarregue a página e tente novamente.'
}

const emailFormSchema = z.object({
    name: z.string().nonempty('O campo nome deve ser preenchido'),
    email: z.string().nonempty('O campo e-mail deve ser preenchido'),
    subject: z.string().nonempty('O campo título deve ser preenchido'),
    message: z.string().nonempty('O campo mensagem deve ser preenchido'),
})

type EmailFormType = z.infer<typeof emailFormSchema>

export default function Contacts() {
    const [response, setResponse] = useState({} as Response)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFormSubmitting, setIsFormSubmitting] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<EmailFormType>({
        resolver: zodResolver(emailFormSchema)
    })

    async function onSubmit({ name, email, subject, message }: EmailFormType) {
        try {
            setIsFormSubmitting(true)

            const contact: Contact = {
                name,
                email,
                subject,
                message,
                honeypot: '',
                replyTo: '@',
                accessKey: process.env.STATIC_FORMS_PRIVATE_KEY as string,
            }


            const url = 'https://api.staticforms.xyz/submit'
            const headers = { "Content-Type": 'application/json' }

            const res = await axios.post(url, JSON.stringify(contact), { headers })

            if (res.data.success) {
                setResponse({
                    type: 'success',
                    message: 'Mensagem enviada com sucesso. Obrigado por entrar em contato comigo.',
                })
            } else {
                setResponse({
                    type: 'error',
                    message: 'Um erro ocorreu ao enviar a mensagem. Por favor, recarregue a página e tente novamente.'
                })
            }
        } catch (err) {
            setResponse({
                type: 'error',
                message: 'Um erro ocorreu ao enviar a mensagem. Por favor, recarregue a página e tente novamente.',
            })
        }

        reset()
        setIsFormSubmitting(false)
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    return (
        <section id="contacts" className={`bg-stone-100 w-full flex flex-col items-center gap-20 text-stone-800 font-light text-2xl max-xl:text-3xl py-20 px-20 max-md:px-4 max-xl:py-10 max-lg:px-10 max-xl:px-14 max-sm:pb-0  ${styles.contacts}`}>
            <H3 text="CONTATO" />
            <div className='flex flex-row max-xl:flex-col gap-12 w-full max-w-7xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/5 max-xl:w-4/5 max-lg:w-full flex flex-col max-xl:self-center max-xl:order-1 gap-7 px-16 max-sm:px-1 py-16 lg:pt-0 rounded-lg'>
                    <label htmlFor="name">
                        <span className='max-md:text-xl'>Name</span>
                        <input {...register('name')} type="text" id='name' placeholder='Digite seu nome' />
                        <small className='text-base max-md:text-base'>{errors.name && errors.name.message}</small>
                    </label>
                    <label htmlFor="email">
                        <span className='max-md:text-xl'>E-mail</span>
                        <input {...register('email')} type="email" id='email' placeholder='Digite seu e-mail' />
                        <small className='text-base max-md:text-base'>{errors.email && errors.email.message}</small>
                    </label>
                    <label htmlFor="subject">
                        <span className='max-md:text-xl'>Título</span>
                        <input {...register('subject')} type="text" id='subject' placeholder='Digite seu título' />
                        <small className='text-base max-md:text-base'>{errors.subject && errors.subject.message}</small>
                    </label>
                    <label htmlFor="message">
                        <span className='max-md:text-xl'>Mensagem</span>
                        <textarea {...register('message')} id='message' rows={10} placeholder='Digite sua mensagem' />
                        <small className='text-base max-md:text-base'>{errors.message && errors.message.message}</small>
                    </label>
                    <button className='flex gap-2 justify-center items-center rounded-md px-20 py-5 mt-7 max-xl:px-12 text-stone-50 text-lg bg-slate-900 font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out'>
                        <CircleNotch className={`animate-spin ${isFormSubmitting ? '' : 'hidden'}`} />
                        <span>ENVIAR</span>
                    </button>
                </form>
                <div className='w-2/5 max-xl:w-full flex flex-col gap-10 lg-mt-1'>
                    <p>
                        Sinta-se à vontade para preencher o formulário de contato <span className='max-xl:hidden'>ao lado</span><span className='xl:hidden'>abaixo</span>.
                        Estou ansioso para receber suas mensagens e responder o mais rápido possível.
                        Obrigado por considerar entrar em contato!
                    </p>
                    <nav className='flex flex-col max-xl:items-center  gap-2 text-xl max-xl:text-2xl'>
                        <div className='max-xl:w-[33rem] max-sm:w-full max-md:text-xl'>
                            <GithubLogo />
                            <span>Quer meu GitHub?</span>
                            <Link href="https://github.com/isaqueback" target='_blank'>isaqueback</Link>
                        </div>
                        <div className='max-xl:w-[33rem] max-sm:w-full max-md:text-xl'>
                            <LinkedinLogo />
                            <span>Meu Linkedin também?</span>
                            <Link href="https://www.linkedin.com/in/isaqueback/" target='_blank'>isaqueback</Link>
                        </div>
                        <div className='max-xl:w-[33rem] max-sm:w-full max-md:text-xl'>
                            <EnvelopeSimple />
                            <span>E o meu e-mail?</span>
                            <Link href="mailto:isa.quecosta00@gmail.com" target='_blank'>isa.quecosta00@gmail.com</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <Dialog open={isModalOpen} onClose={handleCloseModal}>
                <DialogContent className={`bg-stone-100 flex gap-4 ${response.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                    {response.type === 'success' ? <Check size={40} /> : <SealWarning size={40} />}
                    <span>{response.message}</span>
                </DialogContent>
                <DialogActions className='bg-stone-700'>
                    <Button onClick={handleCloseModal} className='text-stone-50'>Fechar</Button>
                </DialogActions>
            </Dialog>
        </section>
    )
}