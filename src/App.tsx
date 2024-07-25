import { Header } from './components/Header'
import { Resume } from './components/Resume'
import { Title } from './components/Title'
import { Welcome } from './components/Welcome'

export function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-4 md:p-8'>
        <div className='lg:flex'>
          <Header />
          <div>
            <Welcome />
            <Title title='Visão Geral' />
            <Resume />
          </div>
        </div>
      </div>
    </div>
  )
}