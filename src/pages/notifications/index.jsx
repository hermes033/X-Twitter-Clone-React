import { Helmet } from 'react-helmet-async'
import NotificationsMain from './notifMain'
import NotfLinkComp from './notLink'
import NotTop from './notifTop'

function Notifications() {
  return (
    <div>
      <Helmet>
        <title>Notifications / X</title>
      </Helmet>

      {/* Üst kısım */}
      <div className='w-[599px] h-[106.8px] fixed top-0 bg-black border-[#3d4043] border-b-[0.1px] border-l-0 border-t-0 z-[0]'>
        <NotTop />
        <NotfLinkComp />
      </div>

      <div className='relative z-[-1]'>
        <NotificationsMain />
      </div>
    </div>
  )
}

export default Notifications