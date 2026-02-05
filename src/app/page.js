import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TKSBox from '@/components/TKSBox';
import SubmitButton from '@/components/SubmitButton';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>INTERNATIONAL CONFERENCE ON TRADITIONAL KNOWLEDGE SYSTEM</h1>
            <p className="organized-by">Organized by</p>
            <p className="institute">Department of Architecture and Planning<br />National Institute of Technology Patna, <br />Ashok Rajpath, Patna, Bihar, India</p>
          </div>
          <div className="hero-logo">
            <img src="/img/image.webp" alt="NIT Patna Logo" />
            <p><b>National Institute of Technology Patna</b></p>
            <div className="partner"></div>
            <SubmitButton />
            <p className="event-date">Event Date: 5th & 6th June, 2026</p>
          </div>
        </div>
      </section>

      {/* Triangle Divider */}
      <div className="triangle-divider"></div>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="container">
          <h2>Introduction</h2>
          <div className="intro-content">
            <div className="intro-text">
              <p>Traditional Knowledge Systems (TKS) represent the accumulated knowledge, innovations,
                and practices of indigenous and local communities around the world. These systems have been
                developed over centuries of adaptation and are passed down from generation to generation. 
                However, many of these systems, in the present era of technological advancement and globalization, 
                many of these knowledge systems are dying due to neglect, in the absence of measures for their conservation 
                and preservation. The International Conference on Traditional Knowledge System (ICTKS) aims to bring together 
                researchers, practitioners, and policymakers to discuss the preservation, documentation, and contemporary
                applications of these valuable systems.</p>
              <p>The conference will focus on various aspects of traditional knowledge including architecture, planning,
                medicine, agriculture, and environmental management. We invite scholars from diverse disciplines to contribute
                their research and insights to this important dialogue.</p>
            </div>
            <div className="intro-media">
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/example" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="intro-buttons">
                <Link href="#" className="btn">Download Brochure</Link>
                <Link href="#" className="btn">Template Download</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="scope">
        <div className="container">
          <h2>Scope of the Conference</h2>
          <p>The conference will cover a wide range of topics related to traditional knowledge systems, with particular emphasis on their application in contemporary contexts. Key areas of focus include:</p>
          
          <div className="scope-cards">
            <div className="card">
              <i className="fas fa-archway"></i>
              <h3>Traditional Architecture</h3>
              <p>Exploring indigenous architectural techniques, materials, and sustainable design principles.</p>
            </div>
            <div className="card">
              <i className="fas fa-city"></i>
              <h3>Urban Planning</h3>
              <p>Traditional approaches to settlement patterns, water management, and community spaces.</p>
            </div>
            <div className="card">
              <i className="fas fa-leaf"></i>
              <h3>Environmental Management</h3>
              <p>Indigenous practices for biodiversity conservation and natural resource management.</p>
            </div>
            <div className="card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Cultural Preservation</h3>
              <p>Documentation and revitalization of traditional knowledge systems in modern contexts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TKS Sections */}
      <section className="tks-box">
        <p className="key-areas-title"><b>Key Areas</b></p>
        
        {/* First Box - TKS in Architecture */}
        <TKSBox title="TKS in architecture and planning">
          <ol>
            <li>
              <h2>Indigenous Architectural Styles and Practices</h2>
              <ul>
                <li>Study of traditional building techniques, materials, and designs used by indigenous communities.</li>
                <li>Influence of climate, geography, and culture on architectural forms.</li>
                <li>Vernacular architecture and its sustainable practices in local contexts.</li>
              </ul>
            </li>
            <li>
              <h2>Sustainable Building Materials in Traditional Architecture</h2>
              <ul>
                <li>Use of local, natural materials such as mud, bamboo, timber, and stone in traditional construction.</li>
                <li>Benefits of using these materials for energy efficiency and ecological sustainability.</li>
                <li>The role of traditional construction in reducing carbon footprints.</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Urban Planning and Spatial Organization</h2>
              <ul>
                <li>Indigenous urban planning principles, including village layouts and space usage.</li>
                <li>Relationship between natural landscapes, water bodies, and settlement patterns in traditional planning.</li>
                <li>Social and cultural dimensions of space in indigenous communities (e.g., sacred spaces, community centers).</li>
              </ul>
            </li>
            <li>
              <h2>Climate-Responsive Traditional Architecture</h2>
              <ul>
                <li>How traditional knowledge systems have adapted architecture to different climatic conditions.</li>
                <li>Passive design strategies in traditional architecture (e.g., natural ventilation, thermal mass, shading).</li>
                <li>Examples of architectural innovations like courtyards, thick walls, and sloped roofs.</li>
              </ul>
            </li>
            <li>
              <h2>Integration of Traditional Knowledge in Modern Architecture</h2>
              <ul>
                <li>Revitalizing traditional building techniques in contemporary architecture.</li>
                <li>Case studies of contemporary buildings that blend traditional knowledge with modern designs.</li>
                <li>Challenges and opportunities in integrating traditional knowledge into modern architectural education and practice.</li>
              </ul>
            </li>
            <li>
              <h2>Sacred Architecture and Cultural Significance</h2>
              <ul>
                <li>The role of traditional architecture in religious and spiritual practices (e.g., temples, shrines, mosques, etc.).</li>
                <li>Symbolism and sacred geometry in indigenous architectural practices.</li>
                <li>Conservation and preservation of culturally significant buildings and monuments.</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Landscaping and Environmental Planning</h2>
              <ul>
                <li>The relationship between traditional architectural design and landscaping (e.g., traditional gardens, agricultural land use).</li>
                <li>Indigenous knowledge of water management and landscape conservation (e.g., rainwater harvesting, terracing, agroforestry).</li>
                <li>Use of traditional landscape elements for environmental resilience, such as the preservation of natural habitats and biodiversity.</li>
              </ul>
            </li>
            <li>
              <h2>Community-Led Architecture and Participatory Design</h2>
              <ul>
                <li>How indigenous communities have historically contributed to the design and construction of their living spaces.</li>
                <li>Participatory design processes and co-creation of spaces with local communities.</li>
                <li>The value of community knowledge in shaping architectural forms and urban spaces.</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Knowledge and Disaster-Resilient Architecture</h2>
              <ul>
                <li>Traditional building methods for earthquake, flood, and cyclone resistance.</li>
                <li>The role of traditional knowledge in designing disaster-resilient communities and structures.</li>
                <li>Learning from historical responses to natural disasters and climate-related challenges in indigenous communities.</li>
              </ul>
            </li>
            <li>
              <h2>Cultural Preservation and Revitalization of Traditional Architecture</h2>
            </li>
          </ol>
        </TKSBox>

        {/* Second Box - TKS in Engineering */}
        <TKSBox title="Traditional knowledge system in Engineering">
          <ol>
            <li>
              <h2>Traditional Building Materials and Techniques in Engineering</h2>
              <ul>
                <li>Exploration of indigenous construction materials and traditional building techniques</li>
                <li>Traditional water harvesting, storage, and distribution systems used in ancient cultures.</li>
                <li>How traditional engineering solutions can address modern water scarcity challenges.</li>
                <li>Indigenous Water Management Systems in Engineering</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Knowledge of Renewable Energy Systems</h2>
              <ul>
                <li>Indigenous practices related to energy generation, such as wind, water, and solar energy.</li>
                <li>The role of traditional energy systems in sustainable engineering, focusing on off-grid communities.</li>
                <li>The use of traditional irrigation techniques.</li>
                <li>Indigenous knowledge of crop rotation, soil conservation, and sustainable farming methods.</li>
                <li>The integration of traditional agricultural engineering practices with modern sustainable farming technologies. Traditional Engineering Practices for Disaster-Resilient Infrastructure</li>
                <li>Indigenous knowledge in designing disaster-resistant structures (e.g., earthquake-resistant buildings, flood mitigation techniques).</li>
                <li>How traditional engineering methods help in creating resilient infrastructure in regions prone to natural disasters.</li>
                <li>The role of community-based traditional knowledge in enhancing disaster preparedness and recovery through local engineering solutions.</li>
              </ul>
            </li>
          </ol>
        </TKSBox>

        {/* Third Box - Environmental Conservation */}
        <TKSBox title="Traditional Knowledge system in Environmental Conservation">
          <ol>
            <li>
              <h2>Indigenous Approaches to Sustainable Land Management</h2>
              <ul>
                <li>Traditional agricultural practices that promote soil fertility and prevent erosion (e.g., crop rotation, agroforestry, terracing).</li>
                <li>Indigenous knowledge of land stewardship and sustainable land use to preserve biodiversity.</li>
                <li>Case studies of sustainable land management practices from different regions and cultures.</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Water Conservation Techniques</h2>
              <ul>
                <li>Indigenous methods of water management, such as rainwater harvesting, water catchment systems, and canal networks.</li>
                <li>The role of community-based water management systems in ensuring equitable access and sustainability.</li>
                <li>The impact of traditional water conservation methods on drought-prone areas.</li>
              </ul>
            </li>
            <li>
              <h2>Biodiversity Conservation through Indigenous Knowledge</h2>
              <ul>
                <li>Traditional practices of protecting ecosystems and species through sacred groves, tabu areas, and hunting restrictions.</li>
                <li>The role of indigenous knowledge in conserving endangered species and their habitats.</li>
                <li>Integrating traditional ecological knowledge with modern biodiversity conservation efforts.</li>
              </ul>
            </li>
            <li>
              <h2>Sacred Natural Sites and Cultural Heritage Conservation</h2>
              <ul>
                <li>The importance of sacred landscapes, forests, and waters in indigenous cultures and their role in environmental protection.</li>
                <li>How the preservation of sacred natural sites contributes to broader conservation goals.</li>
                <li>The balance between cultural heritage preservation and environmental sustainability in sacred spaces.</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Knowledge for Climate Change Adaptation and Mitigation</h2>
              <ul>
                <li>Indigenous strategies for adapting to climate change based on historical environmental knowledge.</li>
                <li>The role of traditional knowledge in building resilience to climate impacts such as flooding, droughts, and extreme weather.</li>
                <li>Case studies on the use of traditional knowledge in climate adaptation and mitigation projects.</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Knowledge and Ecosystem Restoration</h2>
              <ul>
                <li>Approaches to restoring degraded lands, forests, and ecosystems using traditional methods.</li>
                <li>The role of indigenous peoples in the recovery and conservation of critical ecosystems such as wetlands, mangroves, and grasslands.</li>
                <li>Traditional ecological knowledge in the context of reforestation and habitat restoration efforts.</li>
              </ul>
            </li>
            <li>
              <h2>Traditional Practices in Marine Conservation</h2>
              <ul>
                <li>Indigenous knowledge of sustainable fishing, marine resource management, and conservation of marine ecosystems.</li>
                <li>Traditional marine conservation practices, such as seasonal fishing restrictions, taboo areas, and conservation of coral reefs.</li>
                <li>The role of indigenous coastal communities in protecting marine biodiversity and ensuring sustainable fisheries.</li>
              </ul>
            </li>
            <li>
              <h2>Integration of Traditional and Modern Environmental Conservation Practices</h2>
              <ul>
                <li>The potential for combining traditional ecological knowledge with modern scientific approaches for effective conservation.</li>
                <li>Collaborative models between indigenous communities, scientists, and policymakers for integrated conservation strategies.</li>
                <li>Challenges and benefits of merging traditional knowledge with contemporary environmental management techniques.</li>
              </ul>
            </li>
          </ol>
        </TKSBox>

        {/* Fourth Box - Indian Knowledge System */}
        <TKSBox title="Indian Knowledge System">
          <ol>
            <li>
              <h2>Indian Knowledge System in Planning</h2>
            </li>
            <li>
              <h2>Vaastu Shastra in traditional Architecture and Planning</h2>
              <ul>
                <li>Principles and Foundations of Vastu Shastra</li>
                <li>Vastu and Site Selection in Architecture</li>
                <li>Vastu and Spatial Organization</li>
                <li>Vastu in Residential Architecture</li>
                <li>Vastu in Commercial and Public Buildings</li>
                <li>Vastu and Environmental Integration</li>
                <li>Modern Adaptations of Vastu in Contemporary Architecture</li>
                <li>Vastu and Sustainable Design</li>
                <li>Vastu and Interior Design</li>
                <li>Vastu and the Psychology of Space</li>
                <li>Vastu and Urban Planning</li>
                <li>Vastu for Heritage Preservation</li>
              </ul>
            </li>
          </ol>
        </TKSBox>
      </section>

      <Footer />
    </>
  );
}
         