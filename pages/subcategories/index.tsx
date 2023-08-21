import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'

type Repo = {
    params: { id: string }
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await fetch('http://localhost:3001/api/subcategories')
    const repo = await res.json()
    return { props: { repo, } }
}

export default function Page({
    repo, params
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <>{repo.map(i => <div key={i.id}><Link href={`/subcategories/${i.id}`}>{i.name}</Link></div>)}</>
}