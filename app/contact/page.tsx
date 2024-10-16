import Link from "next/link"
import styles from "../contact/contact.module.css"
const Contact = ()=> {
    return(
    <div className={styles.container}>
        <h1 className={styles.header}>This is contact page </h1>
        <ul>
      
    
      <li><Link href="/"> Go to Homepage</Link></li>
      <li><Link href="about"> Go to Aboutpage</Link></li>
      <li><Link href="service"> Go to servicePage</Link></li>
      
      
      </ul>
          
        </div>
    )

}

export default Contact