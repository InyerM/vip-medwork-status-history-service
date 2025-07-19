// Domain
import type { StatusHistory } from '@/modules/status-history/domain/models/status-history.model';

// Infrastructure
import { StatusHistoryEntity } from '@/modules/status-history/infrastructure/entities/status-history.entity';

export class StatusHistoryMapper {
  public static toDomain(entity: StatusHistoryEntity): StatusHistory {
    return {
      id: entity.id,
      patientId: entity.patientId,
      statusId: entity.statusId,
      changedAt: entity.changedAt,
    };
  }

  public static toPersistence(domain: Partial<StatusHistory>): StatusHistoryEntity {
    return new StatusHistoryEntity(domain);
  }
}
