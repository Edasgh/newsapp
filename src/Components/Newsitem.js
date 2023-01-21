import React from 'react'

const Newsitem =(props)=> {
 
  
    let{title, description, imageUrl, newsUrl,author,date,source} = props
    return (
      <div>
            <div className="card" style={{marginBottom:'2.4rem'}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%',zIndex:'1'}}>
                   {source}
                </span>
              <img src={imageUrl} className="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small class="text-primary">By {!author?"Unknown":author}</small></p>
                <p className="card-text"><small class="text-danger">on {new Date(date).toGMTString()}</small></p>


                
                <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
            </div>
      </div>
    )
  
}

export default Newsitem
