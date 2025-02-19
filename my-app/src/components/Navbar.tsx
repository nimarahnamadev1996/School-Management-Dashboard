import Image from "next/image"


import search from '../../public/search.png'
import message from '../../public/message.png'
import announcement from '../../public/announcement.png'
import avatar from '../../public/avatar.png'



const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">

        {/* ---- Search Bar ----- */}

        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src={search} alt="search" width={14} height={14}/>
            <input
             type="text" 
             placeholder="Search..."
             className="w-[200px] p-2 bg-transparent outline-none"/>
        </div>

         {/* ----- ICONS AND USER ----- */}

         <div className="flex items-center gap-6 justify-end w-full">

            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src={message} alt="message" width={20} height={20}/>
            </div>

            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                <Image src={announcement} alt="announcement" width={20} height={20}/>
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
            </div>

            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">John Doe</span>
                <span  className="text-[14px] text-gray-500 text-right">Admin</span>
            </div>

            <Image src={avatar} alt="avatar"  width={36} height={36} className="rounded-full"/>
         </div>
    </div>
  )
}

export default Navbar