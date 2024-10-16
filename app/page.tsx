

import Link from "next/link"


export default function Home(){
  return(
    
    <div>
      {/* <h1 style={{color:"black", backgroundColor:"lightpink", alignItems:"center"}}>This is a Home page</h1> */}
    
      <ul className=" h-12 bg flex justify-between bg-black  m-text-1">
      
         <h1 className="text-green text-xl">Shajiya</h1>
        <li><Link href="/">Home</Link></li>
        <li><Link href="about" target="_blank">About</Link></li>
        <li><Link href="contact">Contact</Link></li>
        <li><Link href="service">service</Link></li>
        
        
        </ul>
        <h1 style={{color:"black", backgroundColor:"lightpink", alignItems:"center"}}>This is a Home page</h1>
      </div>
      
    
    
  )
}

