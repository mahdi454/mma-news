import { Inter } from 'next/font/google'
import ProfilePic from './components/ProfilePic'
import Posts from './components/Posts'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={`${inter.className} px-6 mx-auto`}>
      <ProfilePic/>
      <p className='mt-10 mb-12 text-2xl text-center text-slate-200'>
        Hello my name is <span className='font-bold'>Mahdi Hassani</span>
      </p>
      
      <Posts/>
    </main>
  )
}
