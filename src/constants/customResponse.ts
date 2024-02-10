export class CustomResponse {
    constructor(status:number, message:string, result:any){
        this.status = status
        this.message = message
        this.result = result
    }

    status: number
    message: string
    result: any
}