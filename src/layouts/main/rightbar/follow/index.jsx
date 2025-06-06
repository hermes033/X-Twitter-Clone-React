import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "~/components/button";
import { followApi } from "~/utils/followApi";

export default function WhoToFollow() {

const [btnClick,setBtnClick] = useState('Follow');

  return (
    <aside className="w-[350px] h-[295.79px] rounded-2xl mb-[16px] flex flex-col border border-[#2F3336]">
      {/* Başlık */}
      <div className="w-full h-[48px] flex justify-between p-[12px]">
        <h2 className="text-[20px] font-bold text-[#e7e9ea]">Who to follow</h2>
      </div>

      {/* Kullanıcı Listesi */}
      <ul className="w-full">
        {followApi.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between p-[12px] transition-all"
          >
            <div className="flex items-center">
              {/* Kullanıcı Profil Resmi */}
              <img
                src={user.logoImg}
                alt={user.accountName}
                className="rounded-md cursor-pointer"
                width={40}
                height={40}
              />

              {/* Kullanıcı Bilgileri */}
              <Link to={`/${user.userName}`} className="ml-2">
                <div className="flex flex-col">
                  <span className="text-[#E7E9EA] hover:underline transition-all font-bold">{user.accountName}</span>
                  <span className="text-[#575B5F]">@{user.userName}</span>
                </div>
              </Link>
            </div>

            {/* Takip Et/Takip Ediliyor Butonu */}
            <button onClick={()=>{setBtnClick('Following')}} className="w-[78px] h-[32px] bg-[#eff3f4] hover:bg-[#b6b6b6] font-semibold rounded-full flex items-center text-black justify-center transition-colors">
              {btnClick}
            </button>
          </li>
        ))}
      </ul>

      {/* Daha Fazlasını Göster */}
      <div className="pl-[16px] pt-[4px]">
        <Link to="showmore" className="text-[#1880c7]">
          Show More
        </Link>
      </div>
    </aside>
  );
}
