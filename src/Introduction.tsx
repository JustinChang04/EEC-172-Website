export default function Introduction() {
    return (
        <div className="h-screen w-full flex flex-col items-start justify-start bg-green-500 text-white p-10 space-y-4">
            <p className="self-start text-6xl">Project Overview</p>
            <p>(Our project) is an innovative cloud-based motion detection system that triggers an alarm when your personal items are unknowingly moved.
                Our product comes as a two-part system. The remote system utilizes a Texas Instruments CC3200 Launchpad with IR control and a simple, intuitive OLED for user interface.
                It uploads the alert state onto an AWS shadow to be read as by the alarm system.
                The alarm system utilizes a Texas Instruments CC3200 Launchpad, an on-board accelerometer for motion detection, and a buzzer acting as an alarm should the user wish to enable that feature.
                When armed, the alarm system will send an email alert to the user via AWS SNS.
            </p>
            <p></p>
        </div>
    )
}