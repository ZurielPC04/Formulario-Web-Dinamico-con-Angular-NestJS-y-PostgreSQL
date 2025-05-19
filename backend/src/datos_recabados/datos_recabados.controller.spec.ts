import { Test, TestingModule } from '@nestjs/testing';
import { DatosRecabadosController } from './datos_recabados.controller';
import { DatosRecabadosService } from './datos_recabados.service';

describe('DatosRecabadosController', () => {
  let controller: DatosRecabadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosRecabadosController],
      providers: [DatosRecabadosService],
    }).compile();

    controller = module.get<DatosRecabadosController>(DatosRecabadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
