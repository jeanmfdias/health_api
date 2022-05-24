import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeightService } from './weight.service';
import { ImcWeightDto } from './dto/imc-weight.dto';

@Controller('weight')
export class WeightController {
  constructor(private readonly weightService: WeightService) {}

  @Get('imc')
  imc(@Body() imcWeightDto: ImcWeightDto) {
    const imc = this.weightService.imc(imcWeightDto);
    return {
      imc: this.weightService.imcLabel(imc),
      imcValue: imc
    };
  }
}
