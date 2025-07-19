// Core
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Infrastructure
import { StatusHistoryEntity } from './infrastructure/entities/status-history.entity';
import { StatusHistoryRepositoryImpl } from './infrastructure/repositories/status-history.repository.impl';

// Application
import { CreateStatusHistoryUseCase } from './application/use-cases/create-status-history.use-case';
import { StatusHistoryService } from './application/services/status-history.service';

// Interfaces
import { StatusHistoryController } from './interfaces/controllers/status-history.controller';

// Domain
import { STATUS_HISTORY_INJECTION_TOKEN } from './domain/constants/status-history-injection-token.constant';

@Module({
  imports: [TypeOrmModule.forFeature([StatusHistoryEntity])],
  controllers: [StatusHistoryController],
  providers: [
    StatusHistoryRepositoryImpl,
    CreateStatusHistoryUseCase,
    StatusHistoryService,
    {
      provide: STATUS_HISTORY_INJECTION_TOKEN,
      useExisting: StatusHistoryRepositoryImpl,
    },
  ],
})
export class StatusHistoryModule {}
