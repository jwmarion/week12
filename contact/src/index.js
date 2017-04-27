import React from 'react';
import ReactDOM from 'react-dom';
import ReactUIDropdown from "react-ui-dropdown";
import './index.css';


class Contact extends React.Component{
  constructor(){
    super();
    this.state=({
      entry: 1,
      name: '',
      phone: '',
      email: '',
      type: '',
      favorite: -1,
      contacts: [
        {name: 'james',
        phone: '3036066666',
        email: 'jwmarion@yahoo.org',
        type: 'Sandwich Artist',
        favorite: 1}]
    });
  }

  render(){
    var fav = "      :D"
    var entry =
      <div>
       <div className='input'>
          <label className='input'>Name</label>
            <input className='input' type="text" onChange={event=>this.change('name',event)} value={this.state.name}/>
        </div>
        <div className='input'>
          <label className='input' className='input'>Phone</label>
            <input className='input' type="tel" onChange={event=>this.change('phone',event)} value={this.state.phone}/>
        </div>
        <div className='input'>
          <label className='input'>Email</label>
          <input className='input' type="email" onChange={event=>this.change('email',event)} value={this.state.email}/>
        </div>
        <div className='input'>
          <div>
           <ReactUIDropdown
            label='Type'
            initialItems={[
               {id:1,title:'Co-Worker'},
               {id:2, title:'Family Member'},
               {id:3, title:'Sandwich Artist'}
             ]}
             onChange={event=>this.change('type',event)}/>
          </div>
          <button onClick={event=>this.change('contacts',{name:this.state.name, phone: this.state.phone, email: this.state.email, type: this.state.type})}>Submit</button>
        </div>
      </div>;
    return(
      // let contacts = };
      //input form
      <div>
      <button className="input" onClick={()=>this.setState({entry: this.state.entry * -1})}>Entry Form</button>
      {this.state.entry === 1?entry:null}
      {this.state.contacts.map((object,idx)=>
        <div key={idx} className="user">
          <h2>{object.name}{object.type}{object.favorite === 1?fav:null}</h2>
          <h3>{object.phone}</h3>
          <h3>{object.email}</h3>
          <button onClick={event=>this.change('delete',idx)}>Delete</button>
          <button onClick={event=>this.favChange('favorite',idx)}>Toggle Favorite</button>
        </div>)}
      </div>)

  }

  change(stateName,event){
    var t ='';
    if(stateName === 'favorite'){
      t = this.state.favorite;
      t = t *-1;
    }
      if (stateName === 'delete'){
        t = this.state.contacts
        t.splice(event,1);
        console.log(t);
      }
      else if(stateName === 'type'){
        console.log(event[0].title);
        t = (event[0].title);
      }
      else if(stateName === 'contacts'){
        t = this.state.contacts
        t.push(event);
        console.log(t);
      }
      else{
        t = event.target.value;
        console.log(t);
      }
      console.log(t);
      this.setState({
        [stateName]: t
      })
  }
  favChange(stateName,index){
    let t = this.state.contacts;
    t[index].favorite= t[index].favorite * -1;
    this.setState({
      contacts: t
    })


    }
  }






ReactDOM.render(<Contact/>,
  document.getElementById('root')
);
