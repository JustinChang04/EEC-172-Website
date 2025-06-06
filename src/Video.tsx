function Box(props: {title: String, description: String, url: String}) {
    return (
        <div className="w-[15%] flex flex-col items-start outline-2 rounded-lg p-4">
            <b className="text-l">{props.title}:</b>
            <a className="underline text-blue-600" href="https://www.ti.com/tool/CC3200-LAUNCHXL">{props.description}</a>
        </div>
    )
}

export default function Video() {
    return (
        <div className="w-full snap-start flex flex-col space-y-4 mt-5 p-4 bg-[#FAFAFA] text-[#222222]">
            <p className="self-start text-5xl">Video Demo</p>
            <iframe 
            className="w-300 h-150 self-center"
            src="https://www.youtube.com/embed/4Gg_YfQ5YO0?si=uRXL21xLIYfIl2Fx"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen={true}/>
            <p className="self-start text-5xl">Documentation</p>
            <div className="flex flex-row justify-center space-x-20">
                <Box
                    title="TI CC3200-LAUNCHXL"
                    description="Product Page"
                    url="https://www.ti.com/tool/CC3200-LAUNCHXL"/>
                <Box
                    title="PN2222 NPN Transistor"
                    description="Product Datasheet"
                    url="https://users.ece.utexas.edu/~valvano/Datasheets/PN2222-D.pdf"/>
                <Box
                    title="Adafruit OLED Display"
                    description="Product Page"
                    url="https://www.adafruit.com/product/1431"
                />
                <Box
                    title="Sony SIRC Protocol"
                    description="Protocol Datasheet"
                    url="https://faculty-web.msoe.edu/johnsontimoj/Common/FILES/sony_sirc_protocol.pdf"
                />
            </div>
            <p className="self-start text-5xl">Contributions</p>
            <div className="flex flex-row space-x-4 justify-center">
                <div className="w-2/10 flex flex-col items-start outline-2 rounded-lg p-4">
                    <p className="font-bold text-2xl">Savio:</p>
                    <p>Control system, OLED menu UI, remote control functionality</p>
                </div>
                <div className="w-2/10 flex flex-col items-start outline-2 rounded-lg p-4">
                    <p className="font-bold text-2xl">Justin:</p>
                    <p>Alarm system, setting up AWS device shadows</p>
                </div>
            </div>
        </div>
    )
}