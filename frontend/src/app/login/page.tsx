"use client";
import Image from "next/image";

export default function Login () {
    return (
        <main>
            <head className="flex justify-between px-16 py-2 h-14 relative shadow">
                <div>
                    <Image src="/logo.png" alt={"img"} width={"40"} height={"40"} className="" />
                </div>
                <button className=" bg-primary w-28 h-10 rounded-full text-white"><a href="./admin">Login</a></button>
            </head>

            <section className="flex flex-col justify-center items-center text-center gap-3 py-6" >
                <h1 className=" font-bold text-2xl">Freed</h1>
                <p className=" w-5/12">Welcome to <a className="text-primary font-semibold" href="#">FREED</a>, the pioneering space where talent meets opportunity in the decentralized world.</p>
                <Image src="/Wavy Buddies Address.png" alt={"img"} width={"420"} height={"420"} className=" top-32 relative" />
            </section>
        </main>

        
    )
}
