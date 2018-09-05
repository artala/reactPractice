import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Sample from './sample/Sample';
//import Sample from './sample/Sample';


class App extends Component {

    state={
      sample : [
        {id:'1',name:'Arun kumar', age:'23'},
        {id:'2',name:'Rohith', age:'23'},
        {id:'3',name:'Hari',age:'24'}
      ],
      person: 'someother',
      clickStatus : false
    }


    // nameHandler=(newName)=>{
    //   //console.log('you clicked me');
    //   //this.state.sample[0].name='Arun';
    //   this.setState({
    //     sample : [
    //       {name:newName, age:'23'},
    //       {name:'Rohith', age:'23'},
    //       {name:'Hari',age:'25'}
    //     ]
    //   }
        
    //   )
    // }

    nameChangeHandler=(event,id)=>{


const sampleIndex = this.state.sample.findIndex(
  p=> {console.log(p);
    return p.id===id;}
);

const sample1 = {
  ...this.state.sample[sampleIndex]
};

console.log(sampleIndex);
console.log(sample1);
sample1.name=event.target.value;
const sample = [...this.state.sample];
sample[sampleIndex]= sample1;
console.log(sample);
this.setState({sample:sample});

      // this.setState({
      //   sample : [
      //     {name:'Arun', age:'23'},
      //     {name:event.target.value, age:'23'},
      //     {name:'Hari',age:'25'}
      //   ]
      // }
      //)
    }

    deleteHandler = (sampleIndex) => {
        // const sample=this.state.sample;
        const sample=[...this.state.sample]
        console.log(sample);
        console.log(sampleIndex);
        sample.splice(sampleIndex,1);
        console.log(sample);
        this.setState({sample:sample})
    }

    clickNameHandler = ()=>{
      const doesSample = this.state.clickStatus;
      // console.log(doesSample)
      // console.log(!doesSample)
      this.setState({clickStatus:!doesSample});
      // console.log({clickStatus:!doesSample})
    }

  render() {
    const style ={
      backgroundColor:'green',
      color : 'white',
      font:'inherit',
      border : '1px solid blue',
      padding : '8px',

    }

    // for CSS 
    //let classes= ['red','bold'].join(' ');
    const Classes1 = [];
    if(this.state.sample.length <=2){
      Classes1.push(classes.red);
    }
    if(this.state.sample.length<=1){
      Classes1.push(classes.bold);
    }


    let samples = null;
    if(this.state.clickStatus){
      samples = (
        <div>
          {this.state.sample.map((sample,index) => {
            return <Sample 
            name={sample.name} 
            age={sample.age} 
            click ={this.deleteHandler} 
            key={sample.id}
            changed={(event)=>this.nameChangeHandler(event,sample.id)}
             />
          })}

        {/* <Sample 
        name={this.state.sample[0].name} 
        age={this.state.sample[0].age}/>
        <Sample 
        name ={this.state.sample[1].name} 
        age={this.state.sample[1].age}
        click={this.nameHandler.bind(this,'Mandar')}
        changed={this.nameChangeHandler}
        >my hobbies are football</Sample>
        <Sample 
        name ={this.state.sample[2].name} 
        age={this.state.sample[2].age}/> */}
      </div>
      );
    style.backgroundColor='red';

    }
    return (
      // React.createElement('div',{className:'App'},React.createElement('h1',null,'Hai'))
              
      <div className={classes.App}>
        <h1>Hello World</h1>
        <p className={Classes1.join('-')}>Hai This is arun</p>
        {/* <button style={style} onClick={this.nameHandler.bind(this,'Arun')}>CLick me</button> */}
        <button style={style} onClick={this.clickNameHandler}>CLick me!...</button>
        {samples}
        {/* {this.state.clickStatus===true ? */}
          {/* <div>
            <Sample 
            name={this.state.sample[0].name} 
            age={this.state.sample[0].age}/>
            <Sample 
            name ={this.state.sample[1].name} 
            age={this.state.sample[1].age}
            click={this.nameHandler.bind(this,'Mandar')}
            changed={this.nameChangeHandler}
            >my hobbies are football</Sample>
            <Sample 
            name ={this.state.sample[2].name} 
            age={this.state.sample[2].age}/>
          </div>  */}
          {/* : null */}
        {/* } */}
      </div>
      
      
    );
  }
}

export default App;
