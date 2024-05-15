import Image from "next/image";

export default function Center() {
    return (
        <main className="w-9/12">
            <h1 className="text-primary text-2xl font-bold">Your Wallet</h1>
            <div className="flex flex-row justify-between bg-purple-400 px-8 py-4 rounded-2xl my-2">
                <div>
                    <h3 className="text-primary font-bold text-4xl">10.244</h3>
                    <p className="text-primary font-bold text-xl">$30,000</p>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="bg-primary px-2 rounded text-white py-1">+ Deposit Crypto</button>
                    <p className=" bg-purple-300 px-2 py-1 rounded text-white">- Withdraw </p>
                </div>
            </div>

            <h3 className=" font-semibold text-semi text-xl my-3">All Transaction Details</h3>

            <section>
                <div className="flex flex-row justify-between border-b border-primary my-4">
                    <div>
                        <p>Details</p>
                        <div className="border border-primary"></div>
                    </div>
                    <div className=" ">
                        <h3>Sent</h3>
                        <div className="border border-primary"></div>
                    </div>
                    <div className=""><h3>Received</h3></div>
                    <div><h3>Chain</h3></div>
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center border-b border-primary my-4">
                    <div>
                        <h3 className="text-primary font-semibold">Nuetech Auto Repair</h3>
                        <p className="text-semi text-sm">Address (0x274hfu...................3A)</p>
                        <p className="text-semi text-sm">04 Apr, 2024m- 03:47 pm</p>
                        <div className="border border-primary"></div>

                    </div>
                    <div className="border-b-2 border-primary w-16"></div>
                    <div>$1000</div>
                    <div><p>4.5 (ETH)</p></div>
                </div>
            </section>

            <section>
                <div className="flex flex-row justify-between items-center border-b border-primary my-4">
                    <div>
                        <h3 className="text-primary font-semibold">Nuetech Auto Repair</h3>
                        <p className="text-semi text-sm">Address (0x274hfu...................3A)</p>
                        <p className="text-semi text-sm">04 Apr, 2024m- 03:47 pm</p>
                        <div className="border border-primary border-1"></div>

                    </div>
                    <div className="border-b-2 border-primary w-16"></div>
                    <div>$7000</div>
                    <div><p>4.5 (ETH)</p></div>
                </div>

            </section>

            <section>
                <div className="flex justify-between items-center border-b border-primary">
                    <div>
                        <h3 className="text-primary font-semibold">Nuetech Auto Repair</h3>
                        <p className="text-semi text-sm">Address (0x274hfu...................3A)</p>
                        <p className="text-semi text-sm">04 Apr, 2024m- 03:47 pm</p>
                        <div className="border border-primary"></div>

                    </div>
                    <div className="border-b-2 border-primary w-16"></div>
                    <div>$5000</div>
                    <div><p>4.5 (ETH)</p></div>
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center border-b border-primary my-4">
                    <div>
                        <h3 className="text-primary font-semibold">Nuetech Auto Repair</h3>
                        <p className="text-semi text-sm">Address (0x274hfu...................3A)</p>
                        <p className="text-semi text-sm">04 Apr, 2024m- 03:47 pm</p>
                        <div className="border border-primary border-b-1"></div>

                    </div>
                    <div className="border-b-2 border-primary w-16"></div>
                    <div>$7000</div>
                    <div><p>4.5 (ETH)</p></div>
                </div>
            </section>

        </main>
    )
}