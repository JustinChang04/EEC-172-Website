import Description from "./Description"
import LandingPage from "./LandingPage"

import Video from "./Video"

function App() {
  document.title = "MotionLink - A Cloud-Based, Motion Detection Security System"

  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      <LandingPage/>
      <Description/>
      <Video/>
    </div>
  )
}

export default App
