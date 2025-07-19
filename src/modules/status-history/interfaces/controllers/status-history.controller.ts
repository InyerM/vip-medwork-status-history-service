// Core
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

// Application
import { StatusHistoryService } from '@/modules/status-history/application/services/status-history.service';
import { CreateStatusHistoryDto } from '@/modules/status-history/application/dto/create-status-history.dto';

@Controller('status-histories')
export class StatusHistoryController {
  public constructor(private readonly statusHistoryService: StatusHistoryService) {}

  @MessagePattern('status-histories.create')
  public create(@Payload() dto: CreateStatusHistoryDto): Promise<void> {
    return this.statusHistoryService.createStatusHistory(dto);
  }
}
