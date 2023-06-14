import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

//import { Link } from 'gatsby'


const Gallery2 = () => (
  <StaticQuery
    query={graphql`
      query CloudinaryGalleryQuery3 {
        allCloudinaryImage(filter: {folder: {eq: "gallery2"}}) {
          edges {
              node {
                id
                public_id
                url
              }
            }
          }
      
        }
    `}   
    
   
    render={({   allCloudinaryImage  }) => (
      
    <div className="">
                {allCloudinaryImage.edges.map(({ node: gly }) => (
                
                      <section>
                  
                      <div ><span className="image fit"><img src={gly.url} alt="" /></span></div>
                      
                    
                
                </section> 
              
                

                  ))}
              
        </div>
              
      
      )}
      
    
    />
)
  

export default Gallery2
