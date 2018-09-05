import React from 'react';
import classes from './Sample.css';


// class Sample extends Component{
//     render() {
//     return (
//     <div>
//         <h1>Hello Sample</h1>
//     </div>
//         );
//     }
// }
//}
const Sample =(props)=>( 
    <div  onClick={props.click} className={classes.Sample} >  
        <h1>I am {props.name} and my age is {props.age} years old</h1>
        <p>Hi {props.children}</p>
        <input type="text" onChange={props.changed}/>
    </div>
);

//export default class Sample extends Component{}

export default Sample;