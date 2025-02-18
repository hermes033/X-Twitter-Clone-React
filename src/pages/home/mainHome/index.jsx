import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Stil dosyası
import { forMainHomePosts } from "~/utils/api";
import MainHomeSvg from "./mainHomeSvg";
import { useAccount } from "~/store/auth/hooks";


const MainHome = ({ posts1 }) => {
  const [isLoading, setIsLoading] = useState(true);

  const currentAccount = useAccount()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // 2-3 saniye sonra loading biter

    return () => clearTimeout(timer); // Temizlik için timeout'u temizle
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center h-screen">
          <div className="w-6 h-6 border-4 border-[#1d9bf0] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="w-full max-h-screen">
            {(
              posts1.map((post1) => (
                <div key={post1.id} className="pt-3 w-full max-h-screen min-h-[200px] flex bg-black transition-all hover:bg-[#3c3c3c0a] cursor-pointer">
                  <div className="w-full h-[12px]"></div>
                  <div className="w-[566.4px] h-full">

                    <div className="w-[40px] h-full mr-2">
                      <img src={currentAccount.avatar} alt={currentAccount.username} className="rounded-full  w-[40px] h-[40px]" />
                    </div>
                  </div>

                  <div className="w-[518.4px] flex flex-col mr-5">

                    <div className="w-full h-[20px] flex">

                      <div className="w-[302.1px] flex h-full items-center">
                        <p className="text-[#e7e9ea] font-bold text-[15px] mr-1 hover:underline tracking-wide">{currentAccount.fullName}</p>
                        {post1.isVerified && (
                          <span className="text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[16.02px] h-[16.02px] ml-0.5 mr-2"
                              viewBox="0 0 20 20"
                              fill="#1d9bf0"
                            >
                              <path
                                fillRule="evenodd"
                                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                        <p className="text-[#64686d]">{currentAccount.userName}</p>
                        <p className="hover:underline text-[#64686d]"><span className="text-[#64686d] px-1">·</span>{post1.postDate}Feb 18</p>
                      </div>

                      <div className="w-[18.75px] h-full ml-[190px] -mt-1.5">

                        <div className="w-[34.75px] h-[34.75px] group transition-colors duration-100 rounded-full flex items-center justify-center hover:bg-[#1c9aee17]">
                          <svg viewBox="0 0 24 24" width={20} height={20}>
                            <g>
                              <path fill="#61656a" className="group-hover:fill-[#1c9aee]" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                              </path>
                            </g>
                          </svg>
                        </div>

                      </div>

                    </div>

                    <div className="w-full h-[20px]">
                      <p>{post1.content}</p>
                    </div>

                    <div className="w-full h-[538.99px] pt-4">


                      <div className="w-full h-[516.8px]">
                        {post1.photo || post1.video ? (
                          post1.photo ? (
                            <img
                              src={post1.photo}
                              alt="Post Media"
                              className="object-cover h-full rounded-2xl"
                              width={516.8}
                              height={516.8}
                            />
                          ) : (
                            <iframe
                              className="rounded-2xl object-cover"
                              width={516.8}
                              height={516.8}
                              src={post1.video}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          )
                        ) : null}
                      </div>

                    </div>

                    <MainHomeSvg />

                  </div>
                </div>
              ))
            )}
          </div>






          <div>
            {forMainHomePosts.map((post) => (
              <div
                key={post.id}
                className="bg-black transition-all border-t-[1px]  border-[#2f3336] hover:bg-[#3c3c3c0a] cursor-pointer"
              >
                <div className="w-full h-[12px]"></div>
                <div className="w-[566.4px] h-full ml-[16.8px] flex">

                  <div className="w-[40px] h-full">
                    <img src={post.profilePic} alt={post.username} className="rounded-full w-[40px] h-[40px]" />
                  </div>

                  <div className="w-[518.4px] h-full flex flex-col pl-2">

                    <div className="w-full h-[20px] flex">

                      <div className="w-[302.1px] flex h-full items-center">
                        <p className="text-[#e7e9ea] font-bold text-[15px] hover:underline tracking-wide">{post.username}</p>
                        {post.isVerified && (
                          <span className="text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[16.02px] h-[16.02px] ml-0.5 mr-2"
                              viewBox="0 0 20 20"
                              fill="#1d9bf0"
                            >
                              <path
                                fillRule="evenodd"
                                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                        <p className="text-[#64686d]">{post.nickname}</p>
                        <p className="hover:underline text-[#64686d]"><span className="text-[#64686d] px-1">·</span>{post.postDate}</p>
                      </div>

                      <div className="w-[18.75px] h-full ml-auto -mt-1.5">

                        <div className="w-[34.75px] h-[34.75px] group transition-colors duration-100 rounded-full flex items-center justify-center hover:bg-[#1c9aee17]">
                          <svg viewBox="0 0 24 24" width={20} height={20}>
                            <g>
                              <path fill="#61656a" className="group-hover:fill-[#1c9aee]" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                              </path>
                            </g>
                          </svg>
                        </div>

                      </div>

                    </div>

                    <div className="w-full h-[20px]">
                      <p>{post.content}</p>
                    </div>

                    <div className="w-full h-[538.99px] pt-4">


                      <div className="w-full h-[516.8px]">
                        {post.photo || post.video ? (
                          post.photo ? (
                            <img
                              src={post.photo}
                              alt="Post Media"
                              className="object-cover h-full rounded-2xl"
                              width={516.8}
                              height={516.8}
                            />
                          ) : (
                            <iframe
                              className="rounded-2xl object-cover"
                              width={516.8}
                              height={516.8}
                              src={post.video}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          )
                        ) : null}
                      </div>

                    </div>

                    <MainHomeSvg />

                  </div>

                </div>





              </div>
            ))}
          </div>
        </>

      )}
    </div>
  );
};

export default MainHome;
