
export interface signupUserDto{

    name:string
    email?:string
    password:string
    phoneNumber?:number
    address:string
}

export interface signinUserDto{

    email?:string
    password:string
    phoneNumber?:number

}

export interface userCart{
    phoneNumber:number,
    productIds?:number[]
}