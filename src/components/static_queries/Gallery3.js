import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

//import { Link } from 'gatsby'


const Gallery3 = () => (
  <StaticQuery
    query={graphql`
      query CloudinaryGalleryQuery2 {
        allCloudinaryImage(filter: {folder: {eq: "gallery3"}}) {
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
                {allCloudinaryImage.edges.map(({ node: gal }) => (
                
                      <section>
                  
                      <div ><span className="image fit"><img src={gal.url} alt="" /></span></div>
                      
                    
                
                </section> 
              
                

                  ))}
              
        </div>
              
      
      )}
      
    
    />
)
  

export default Gallery3
