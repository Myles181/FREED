import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage
})

function HomePage() {
  return (
    <main className="grid grow place-items-center">
      <Link to="/faucet">Faucet</Link>
    </main >
  )
}
