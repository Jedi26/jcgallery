import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

//import { Link } from 'gatsby'


const Gallery1 = () => (
  <StaticQuery
    query={graphql`
      query CloudinaryGalleryQuery1 {
        allCloudinaryImage(filter: {folder: {eq: "gallery1"}}) {
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
                {allCloudinaryImage.edges.map(({ node: glr }) => (
               
                <section>
                        
                   <div ><span className="image fit"><img src={glr.url} alt="" /></span></div>
                
                </section> 
              
                

                  ))}
              
        </div>
              
      
      )}
      
    
    />
)
  

export default Gallery1
