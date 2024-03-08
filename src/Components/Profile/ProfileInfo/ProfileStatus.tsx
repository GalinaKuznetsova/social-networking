import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { MyProfilePropsType } from "../ProfileContainer";
import { ProfileTypeProps } from "../Profile";



export class ProfileStatus extends React.Component<ProfileTypeProps> {
 
  state = {
    editMode: false,
    status:this.props.status
  };

  activeEditMode=()=>{
    this.setState({
    editMode:true
   })
  }

  deactiveEditMode=()=>{
    this.setState({
     editMode:false
  
    });
    this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e:ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      status: e.currentTarget.value
    });
      
   }
   componentDidUpdate(prevProps:any,prevState:any) {
    
    if (prevProps.status !== this.props.status){
      this.setState({
        status:this.props.status
      })
    }

     console.log('componentDidUpdete')
   }


  render() {
    console.log("render")
    return (
      <div>
        {!this.state.editMode && 
          <div>
            <span onDoubleClick={this.activeEditMode}>{this.props.status || "not status"}</span>
          </div>
        }
        {this.state.editMode && 
          <div>
            <input autoFocus={true} onChange = {this.onStatusChange} 
             onBlur={this.deactiveEditMode} value={this.state.status}/>
          </div>
      }
      </div>
    );
  }
}
