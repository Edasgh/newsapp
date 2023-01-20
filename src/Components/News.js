import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from'./Spinner';
import PropTypes from 'prop-types';



export class News extends Component {
  static defaultProps ={
    country:'in',
    pageSize:20,
    category:"general"
  }
  static propTypes ={
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category:PropTypes.string
  }
  
  constructor(){
    super();
    this.state = {
     articles:[] ,
     loading:false,
     page:1
  }
}

async updateNews(){
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dbb40fb783e4528a024befb95bb7f80&page=${this.state.page}&pageSize=${this.props.pageSize}`;//pageSize should be=20 when you enable previous and next buttons
  this.setState({loading:true});
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({articles:parsedData.articles,
                  totalResults:parsedData.totalResults,
                  loading:false});




}








async componentDidMount(){
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dbb40fb783e4528a024befb95bb7f80&page=1&pageSize=${this.props.pageSize}`;//pageSize should be=20 when you enable previous and next buttons
  // this.setState({loading:true});
  // let data= await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);
  // this.setState({articles:parsedData.articles,
  //                 totalResults:parsedData.totalResults,
  //                 loading:false});
  this.updateNews();
}

handlePrevClick=async()=>{
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dbb40fb783e4528a024befb95bb7f80&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
//   this.setState({loading:true});
//   let data= await fetch(url);
//   let parsedData= await data.json();
//   // console.log(parsedData);
//   // this.setState({articles:parsedData.articles})
// this.setState=({
//   page:this.state.page -1,
//   articles:parsedData.articles,
//   loading:false,
//   totalResults:parsedData.totalResults
// })

this.setState=({page:this.state.page - 1})
 this.updateNews();
}

handleNextClick=async()=>{
  console.log('next')
//  if(!this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

//  }
//  else{
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dbb40fb783e4528a024befb95bb7f80&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true});
  // let data= await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);
  // this.setState({articles:parsedData.articles})
// this.setState=({
//   page:this.state.page +1,
//   articles:parsedData.articles,
//   loading:false,
//   totalResults:parsedData.totalResults
// })
// }

this.setState=({page:this.state.page + 1})
this.updateNews();
}

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">ED News - Top headlines</h1>
       {this.state.loading &&  <Spinner/>}
       

        <div className="row mx-3 my-2">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div> 
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
        <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
          
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
