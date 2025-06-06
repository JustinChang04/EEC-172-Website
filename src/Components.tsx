function Box(props: {title: String, description: String}) {
    return (
        <div className="w-2/10 flex flex-col items-start outline-2 rounded-lg p-4">
            <b className="text-xl">{props.title}:</b>
            <p>{props.description}</p>
        </div>
    )
}

export default function Components() {
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-8">
            <p className="self-start text-5xl">Components</p>
            <div className="w-full h-65 flex flex-row justify-start space-x-10">
                <Box
                    title="IR Remote and Receiver"
                    description="The IR remote control system provides a remote keyboard for inputting the password and allows the user to toggle the buzzer and arming state in the menu."
                />
                <Box
                    title="Accelerometer" 
                    description="The accelerometer interacts with the alarm board over I2C to provide motion data."
                />
                <Box
                    title="CC3200 Launchpad"
                    description="Across both systems, the TI CC3200 LaunchPad handles IR signals, drives the OLED display, performs POST and GET requests to AWS and reads the accelerometer over I2C."
                />
                <Box
                    title="PN2222 NPN Transistor"
                    description="The PN2222 NPN transistor allows the system to drive the buzzer by amplifying the GPIO's weak signal."
                />
            </div>
            <div className="w-full h-65 flex flex-row justify-start space-x-10">
                <Box
                    title="OLED Display"
                    description="The alarm system drives the OLED display over SPI. The display shows the password and the selected arming state in the menu on the control board."
                />
                <Box
                    title="AWS"
                    description="The system utilizes AWS device shadows to update the alarm's arming state over the internet. It also allows for email notifications in the event of a possible theft."
                />
                <Box
                    title="Active Buzzer"
                    description="When enabled over the cloud, the buzzer sounds when the alarm system is moved."
                />
            </div>
        </div>
    )
}