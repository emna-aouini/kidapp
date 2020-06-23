import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class Signup extends React.Component {
  state = { visible: false, name:'',password:'',email:'' };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
signup=()=>{
    axios.post('user/register',this.state).then(()=>this.props.history.push('/movie')).catch()
}
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          sign up
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={()=>{this.signup()}}
          onCancel={this.handleCancel}
        >
        <div style={{display:'flex', flexDirection:'column'}}>
       <input placeholder='name'  style={{margin:'2%'}} value={this.state.name} name='name' onChange={(e)=>this.handleChange(e)}/>      
        <input placeholder='email' style={{margin:'2%'}} value={this.state.email} name='email' onChange={(e)=>this.handleChange(e)}/>
        <input placeholder='password' style={{margin:'2%'}} value={this.state.password} name='password'  onChange={this.handleChange}/>
</div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Signup)