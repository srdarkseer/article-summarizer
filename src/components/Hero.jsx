import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
    <img src={logo} alt="xyRo-logo" className="w-28 object-contain" />

    <button type="button" onClick={() => window.open('https://github.com/srdarkseer')} className="black_btn">GitHub</button>
    </nav>
    </header>
  )
}

export default Hero