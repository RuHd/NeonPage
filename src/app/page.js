import './page.scss'
import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";
import Panel from "@/components/Panel/Panel";
import Description from "@/components/Description/Description";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Home() {
  return (
    <div className={"page"}>
      <Header/>
      <main>
        <section className="hero">
          
          <div className="hero-content">
            <h1>Neon Landing Page</h1>
            <p>This is a simple landing page created with Next.js and SCSS.</p>
            <button>Learn More</button>
          </div>
          
          
        </section>
        <section className="projects" >
          <h2>Neon Ideas</h2>
          <ul>
              <li>
                <Card cardName = {"Style"}/>
              </li>
              <li>
                <Card cardName = {"Style"}/>
              </li>
              <li>
                <Card cardName = {"Style"}/>
              </li>
              <li>
                <Card cardName = {"Style"}/>
              </li>
          </ul>
        </section>
        <Panel/>
        <Description/>
      </main>
      <footer>
        <section className='footer-content'>
          <h2>Neon Page</h2>
    
          <div className='aboutus-links'>
            <h3>About Us</h3>
            <ul>
              <li>Product</li>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Company</li>
              <li>Support</li>
            </ul>
          </div>
          <div className='socials'>
            <h3>Social Medias</h3>
            <ul>
              <li>
                <FaFacebook className="social-icon" fill='white' size={30}/>
              </li>
              <li>
                <FaInstagram className="social-icon" fill='white' size={30}/>
              </li>
              <li>
                <FaTwitter className="social-icon" fill='white' size={30}/>
              </li>
            </ul>
          </div>
        </section>
        <p>Made By Ruan Mesquita - 2025</p>
      </footer>
    </div>
  );
}
