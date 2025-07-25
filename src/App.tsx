import { NavBar } from './components/navbar'
import Banner from './components/banner'
import Footer from './components/footer'

function App() {
  return (
    <>
    <NavBar />
    <Banner />
    <div className='fixed bottom-0 left-0 w-full bg-white shadow-md z-50 p-8'>
    <Footer />
    </div>

    </>
  )
}

export default App
