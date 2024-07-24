import { Header } from './components/Header'

export function App() {
  return (
    <div className='p-11 bg-gray-100 min-h-screen'>
      <div className="grid grid-cols-6 gap-x-10">
        <Header />
      </div>
    </div>
  )
}