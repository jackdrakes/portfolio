// import Image from "next/image"
// import logo from '@/assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = ()=> {
  return (
    <nav className="mb-20 flex items-center justify-between py-0">
        <div className="flex flex-shrink-0 items-center">
            {/* <Image src={logo}/> */}
            <>Img</>            
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaGithub/>
                <FaLinkedin />
                <FaSquareXTwitter/>
            </div>
    </nav>
  )
}

export default Navbar
