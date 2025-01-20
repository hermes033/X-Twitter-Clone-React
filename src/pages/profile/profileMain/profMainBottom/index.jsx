import { Link } from "react-router-dom"
import { useAccount } from "~/store/auth/hooks"

function ProfileMainBottom() {

  const account = useAccount()

  return (
    <div className="w-[566.4px] h-full">

      <div className="w-full h-[68.65px] flex justify-between">

        <div className="w-[141.6px] h-[141.6px] rounded-full bg-black hover:opacity-90 transition-all border-black border-[4px]">
          <Link>
            <img src={account.avatar} className="hover:bg-opacity-65 rounded-full" alt="" />
          </Link>
        </div>

        <div >

          <div className="w-[112.78px] h-[48px] flex items-center justify-center mt-20">

            <Link className="w-full h-[36px] flex items-center justify-center border-[#536471] border rounded-full transition-all bg-black hover:bg-[#181919]">

              <span className="w-[79.18px] h-[20px] flex items-center justify-center font-bold">Edit profile</span>

            </Link>

          </div>

        </div>

      </div>

      <div className="w-full h-[45.94px] flex flex-col items-start justify-start mt-[88.5px]">

        <div className="w-[120.29px] h-full">

          <div className="w-full h-[25.94px]">

            <span className="text-[20px] leading-[24px] font-bold w-full h-[24px]">{account.fullName}</span>

          </div>

        </div>

        <div className="w-[120.29px] h-[20px]">

          <div className="w-[91.34px] h-full">

            <span className="text-[15px] text-[#71767b] w-full h-[18.34px]">@{account.userName}</span>

          </div>

        </div>

      </div>

      <div className="w-full h-[18.75px] mt-3 flex items-start">

        <div className="w-[149.26px] h-[18.4px] flex items-center justify-between">
          <svg viewBox="0 0 24 24" width={20} height={20} className="mt-0.5">
            <g>
              <path fill="#71767b" d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z">
              </path>
            </g>
          </svg>

          <span className="w-[137.26px] text-[#71767b] h-[18.75px] flex text-[16px] items-center pl-1">Joined {account.joinedTime}</span>

        </div>

      </div>

      <div className="w-full h-[20px] flex mt-3">

        <div className="w-[71.9px] h-full">

          <Link className="w-full h-full cursor-pointer hover:border-b">
            <span className="w-[7.69px] h-[16.8px] font-semibold">7</span>
            <span className="w-[60.81px] h-[16.8px] text-[14px] ml-1 text-[#71767b]">Following</span>
          </Link>

        </div>

        <div className="w-[74.25px] h-full ml-5">

          <Link className="w-full h-full hover:border-b">
            <span className="w-[9.54px] h-[16.8px] font-semibold">0</span>
            <span className="w-[61.31px] h-[16.8px] ml-1 text-[14px] text-[#71767b]">Followers</span>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ProfileMainBottom