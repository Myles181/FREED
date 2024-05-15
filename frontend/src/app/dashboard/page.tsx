import Image from "next/image";
import Head from "../component/head"
import Sidebar from "../component/sidebar"
import Center from "../component/center"



export default function Dashboard() {
    return (
        <main>
            <Head/>
            <div className="flex gap-4">
            <Sidebar/>
            <Center/>
            </div>
        </main>
  )
}