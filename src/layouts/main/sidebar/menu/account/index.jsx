import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { useAccount } from "~/store/auth/hooks"
import AccMore from "./accMore"

export default function AccaountMenu() {

  const account = useAccount()

  return (
    <div className="mt-auto">
      <Popover className='relative'>
        <PopoverButton className='my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center transition-all duration-[2000] outline-none'>

          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
            <div className="text-[#71767b]">
              @{account.userName}
            </div>
          </div>

          <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="text-[#e7e9ea] ml-auto">
            <path fill="#fff" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
            </path>
          </svg>

        </PopoverButton>

        <PopoverPanel className='py-3 absolute bottom-[75px] h-[311.52px] w-[300px] left-1/2 -translate-x-1/2 overflow-hidden bg-black shadow-box rounded-2xl'>
          <AccMore />
        </PopoverPanel>
      </Popover >
    </div>


  )
}