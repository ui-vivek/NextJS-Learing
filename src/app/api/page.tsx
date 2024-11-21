"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
const Api = () => {
    const route = useRouter();
  return (
    <div>
        <button onClick={()=>route.push('/api/serverside')}>Server Side Rendering</button>
        <br />
        <br />
        <br />
        <Link href='/api/clientside'>Client Side Rendering</Link>
        <br />
        <br />
        <br />
        <button onClick={()=> route.push('/api/clientandserver')}>Client rendireing inside Server rendering</button>
        <br />
        <br />
        <br />
        <Link href={'/api/serverandclient'}>Server rendering inside client rendering</Link>
    </div>
  )
}

export default Api