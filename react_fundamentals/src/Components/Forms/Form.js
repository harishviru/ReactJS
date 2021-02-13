import React, { Component } from 'react'
import './form.css'

 class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
           name:'',
           comments:'',
           topic:'react'
        }
    }
    
 handleUserChange=(event)=>{
     this.setState({
         name:event.target.value
     })
 }
 handleCommentChange=(event)=>{
    this.setState({
        comments:event.target.value
    })
}

handleUserTopicChange =(event)=>{
    this.setState({
        topic:event.target.value
    })
}

formSubmit=(event)=>{
     event.preventDefault();
    alert(`${this.state.name} --${this.state.comments} ----${this.state.topic}`)
}

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                 <label style={{fontSize:'30px',textAlign:'center',marginLeft:'340px'}}>name :</label>
                 <input type="text" className='form-control' value={this.state.name} onChange={this.handleUserChange}/>
                 <label style={{fontSize:'30px',textAlign:'center',marginLeft:'340px'}}>comment :</label>

                  <textarea  className='form-control' value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                  <label style={{fontSize:'30px',textAlign:'center',marginLeft:'340px'}}>Topic :</label>
                   <select  className='form-control' value={this.state.topic} onChange={this.handleUserTopicChange}>
                        <option value="react">React</option>
                        <option value="jquery">Jquery</option>
                        <option value="angular">Angular</option>
                   </select>
                    <input className="btn btn-primary" type="submit" value="submit"/>
                   </form>
            </div>
        )
    }
}

export default Form
