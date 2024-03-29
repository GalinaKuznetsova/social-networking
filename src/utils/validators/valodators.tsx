export type FieldValidatorType = (value:string)=> string | undefined


export const required:FieldValidatorType = (value) => {
    if (value) return undefined;
    return "Fielld is required"
}

export const maxLengthCreator = (maxLength:number):FieldValidatorType=>(value) => {

    if (value && value.length > maxLength) return `Max lenght is ${maxLength} symbol`;
    return undefined
}




