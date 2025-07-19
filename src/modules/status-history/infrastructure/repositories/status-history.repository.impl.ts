// Core
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Domain
import { StatusHistory } from '@/modules/status-history/domain/models/status-history.model';

// Infrastructure
import { StatusHistoryEntity } from '@/modules/status-history/infrastructure/entities/status-history.entity';
import { StatusHistoryMapper } from '@/modules/status-history/infrastructure/mappers/status-history.mapper';
import { StatusHistoryRepository } from '@/modules/status-history/domain/repositories/status-history.repository';

@Injectable()
export class StatusHistoryRepositoryImpl implements StatusHistoryRepository {
  public constructor(
    @InjectRepository(StatusHistoryEntity)
    private readonly repository: Repository<StatusHistoryEntity>,
  ) {}

  public async create(statusHistory: StatusHistory): Promise<void> {
    const entity = this.repository.create(
      StatusHistoryMapper.toPersistence({
        ...statusHistory,
        changedAt: new Date(),
      }),
    );
    await this.repository.save(entity);
  }

  public async findById(id: string): Promise<StatusHistory | null> {
    const entity = await this.repository.findOneBy({ id });
    return entity ? StatusHistoryMapper.toDomain(entity) : null;
  }

  public async findAll(): Promise<StatusHistory[]> {
    const entities = await this.repository.find();
    return entities.map((entity) => StatusHistoryMapper.toDomain(entity));
  }

  public async findByPatientId(patientId: string): Promise<StatusHistory[]> {
    const entities = await this.repository.find({ where: { patientId } });
    return entities.map((entity) => StatusHistoryMapper.toDomain(entity));
  }
}
