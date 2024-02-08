import logo from './callmeUnir.png';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/navbar';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='grid grid-cols-1 sm:grid-cols-2 my-10'>
        <div className='flex flex-col gap-4'>
          <p className='text-2xl font-bold'>Liliana Gallegos Ruvalcaba</p>
          <p className='font-semibold'>Fronted Developer</p>
          <div className='flex gap-2 justify-center items-center'>
          <BsFillTelephoneFill className='text-pink-500' />
          <p>8718963688</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
          <FaLinkedin className='text-pink-500' />
          <p className='hover:cursor-pointer hover:text-pink-400 transition-all' onClick={() => { window.open('https://www.linkedin.com/in/liliana-gallegos-ruvalcaba/', '_blank') }}>LinkedIn</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
          <IoLogoGithub className='text-pink-500' />
          <p className='hover:cursor-pointer hover:text-pink-400 transition-all' onClick={() => { window.open('https://github.com/lilianaruva/eCommerce', '_blank') }}>GitHub</p>
          </div>
        </div>
        <div className='flex m-2 sm:m-10 justify-center items-center bg-pink-400 hover:bg-pink-300 transition-all rounded-full w-96 h-96'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
