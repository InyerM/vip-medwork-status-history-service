// Core
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

// Application
import { StatusHistoryService } from '@/modules/status-history/application/services/status-history.service';
import { CreateStatusHistoryDto } from '@/modules/status-history/application/dto/create-status-history.dto';

// Domain
import { StatusHistory } from '@/modules/status-history/domain/models/status-history.model';

@Controller('status-histories')
export class StatusHistoryController {
  public constructor(private readonly statusHistoryService: StatusHistoryService) {}

  @MessagePattern('status-histories.create')
  public create(@Payload() dto: CreateStatusHistoryDto): Promise<void> {
    return this.statusHistoryService.createStatusHistory(dto);
  }

  @MessagePattern('status-histories.findByPatientId')
  public findByPatientId(@Payload() patientId: string): Promise<StatusHistory[]> {
    return this.statusHistoryService.findStatusHistoryByPatientId(patientId);
  }
}
