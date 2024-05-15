import Image from "next/image";

export default function Admin() {
    return (
        <main>
            <div className="border px-16 py-1 h-16 shadow">
                <div>
                    <a href="./freed"><Image src="/logo.png" alt={"img"} width={"50"} height={"50"} /></a>
                </div>
            </div>

            <section className="flex flex-col justify-center items-center my-8 gap-8">
                <h1 className="text-center text-2xl font-semibold">Set Up your profile</h1>
                <div className="flex flex-row justify-center items-center text-center gap-8 py-4">
                    <div className="border border-primary shadow h-52 w-80 rounded-lg px-6 py-6 items-center hover:shadow-xl">
                        <div className="flex flex-row justify-between items-center">
                            <Image src="/Moneyverse Buy Online.png" alt={"img"} width={"60"} height={"60"} />
                            <div className="bg-primary h-8 w-8 rounded"></div>
                        </div>
                        <h1 className="py-6 text-2xl font-medium w-5/6 text-left">I&apos;m a client, hiring for a project</h1>
                    </div>
                    <div className="border border-primary shadow h-52 w-80 rounded-lg px-6 py-6 items-center hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <Image src="/Moneyverse Bitcoin Balance.png" alt={"img"} width={"60"} height={"60"} />
                            <div className="bg-purple-300 h-8 w-8 rounded"></div>
                        </div>
                        <p className="py-6 text-2xl font-medium w-5/6 text-left">I&apos;m a freelancer looking for work</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 my-6 items-center">
                    <button className="bg-primary text-white px-24 py-2 rounded-lg"><a href="./dashboard">Continue</a></button>
                    <p className="text-sm">Already have an account ?<a className="text-primary font-medium" href="./login">Log in</a></p>
                </div>
            </section>
        </main>


    )
}
