import React from 'react'
//import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import Gallery1 from '../components/static_queries/Gallery1'
import Gallery3 from '../components/static_queries/Gallery3'
import Gallery2 from '../components/static_queries/Gallery2'

import Gc from '../assets/images/gc.png'


class HomeIndex extends React.Component {
  render() {

      return (
          <Layout>
                <Helmet
                  title="JC Gallery"
                  meta={[
                      { name: 'description', content: 'Jedi Cristal Gallery' },
                      { name: 'keywords', content: 'jedi, portfolio, gallery' },
                  ]}
              >
              </Helmet>
              <Banner/>

                <div id="main">
                
                    <section id="one">
                       
                        <div className="inner">
                          
                            <p>Welcome to my gallery project! This Gallery is a Gatsby and Cloudinary project which is a web application that focuses on showcasing images through optimized queries. By combining the strengths of Gatsby, a fast static site generator, and Cloudinary, a powerful cloud-based media management platform, this project offers an efficient way in displaying images. </p>
                            <p><span className="image left"><img src={Gc} alt="" /></span> </p>
                           
                           
                            <h3>Get Started</h3>
                            <p> This <a href="https://medium.com/@jedalvarezuybentillo/jc-gallery-guide-488053707373">tutorial</a> will help you and simply copy and paste this command to get the repository </p>
                                <pre>
                                    <code>
                                    gatsby new [your-filename] https://github.com/Jedi26/jcgallery
                                </code>
                                </pre>
                            <h3>How to Setup Cloudinary</h3>
                            <p> Don't forget to read the whole <a href="/">tutorial</a> here to set your environment variables for your Cloudinary API Keys.</p>
                             
                        </div>
                        
                        
                    </section>
                    
                    <section id="two">
                    
                    <div className="inner">
                        <div className='box alt'>
                        
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><Gallery1/></span></div>
                            <div className="col-4"><span className="image fit"><Gallery2/></span></div>
                            <div className="col-4"><span className="image fit"><Gallery3/></span></div>
                         
                         </div>
                        </div>
                        
                        
                    </div>
                    
                    </section>
                
                </div>

    </Layout>
)
}
}


export default HomeIndex
