"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full font-sans">
      <nav className=" w-screen shadow-lg">
        <div className=" flex justify-between items-center font-sans px-16 my-2">
          <div>
            <Image src="/LOGO (2).png" alt={"img"} width={"50"} height={"50"}/>
          </div>
          <div>
            <ul className="flex font-sans font-light gap-10">
              <li><a className=" font-medium" href="">About</a></li>
              <li><a className=" font-medium" href="">Features</a></li>
              <li><a className=" font-medium" href="">How it works</a></li>
              <li><a className=" font-medium" href="">Faq</a></li>
              <li><a className=" font-medium" href="">Contact</a></li>

            </ul>
          </div>
          <div>
            <button className=" bg-primary py-1 px-6 text-white rounded-lg"><a href="./admin">Sign Up</a></button>
          </div>
        </div>
      </nav>

      <div className="my-10">
        <div className="flex flex-row text-center justify-between">
          <div className="flex flex-col text-center">
            <div className="mx-32 relative">
              <Image src="/Group 11.png" alt={"img"} width={"100"} height={"100"} className="" />
              <div className="px-20">
                <h1 className="text-6xl font-bold w-11/12 text-center">Welcome To <a className=" text-primary" href="#">Freed</a>, the  Future Of Freelancing</h1>
              </div>
              <div className="flex my-4">
                <p className="text-xl w-4/6 mx-44" >Join our decentralized platform and experience the benefits of blockchain technology in the freelance industry.</p>

              </div>
              <Image src="/Group 10.png" alt={"img"} width={"100"} height={"100"} className=" left-[860px] bottom-20 relative" />

            </div>
            <div className="flex gap-6 left-[500px] relative">
              <button className="bg-primary py-1 px-4 text-white rounded-lg"><a href="./login">Get Started</a></button>
              <button className="border border-primary  py-1 px-4 text-black rounded-lg"> <a href="./admin">Learn More</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <Image src="/col2.png" alt={"img"} width={"1100"} height={"500"} className=" " />
      </div>

      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col gap-4 px-20">
          <h1>About</h1>
          <h2 className="text-4xl w-5/6 font-bold">Experience a Decentralized Marketplace for Transparent <a className=" text-primary" href="">and Fair Freelancing</a> </h2>
          <p className="text-sm w-9/12">Freed&apos;s decentralized marketplace ensures transparency and fairness by eliminating intermediaries and providing a secure environment for freelancers and clients to collaborate.</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
              <p>Transparent Transactions</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
              <p>Fair and Equitable Environment</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
              <p>Elemination of third parties</p>
            </div>
          </div>
        </div>
        <div className="top-10 right-40 relative">
          <Image src="/iPad Pro.png" alt={"img"} width={"1000"} height={"500"}/>
        </div>
      </div>


      <div className="flex gap-20 px-16 py-20">
        <div>
          <p>Features</p>
          <Image src="/col112.png" alt={"img"} width={"800"} height={"500"} className="py-12" />
        </div>

        <div className="flex flex-col gap-4">
          <p className=" font-bold text-4xl w-10/12">Unlock Global Opportunities with Cryptocurrency Payments on Freed</p>
          <p className=" w-7/12 text-sm">Freed empowers freelancers worldwide by enabling cryptocurrency payments, providing access to the freelance economy without banking limitations.</p>

          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-4">
              <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
              <p className=" text-sm">Transparent Transactions</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
              <p className=" text-sm">Fair and Equitable Environment</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/trade.png" alt={"img"} width={"20"} height={"20"}/>
              <p className=" text-sm">Elemination of third parties</p>
            </div>
            <div className="flex gap-6 my-4">
              <button className="bg-primary py-1 px-4 text-white rounded-lg">Sign Up</button>
              <button className="text-primary py-1 px-4 rounded-lg"> Learn More</button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row justify-center px-20">
        <div>
          <h1 className="font-bold text-4xl w-5/6">Intuitive Dashboards for Freelancers and Clients</h1>
          <div className="flex gap-6 my-24">
            <button className="bg-primary py-1 px-4 text-white rounded-lg">Sign Up</button>
            <button className="text-primary  py-1 px-4 rounded-lg flex  gap-4 items-center"> Learn More <Image src="/arrow-side.png" alt={"img"} width={"20"} height={"20"} className="" /> </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-4/6">
          <p className="">Freed provides comprehensive user dashboards that offer insights into job statuses, financials, communications, and more. These intuitive dashboards enhance user experience and productivity.</p>
          <div className="flex gap-4">
            <div>
              <h3 className=" font-bold">Overview</h3>
              <p>Get a clear overview of your ongoing projects, earnings, and communication history.</p>
            </div>
            <div>
              <h3 className=" font-bold">Financials</h3>
              <p>Track your earnings, invoices, and payments in one centralized location.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around ">
        <Image src="/col2.png" alt={"img"} width={"1100"} height={"1000"} className=" " />
      </div>

      <div>
        <div className="flex justify-center items-center- py-36">
          <div className=" top-10- left-14 relative  mx-20-">
            <Image src="/iMac Mockup (24 inch).png" alt={"img"} width={"1000"} height={"1000"} className="" />
          </div>
          <div className="flex flex-col gap-4 px-20">
            <h2 className=" text-4xl w-5/6 font-bold">Expand Your Skills with Freed&apos;s Learning Opportunities</h2>
            <p className=" text-sm w-5/6">At Freed, we believe in continuous growth and learning. That&apos;s why we offer a range of resources and workshops to help you enhance your skills and stay ahead in your freelance career.</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
                <p>Access to Expert-led Workshops</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
                <p>Interactive Learning Resources</p>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/trade.png" alt={"img"} width={"20"} height={"20"} className="" />
                <p>Community Forums for Knowledge Sharing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="border border-primary p-10">
          <h2 className=" font-bold text-2xl w-80">Join the Freed Community Today</h2>
          <p>Discover a new way to freelance and connect with clients globally.</p>
          <div className="flex gap-6 my-6">
            <button className="bg-primary py-1 px-9 text-white rounded-lg">Sign Up</button>
            <button className="text-primary  border border-primary py-2 px-2 rounded-lg flex  gap-2 items-center"> Learn More <Image src="/arrow-side.png" alt={"img"} width={"20"} height={"20"} className="" /> </button>
          </div>
        </div>
        <div className=" bg-purple-600 h-72 w-96 flex items-center ">
          <div className=" text-center px-28 py-8">
            <Image src="/LOGO (2).png" alt={"img"} width={"200"} height={"200"} className="" />
          </div>
        </div>
      </div>

      <div className=" bg-primary text-white my-20">
        <div className="flex flex-col justify-center text-center gap-4 p-16">
          <h1 className=" text-3xl font-bold w-4/12-">Stay Informed with <br /> Our Newsletter</h1>
          <p>Subscribe to receive updates, industry insights, and valuable tips.</p>
          <div className="flex gap-6 px-[400px]">
            <input className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <button className="bg-primary px-6 rounded-lg">Subscribe</button>
          </div>

          By continuing, you agree to our terms and condition
        </div>
      </div>

      <div className="flex justify-center items-center text-center gap-10 w-8/12- mx-56-">
        <div className=" flex items-center flex-col gap- text-center ">
          <Image src="/sms (1).png" alt={"img"} width={"40"} height={"40"} className="" />
          <p className=" font-medium w-72">Feel free to reach out to us with any questions or inquiries.</p>
          <p className="font-semibold">hello@cartesifreed.io</p>
        </div>
        <div className=" flex items-center flex-col gap-3 text-center ">
          <Image src="/location.png" alt={"img"} width={"40"} height={"40"} className="" />

          <p className=" font-medium w-60">We&apos;re available to assist you during business hours.</p>
          <p className=" font-semibold">+1 (555) 123-4567</p>
        </div>
        <div className=" flex items-center flex-col gap-3 text-center ">
          <Image src="/call-calling.png" alt={"img"} width={"40"} height={"40"} className="" />

          <p className=" font-medium w-80">Visit our office for a personal consultation or meeting.</p>
          <p className=" font-semibold">123 Main St, Anytown, USA</p>

        </div>
      </div>

      <section className="w-full my-32">
        <div className="flex justify-between items-center px-20">
          <div>
            <Image src="/LOGO (2).png" alt={"img"} width={"50"} height={"50"} className="" />
          </div>
          <div>
            <ul className="flex font-sans font-light gap-10">
              <li><a href="">About</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">How it works</a></li>
              <li><a href="">Faq</a></li>
              <li><a href="">Contact</a></li>

            </ul>
          </div>
          <div className="flex gap-4">
            <Image src="/Vector.png" alt={"img"} width={"30"} height={"30"} className="" />
            <Image src="/Vector (1).png" alt={"img"} width={"30"} height={"30"} className="" />
            <Image src="/Vector.png" alt={"img"} width={"30"} height={"30"} className="" />
            <Image src="/Group (2).png" alt={"img"} width={"30"} height={"30"} className="" />

          </div>

        </div>

        <div className="border border-black flex w-11/12 mx-14"></div>

        <div className="flex gap-8  justify-center py-24- top-10 relative">
          <p className="text-center">© 2023 Freed. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Cookie Policy</a>
          </div>
        </div>
      </section>


    </main >
  )
}