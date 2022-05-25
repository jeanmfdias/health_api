import { IsNotEmpty, IsNumber } from "class-validator"

export class ImcWeightDto {
    @IsNotEmpty()
    @IsNumber()
    weight:number

    @IsNotEmpty()
    @IsNumber()
    height:number
}