import classNames from "classnames"
import { useAccount, useAccounts } from "~/store/auth/hooks"
import { NavLink } from "react-router-dom"
import { setCurrentAccount } from "~/store/auth/actions"

export default function AccMore() {

  const accounts = useAccounts()
  const currentAccount = useAccount()

  return (

    <>
      <div className="transition-all duration-[2000]">
        {accounts.map((account, id) => (
          <button type="button"
            disabled={currentAccount.userName == account.userName}
            onClick={() => {
              setCurrentAccount(account)
            }} key={id} className={classNames("py-3 px-4 flex items-center w-[300px] text-left w-full transition-colors", {
              'hover:bg-[#eff3f41a]': currentAccount.userName !== account.userName, 'cursor-default': currentAccount.userName == account.userName // bura bax id nen duzeltmek lazimdi ve a hrefleri link e cevir
            })} >


            <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
            <div className="mx-3 flex-1 text-[15px]">
              <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
              <div className="text-[#71767b]">
                @{account.userName}
              </div>
            </div>

            {
              currentAccount.userName === account.userName && (
                <svg viewBox="0 0 24 24" className="mr-2 ml-3" width={18.75} height={18.75}>
                  <path fill="#00ba7c" d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z">
                  </path>
                </svg>
              )
            }
          </button >
        ))}

        <div className=" flex flex-col bg-[#2f3336] my-3 h-px">
          <NavLink to='/login' className='mt-3 py-3 px-4 text-left h-[44px] leading-[20px] transition-colors hover:bg-[#eff3f41a] text-[15px] text-[#e7e9ea] font-bold w-full'>
            Add an existing account
          </NavLink>

          <NavLink to='/login' className='py-3 px-4 leading-[20px] h-[44px] text-left transition-colors hover:bg-[#eff3f41a] text-[15px] text-[#e7e9ea] font-bold w-full'>
            Manage accounts
          </NavLink>

          <NavLink to='/login' className='leading-[20px] py-3 px-4 text-left h-[44px] transition-colors hover:bg-[#eff3f41a] text-[15px] text-[#e7e9ea] font-bold w-full'>
            Log out @{currentAccount.userName}
          </NavLink>
        </div>
      </div>
      <svg viewBox="0 0 24 24" width={13.54} height={7.45} className="absolute  caret-slate-100">
        <g>
          <path className="caret-slate-300" d="M22 17H2L12 6l10 11z">
          </path>
        </g>
      </svg>
    </>
  )
}