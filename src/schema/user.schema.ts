import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User{

    @Prop()
    name:string

    @Prop({ unique:true })
    email?:string

    @Prop({ unique:true })
    phoneNumber?:number

    @Prop()
    password:string

    @Prop()
    address:string

}

export const UserSchema = SchemaFactory.createForClass(User)