import Components from "./Components";
import Implementation from "./Implementation";
import FlowChart from "./assets/Flowchart.png"

export default function Description() {
    return (
        <div className="w-full snap-start bg-[#FAFAFA] flex flex-col text-[#222222] space-y-4 p-4 pt-5">
            <p className="self-start text-5xl">Project Overview</p>
            <p>MotionLink is an innovative cloud-based motion detection system that triggers an alarm when your personal items are unknowingly moved.
                Our product comes as a two-part system. The remote system utilizes a Texas Instruments CC3200 Launchpad with IR control and a simple, intuitive OLED for user interface.
                It uploads the alert state onto an AWS shadow to be read as by the alarm system.
                The alarm system utilizes a Texas Instruments CC3200 Launchpad, an on-board accelerometer for motion detection, and a buzzer acting as an alarm should the user wish to enable that feature.
                When armed, the alarm system will send an email alert to the user via AWS SNS.
            </p>
            <p className="text-5xl mt-5">System Architecture</p>
            <img className="self-center w-6/10 h-auto" src={FlowChart}/>
            <Components/>
            <Implementation/>
        </div>
    )
}