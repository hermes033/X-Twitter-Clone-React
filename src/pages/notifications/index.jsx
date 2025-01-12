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
      <div
        className='h-[106.8px] fixed z-10 top-0 border-r-[1px] bg-black border-[#3d4043] border-b-[0.1px] border-l-0 border-t-0'
      >
        <NotTop />
        <NotfLinkComp />
      </div>

      <div>
        <NotificationsMain />
      </div>

    </div>
  )
}

export default Notifications