"use client";
import Image from "next/image";

export default function Adminlogin () {
    return (
        <main>
            <head className="flex justify-between px-16 py-2 h-14 relative shadow">
                <div>
                    <Image src="/logo.png" alt={"img"} width={"40"} height={"40"} className="" />
                </div>
                <button className=" bg-primary w-28 h-10 rounded-full text-white">Login</button>
            </head>

            <section className="flex justify-between-">
                <div className="w-6/12">
                    <Image src="/Group 18.png" alt={"img"} width={"440"} height={"100"} className="" />
                </div>
                <div className="flex flex-col items-center- justify-center gap-3">
                    <div className="flex justify-center">
                        <Image src="/logo.png" alt={"img"} width={"80"} height={"80"} className="" />
                    </div>
                    <p className=" text-semi font-semibold">Choose The login method you want</p>
                    <button className="shadow px-10- py-2 text-primary font-semibold rounded-xl">Connect Wallet</button>
                    <p className=" text-semi font-bold text-left my-3">Recommended</p>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col border shadow items-center w-40 h-36 rounded-xl">
                            <Image src="/image 1 (1).png" alt={"img"} width={"100"} height={"100"} className="py-1" />
                            <p className=" text-gray-800 font-bold">Metamask</p>
                        </div>
                        <div className="flex flex-col border shadow items-center w-40 h-36 rounded-xl">
                            <Image src="/image 2.png" alt={"img"} width={"100"} height={"100"} className="" />
                            <p className=" text-gray-800 font-bold">Wallet connect</p>
                        </div>
                        <div className="flex flex-col border shadow items-center w-40 h-36 rounded-xl">
                            <Image src="/image 3 (1).png" alt={"img"} width={"100"} height={"100"} className="" />
                            <p className=" text-semi font-bold">Coinbase</p>
                        </div>

                    </div>
                    <p className="text-gray-800 font-bold text-center">OR</p>
                    <section className="flex justify-center gap-6">
                        <Image src="/Twitter.png" alt={"img"} width={"40"} height={"40"} className="" />
                        <Image src="/Linkedin.png" alt={"img"} width={"40"} height={"40"} className="" />
                        <Image src="/Google.png" alt={"img"} width={"40"} height={"40"} className="" />

                    </section>
                </div>
            </section>
        </main>
    )
}
