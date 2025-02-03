import ProfileMainBottom from "./profMainBottom";

export default function ProfileMain() {
  return (
    <div className="w-full h-[408.8px] flex flex-col relative">
      
      {/* Üstteki div (arka planda kalacak) */}
      <div className="w-full h-[199.46px] bg-[#333639] absolute top-0 left-0 z-[-1]"></div>

      {/* Alttaki div */}
      <div className="h-[193.34px] w-[200px] mt-[126px] ml-[16px] relative z-10">
        <ProfileMainBottom />
      </div>

    </div>
  );
}
