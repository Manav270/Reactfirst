
import './App.css';
import React from 'react';
class FilmsRow extends React.Component{
  render()
  {
    return(
      <li>
        <a href={this.props.url} target="blank">{this.props.url}</a>
      </li>
    )
  }
}
class Starwars extends React.Component{
  constructor(){
    super()
    this.state ={
      charac:false,
      name:null,
      height:null,
      homeworld:null,
      films:[],
      image1:null,
    }
  }
  getcharacter()
  {
    const randomnumber=Math.round(Math.random()*88)
    const url=`https://akabab.github.io/starwars-api/api/id/${randomnumber}.json`
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
        this.setState({
          charac:true,
          name:data.name,
          height:data.height,
          homeworld:data.homeworld,
          films:data.apprentices,
          image1:data.image,
        })
      })
    
  }
  render(){
    const movies=([] || this.state.films ).map((url,i)=>{
      return <FilmsRow key={i} url={url} />
    })
    return (
     
      <div>{
        this.state.charac &&
      <div>
        <img src={this.state.image1} alt="final_image" id='img_class'></img>
        <h1>{this.state.name}</h1>
        <p>{this.state.height} cm</p>
        <p>{this.state.homeworld}</p>

        <ul>
          {movies}
        </ul>
      </div>
      
  }
   <button type="button" className="btn" onClick={()=> this.getcharacter()}>
          Random
        </button> 
 </div>
      
    )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars />
      </header>
    </div>
  );
}

export default App;
