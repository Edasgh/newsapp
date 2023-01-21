import React, { useEffect , useState } from 'react'
import Newsitem from './Newsitem';
import Spinner from'./Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



const News =(props)=>{
 const[articles,setArticles]=useState([]);
 const[loading,setLoading]=useState([true]);
 const[page,setPage]=useState(1);
 const[totalResults,setTotalResults]=useState(0);
 


const updateNews =async()=>{
  props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;//pageSize should be=20 when you enable previous and next buttons
  // this.setState({loading:true});
  setLoading(true);
  let data= await fetch(url);
  props.setProgress(30);
  let parsedData= await data.json();
  props.setProgress(70);
  console.log(parsedData);
  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  // this.setState({articles:parsedData.articles,
  //                 totalResults:parsedData.totalResults,
  //                 loading:false});

 props.setProgress(100);


}

useEffect( ()=>{
  updateNews();
 document.title=`${(props.category).charAt(0).toUpperCase()+(props.category).slice(1)}-ED News`;

  //eslint-disable-next-line
}, [] );

//async componentDidMount(){
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;//pageSize should be=20 when you enable previous and next buttons
  // this.setState({loading:true});
  // let data= await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);
  // this.setState({articles:parsedData.articles,
  //                 totalResults:parsedData.totalResults,
  //                 loading:false});
// }

// handlePrevClick=async()=>{
// //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page -1}&pageSize=${props.pageSize}`;
// //   this.setState({loading:true});
// //   let data= await fetch(url);
// //   let parsedData= await data.json();
// //   // console.log(parsedData);
// //   // this.setState({articles:parsedData.articles})
// // this.setState=({
// //   page:this.state.page -1,
// //   articles:parsedData.articles,
// //   loading:false,
// //   totalResults:parsedData.totalResults
// // })

// // this.setState=({page:this.state.page - 1})
// setPage(page - 1);
//  updateNews();
// }

// handleNextClick=async()=>{
//   console.log('next');


// // [if(!this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)){

// //  }
// //  else{
//   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page +1}&pageSize=${props.pageSize}`;
//   // this.setState({loading:true});
//   // let data= await fetch(url);
//   // let parsedData= await data.json();
//   // console.log(parsedData);
//   // this.setState({articles:parsedData.articles})
// // this.setState=({
// //   page:this.state.page +1,
// //   articles:parsedData.articles,
// //   loading:false,
// //   totalResults:parsedData.totalResults
// // })
// // }
// // this.setState=({page:this.state.page + 1}) ]


// //ACTUAL CODE OF FUNCTION BASED COMPONENT STARTS HERE
// setPage(page + 1)
// updateNews();
// }

const fetchMoreData=async()=>{
  // this.setState({page:this.state.page + 1});
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1 }&pageSize=${props.pageSize}`;//page=${page+1}and then setPage={page+1} resolve the error of duplicating any content[setPage={page+1} only gives this error]
  setPage(page + 1);
  // this.setState({loading:true});
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  // this.setState({articles:this.state.articles.concat(parsedData.articles),
  //                 totalResults:parsedData.totalResults
  //              });

  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
  }

 
    return (
      <>
        <h1 className="text-center" style={{marginBottom:'3rem',marginTop:'4.4rem'}}>ED News - Top {(props.category).charAt(0).toUpperCase()+(props.category).slice(1)} Headlines </h1>
       
       {loading &&  <Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">

        <div className="row mx-3 my-2">
        { articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div> 
        })}
        </div>

        </div>

        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
        <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
          
        {/* <div className="col-md-3">
        <Newsitem title="mytitle" description="mydescription"/>
        </div>
        <div className="col-md-3">
        <Newsitem title="mytitle" description="mydescription"/>
        </div>
      </div> */}

      </>
    )
  
}

News.defaultProps ={
  country:'in',
  pageSize:20,
  category:"general"
}
News.propTypes ={
 country:PropTypes.string,
 pageSize:PropTypes.number,
 category:PropTypes.string
}

export default News
