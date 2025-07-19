// Core
import { Injectable } from '@nestjs/common';

// Application
import { CreateStatusHistoryDto } from '../dto/create-status-history.dto';
import { CreateStatusHistoryUseCase } from '../use-cases/create-status-history.use-case';
import { FindByPatientIdUseCase } from '../use-cases/find-by-patient-id.use-case';

// Domain
import { StatusHistory } from '../../domain/models/status-history.model';

@Injectable()
export class StatusHistoryService {
  public constructor(
    private readonly createStatusHistoryUseCase: CreateStatusHistoryUseCase,
    private readonly findByPatientIdUseCase: FindByPatientIdUseCase,
  ) {}

  public createStatusHistory(dto: CreateStatusHistoryDto): Promise<void> {
    return this.createStatusHistoryUseCase.execute(dto);
  }

  public findStatusHistoryByPatientId(patientId: string): Promise<StatusHistory[]> {
    return this.findByPatientIdUseCase.execute(patientId);
  }
}
