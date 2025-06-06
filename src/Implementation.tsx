function Box(props: {title: String, description: String}) {
    return (
        <div className="w-3/10 flex flex-col items-start outline-2 rounded-lg p-4">
            <b className="text-xl">{props.title}:</b>
            <p>{props.description}</p>
        </div>
    )
}

export default function Implementation() {
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-8 pt-10">
            <p className="self-start text-5xl">Implementation</p>
            <div className="w-full h-[55%] flex flex-row justify-start space-x-10">
                <Box
                    title="IR Remote Keyboard System"
                    description="The IR remote and receiver allow the user to log in to the menu on the system board, preventing unauthorized access of the system"/>
                <Box
                    title="Menu UI" 
                    description="The menu UI on the system board allows displays the arming state and buzzer state. The user uses IR control to toggle states and switch between the arming and buzzer options."/>
                <Box
                    title="AWS Arming State"
                    description="When the user presses send on the control board, the board updates systems arming state via a POST request to AWS. The alarm board periodically updates its arming state via a GET request from the same AWS endpoint."
                />
            </div>
            <div className="w-full h-[55%] flex flex-row justify-start space-x-10">
                <Box
                    title="Accelerometer"
                    description="The alarm system interacts with the the onboard accelerometer over I2C. When armed, the board triggers the alarm when the accelerometer magnitude reaches a certain threshold."/>
                <Box
                    title="AWS Alarm"
                    description="In the armed state, upon triggering the alarm, the alarm board will send a notification to an AWS device shadow that sends an SNS notification to the user's email."/>
            </div>
        </div>
    )
}