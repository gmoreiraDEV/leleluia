import { NextPage } from 'next'
import { toast } from 'react-toastify'

import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout'
import { Container, Wrapper } from './styles'
import { useCallback } from 'react'
import { sanityClient } from '../../../sanity'
import { useRouter } from 'next/router'
import { searchInvoice } from '../../utils/queries/search'

type FormData = {
    search: string
}

const Tracking: NextPage = () => {
    const router = useRouter()
    const notify = useCallback(
        (
            type: 'info' | 'success' | 'warning' | 'error' | 'default',
            message: string
        ) => {
            switch (type) {
                case 'info':
                    toast.info(message)
                    break
                case 'success':
                    toast.success(message)
                    break
                case 'info':
                    toast.warning(message)
                    break
                case 'info':
                    toast.error(message)
                    break
                default:
                    toast(message)
            }
        },
        []
    )

    const dismiss = useCallback(() => {
        toast.dismiss()
    }, [])

    const {
        register,
        handleSubmit,
        resetField,
        setFocus,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = handleSubmit(async (data: FormData) => {
        const invoice = await sanityClient.fetch(
            searchInvoice(`${data.search}`)
        )
        try {
            if (invoice.length === 0 || undefined) {
                resetField('search')
                setFocus('search')
                notify(
                    'info',
                    'Não existe uma nota fiscal ou CPF com os dados informados, por favor tente novamente'
                )
            } else {
                if (invoice.length <= 1) {
                    router.push(`/rastreio/${invoice[0]._id}`)
                    notify('success', 'Ihaaa, deu certo!')
                } else {
                    router.push(
                        `/rastreio/${invoice[0]._id}?c=${invoice[0].cpf}`
                    )
                    notify('success', 'Ihaaa, deu certo!')
                }
            }
        } catch (error) {
            notify('error', 'Por favor tente mais uma vez')
            console.log(error)
        }
    })

    return (
        <Layout>
            <Container>
                <Wrapper
                    image={
                        'http://www.datocms-assets.com/76746/1658241697-drive.png'
                    }
                >
                    <h1>Rastreio</h1>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="search">
                            Digite seu CPF ou o número da Nota Fiscal
                        </label>
                        <input
                            id="search"
                            type="text"
                            placeholder="Digite aqui..."
                            {...register('search', {
                                required:
                                    'É necessário preencher o campo antes de uma busca',
                            })}
                        />
                        {errors && errors.search && (
                            <span>{errors.search.message}</span>
                        )}

                        <button type="submit">Procurar</button>
                    </form>
                </Wrapper>
            </Container>
        </Layout>
    )
}

export default Tracking
