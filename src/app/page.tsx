import styles from '../app/ui/home.module.css'
import CardContainer from './ui/cardContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardContainer/>
    </main>
  )
}
