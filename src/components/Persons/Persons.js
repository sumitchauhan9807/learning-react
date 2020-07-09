import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
  componentDidUpdate(prevprops,prevstate,snapshot){
    console.log('FROM PERSONS.JS','componentDidUpdate')
}
  render(){
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id )} />
    } )
  }
}


export default Persons;