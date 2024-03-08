import React from "react";
import {InjectedFormProps, reduxForm,Field } from "redux-form";
import { Input } from "../FormControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/valodators";

type LoginFormValueType = {
    login:string,
    rememberMe:boolean,
    password:string,
}
let maxLength10 = maxLengthCreator(10)
export const LoginForm:React.FC<InjectedFormProps<LoginFormValueType>>=(props)=>{ 
      return (
<form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={'login'} component = {Input} validate={[required,maxLength10]}/></div>
            <div><Field placeholder={"Password"}  name={'Password'} component = {Input} validate={[required,maxLength10]}/></div>
            <div>
            <div><Field  type= {"checkbox"} name={'rememberme'} component = {Input}/></div>
            <div>
                <button>
                    Login
                </button>
            </div>
            </div>
            
        </form>
    )
        
       
   
}


const ReduxLogiForm = reduxForm<LoginFormValueType>({ form: 'login' })(LoginForm)







export const Login=()=>{
    const onSubmit = (formData:LoginFormValueType) => {
       console.log(formData)
    }
    return <div> 
        <h1>Login</h1>
        <ReduxLogiForm onSubmit={onSubmit}/>
        
    </div>
}