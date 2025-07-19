// Core
import { Injectable } from '@nestjs/common';

// Application
import { CreateStatusHistoryDto } from '../dto/create-status-history.dto';
import { CreateStatusHistoryUseCase } from '../use-cases/create-status-history.use-case';

@Injectable()
export class StatusHistoryService {
  public constructor(private readonly createStatusHistoryUseCase: CreateStatusHistoryUseCase) {}

  public createStatusHistory(dto: CreateStatusHistoryDto): Promise<void> {
    return this.createStatusHistoryUseCase.execute(dto);
  }
}
