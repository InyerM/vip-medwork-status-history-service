// Core
import { Inject, Injectable } from '@nestjs/common';

// Domain
import { StatusHistoryRepository } from '../../domain/repositories/status-history.repository';
import { STATUS_HISTORY_INJECTION_TOKEN } from '../../domain/constants/status-history-injection-token.constant';
import { StatusHistory } from '../../domain/models/status-history.model';

@Injectable()
export class FindByPatientIdUseCase {
  public constructor(
    @Inject(STATUS_HISTORY_INJECTION_TOKEN)
    private readonly statusHistoryRepository: StatusHistoryRepository,
  ) {}

  public async execute(patientId: string): Promise<StatusHistory[]> {
    return this.statusHistoryRepository.findByPatientId(patientId);
  }
}
