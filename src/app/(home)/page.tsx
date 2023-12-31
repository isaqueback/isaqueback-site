import { Metadata } from 'next'
import Contacts from './components/contacts/Contacts'
import Introduction from './components/introduction/Introduction'
import Projects from './components/projects/Projects'
import UserProfile from './components/userProfile/UserProfile'

export const metadata: Metadata = {
  title: 'Home | isaqueback',
}

export default function Home() {
  return (
    <main className={`text-stone-50`}>
      <Introduction />
      <Projects />
      <UserProfile />
      <Contacts />
    </main>
  )
}
