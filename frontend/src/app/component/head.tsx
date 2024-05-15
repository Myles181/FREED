import Image from "next/image";

export default function Head() {
    return (
        <main className="flex justify-between px-16 shadow border items-center py-1 h-14">
            <div>
                <a href="./freed"><Image src="/LOGO (2).png" alt={"img"} width={"50"} height={"50"} /></a>
            </div>
            <div>
                <input className="shadow appearance-none border rounded-2xl w-96 py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="" />
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <Image src="/massage.png" alt={"img"} width={"24"} height={"24"} />

                </div>
                <div>
                    <Image src="/set.png" alt={"img"} width={"24"} height={"24"} />
                </div>
                <div>
                    <Image src="/notif.png" alt={"img"} width={"24"} height={"24"} />
                </div>
                <div>
                    <Image src="/Frame 50 (1).png" alt={"img"} width={"30"} height={"30"} />
                </div>

            </div>
        </main>
    )
}