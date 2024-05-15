import Image from "next/image";

export default function Head() {
    return (
        <main className="flex flex-col gap-3 w-64">
            <div className="flex gap-4 shadow px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/like.png" alt={"img"} width={"24"} height={"24"} />
                <p>Rate images</p>
            </div>
            <div className="flex gap-4 shadow px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/element-4.png" alt={"img"} width={"24"} height={"24"} />
                <p>Dashboard</p>
            </div>
            <div className="flex gap-4 shadow px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/search-status.png" alt={"img"} width={"24"} height={"24"} />
                <p>Job Hunt</p>
            </div>
            <div className="flex gap-4 shadow px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/building-4 (1).png" alt={"img"} width={"24"} height={"24"} />
                <p>Start Ups</p>
            </div>
            <div className="flex gap-4 shadow px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/people (1).png" alt={"img"} width={"24"} height={"24"} />
             <p>Community</p>
            </div>
            <div className="flex gap-4 shadow px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/archive.png" alt={"img"} width={"24"} height={"24"} />
              <p>My Projects</p>
            </div>
            <div className="flex gap-4 shadow px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/ranking (2).png" alt={"img"} width={"24"} height={"24"} />
                <p>Contests</p>
            </div>
            <div className="flex gap-4 shadow bg-primary px-8 py-2 hover:bg-primary hover:text-white">
                <Image src="/wallet-check (1).png" alt={"img"} width={"24"} height={"24"} />
                <p>Wallet</p>
            </div>

        </main>
    )
}