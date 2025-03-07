import { useState, useEffect, useRef } from "react";
import { useClickAway } from "react-use";

export default function ExploreInput() {


  const [query, setQuery] = useState("");
  const [color, setColor] = useState("#71767B"); // Başlangıç rengi (gri)
  const [focus, setFocus] = useState(false)

  const ref = useRef()
  useClickAway(ref, () => {
    setFocus(false)
  });



  // Tıklama dışında renk sıfırlama için global olay dinleyicisi
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Eğer label'e tıklanmadıysa rengi sıfırla
      if (!event.target.closest(".search-label")) {
        setColor("#71767B"); // Eski renk
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-[53px] w-[501.8px] h-[53px] flex items-center">
      <label
        onClick={() => {
          setColor("#1d9bf0"); // Tıklandığında renk mavi olur
        }}
        className="search-label h-[43px] rounded-full bg-black w-full relative group border-[0.1px] border-[#71767b70]  focus-within:border-[#1d9bf0] focus-within:bg-black"
      >
        <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
          <svg viewBox="0 0 24 24" className="none min-w-[32px]" height={18.75}>
            <path
              fill={color} // Renk state ile yönetiliyor
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            ></path>
          </svg>
        </div>
        <input
          onFocus={() => { setFocus(true) }}
          onBlur={() => { setFocus(false) }}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoCorrect="off"
          className="font-medium w-full h-full bg-transparent outline-none rounded-full pl-[56px] text-[15px] placeholder-[#707171]"
          placeholder="Search"
        />
        {(query && focus) && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="w-[22px] h-[22px] rounded-full bg-[#1d9bf0] flex items-center justify-center text-black min-w-[22px] right-3 absolute top-1/2 -translate-y-1/2 invisible group-focus-within:visible"
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="currentColor"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              ></path>
            </svg>
          </button>
        )}
      </label>

      {focus && (
        <div className="absolute top-12 w-[500.8px] min-h-[100px] flex justify-center text-center rounded-lg max-h-[calc(80vh-53px)  bg-black shadow-box">
          {query ? query : <span className="p-3 pt-5 leading-5 text-[#71767b]">Try searching for people, lists, or keywords</span>}
        </div>
      )}
    </div>
  );
}
