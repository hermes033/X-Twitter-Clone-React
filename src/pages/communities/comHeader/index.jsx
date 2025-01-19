import { Link } from "react-router-dom";

export default function CommunitiesHeader() {
  return (
    <div className="w-[598px] backdrop-blur-md  h-[53px] border-b-[1px] bg-[#00000075] border-[#2f3336] flex items-center">

      <div className="ml-2 w-[56px] h-full flex items-center">

        <Link to='/' className="cursor-pointer w-[36px] h-[36px] flex items-center hover:bg-[#5a595950] rounded-full justify-center">
          <svg viewBox="0 0 24 24" width={20} height={20}>
            <g>
              <path fill="#fff" d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z">
              </path>
            </g>
          </svg>
        </Link>

      </div>

      <div className="w-[438.4px] h-full flex items-center ml-2">

        <div className="w-full h-[28px] flex items-center">
          <h2 className="cursor-pointer w-[129.29px] h-full">
            <span className="w-full h-[24px] text-[20px] font-semibold flex items-center tracking-wide">Communities</span>
          </h2>
        </div>

      </div>

      <div className="w-[72px] h-full flex items-center">

        <div className="w-full h-[36px] flex items-center">

          <Link className="w-[36px] h-full flex items-center hover:bg-[#3f404163] rounded-full justify-center">

            <svg viewBox="0 0 24 24" width={20} height={20}>
              <g>
                <path fill="#fff" d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
                </path>
              </g>
            </svg>

          </Link>

          <Link className="w-[36px] h-full flex items-center hover:bg-[#3f404163] rounded-full justify-center">

            <svg viewBox="0 0 24 24" width={20} height={20}>
              <g>
                <path fill="#fff" d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z">
                </path>
              </g>
            </svg>

          </Link>

        </div>

      </div>

    </div>
  )
}