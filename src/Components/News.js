import React, { Component } from 'react'
import Newsitem from './Newsitem';


export class News extends Component {
  
  constructor(){
    super();
    this.state = {
     articles:[] ,
     loading:false,
     page:1
  }
}

async componentDidMount(){
  let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=4dbb40fb783e4528a024befb95bb7f80&page=1&pagesize=38";//pageSize should be=20 when you enable previous and next buttons
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({articles:parsedData.articles})
}

// handlePrevClick=async()=>{
//   let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4dbb40fb783e4528a024befb95bb7f80&page=${this.state.page -1}&pageSize=20`;
//   let data= await fetch(url);
//   let parsedData= await data.json();
//   // console.log(parsedData);
//   // this.setState({articles:parsedData.articles})
// this.setState=({
//   page:this.state.page -1,
//   articles:parsedData.articles
// })
// }

// handleNextClick=async()=>{
//   console.log('next')
 //if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

 //}
 // else{
//   let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4dbb40fb783e4528a024befb95bb7f80&page=${this.state.page +1}&pageSize=20`;
//   let data= await fetch(url);
//   let parsedData= await data.json();
//   // console.log(parsedData);
//   // this.setState({articles:parsedData.articles})
// this.setState=({
//   page:this.state.page +1,
//   articles:parsedData.articles
// })
//}
// }

  render() {
    return (
      <div className="container my-3">
        <h1>News - Top headlines</h1>

        <div className="row mx-3 my-2">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div> 
        })}
        </div>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
        <button className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
          
      </div>
        /* <div className="col-md-3">
        <Newsitem title="mytitle" description="mydescription"/>
        </div>
        <div className="col-md-3">
        <Newsitem title="mytitle" description="mydescription"/>
        </div>
        </div> */
    )
  }
}

export default News
