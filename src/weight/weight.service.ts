import { Injectable } from '@nestjs/common';
import { ImcWeightDto } from './dto/imc-weight.dto';

@Injectable()
export class WeightService {
  imc(imcWeightDto: ImcWeightDto) {
    return imcWeightDto.weight / (imcWeightDto.height * imcWeightDto.height)
  }

  imcLabel(imc: number) {
    if (imc < 18.5) {
      return 'thinness'
    } else if (imc < 25) {
      return 'normal'
    } else if (imc < 30) {
      return 'obesity'
    } else if (imc < 35) {
      return 'obesity level 1'
    } else if (imc < 40) {
      return 'obesity level 2'
    } else {
      return 'obesity level 3'
    }
  }
}
