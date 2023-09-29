import Introduction from './components/introduction/Introduction'
import Projects from './components/projects/Projects'
import UserProfile from './components/userProfile/UserProfile'

export default function Home() {
  return (
    <main className={`text-stone-50`}>
      <Introduction />
      <Projects />
      <UserProfile />
    </main>
  )
}
