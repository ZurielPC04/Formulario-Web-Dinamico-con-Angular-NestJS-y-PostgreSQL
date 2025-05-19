import { Test, TestingModule } from '@nestjs/testing';
import { DatosRecabadosService } from './datos_recabados.service';

describe('DatosRecabadosService', () => {
  let service: DatosRecabadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatosRecabadosService],
    }).compile();

    service = module.get<DatosRecabadosService>(DatosRecabadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
