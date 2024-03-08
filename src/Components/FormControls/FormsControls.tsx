import React from "react"
import s from './FormsControls.module.css'
import { WrappedFieldProps } from "redux-form"

// const FormControl:React.FC<WrappedFieldProps> = ({input,meta,child,...props}) =>{
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error :'')}>
//             <div>
//            {props.child}
//             </div>
//             { hasError && <span className={s.errorSpan}>{meta.error}</span>}
              
//         </div>
//     )
// }

export const Textarea:React.FC<WrappedFieldProps>= ({input,meta,...props})=>{


    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error :'')}>
            <div>
            <textarea {...input} {...props}/>
            </div>
            { hasError && <span className={s.errorSpan}>{meta.error}</span>}
              
        </div>
    )
}

export const Input:React.FC<WrappedFieldProps>= ({input,meta,...props})=>{


    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + s.error}>
            <div>
            <input {...input} {...props}/>
            </div>
            { hasError && <span className={s.errorSpan}>{meta.error}</span>}
              
        </div>
    )
}


// type FormControlProps = WrappedFieldProps & {
//     tagName: 'textarea' | 'input'
// }

// export const FormControl: FC<FormControlProps> = ({ input, meta, tagName, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     const Tag = tagName;

//     return (
//         <>
//         <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
//             <div>
//                 <Tag {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//         </>
//     );
// };