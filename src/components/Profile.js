import React, { Component } from "react";


export default class Profile extends Component {
  constructor() {
    console.log("initialization");
    super();
    this.state = {
      fullName:"Abidli Hajer",
      profession:"web developper",
      imgSrc:'imghajer.jpg',
      bio:"Développeur full stack certifié GOMYCODE",
      time: new Date(),
    };
  }
  componentDidMount() {
    // console.log("component did mount");
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 2000);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("render");
    return (
      
       <div >
        <h1>{this.state.fullName}</h1>
        <br/>
        <h3>{this.state.profession}</h3>
        <br/>
        <img class= "avatar" src={this.state.imgSrc} alt=''/>
        <br/>
        <h3>{this.state.bio}</h3>
        
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}