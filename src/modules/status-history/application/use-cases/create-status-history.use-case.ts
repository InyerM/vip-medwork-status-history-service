// Core
import { Inject, Injectable } from '@nestjs/common';

// Domain
import { StatusHistoryRepository } from '../../domain/repositories/status-history.repository';
import { STATUS_HISTORY_INJECTION_TOKEN } from '../../domain/constants/status-history-injection-token.constant';

// Infrastructure
import { CreateStatusHistoryDto } from '../dto/create-status-history.dto';

@Injectable()
export class CreateStatusHistoryUseCase {
  public constructor(
    @Inject(STATUS_HISTORY_INJECTION_TOKEN)
    private readonly statusHistoryRepository: StatusHistoryRepository,
  ) {}

  public async execute(input: CreateStatusHistoryDto): Promise<void> {
    await this.statusHistoryRepository.create({
      patientId: input.patientId,
      statusId: input.statusId,
    });
  }
}
