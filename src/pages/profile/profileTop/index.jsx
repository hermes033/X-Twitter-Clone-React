import { Link } from "react-router-dom"
import { useAccount } from "~/store/auth/hooks"

function ProfileTop() {

  const account = useAccount();

  return (
    <div className="w-full h-[53px] flex">

      <div className="w-[53px] h-full mr-[18px] flex items-center justify-center">
        <Link to='/' className="w-[36px] h-[36px] flex items-center rounded-full hover:bg-[#3636366f] justify-center">
          <svg viewBox="0 0 24 24" width={20} height={20}>
            <g>
              <path fill="#e7e9ea" d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </g>
          </svg>
        </Link>
      </div>

      <div className="w-[510.54px] h-full flex items-center">
        <div className="w-full h-[38.95px] flex flex-col cursor-pointer">
          <h2 className="text-[20px] font-bold leading-[18px] w-[115.89px] text-[#e7e9ea] h-[29.95px]">{account.fullName}</h2>
          <span className="w-[45.13px] h-[16px] text-[#6a6f74] text-[14px]">0 posts</span>
        </div>
      </div>

    </div>
  )
}

export default ProfileTop