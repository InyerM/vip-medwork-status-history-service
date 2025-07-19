// src/infrastructure/persistence/typeorm/entities/status.orm-entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('status_history')
export class StatusHistoryEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'uuid', description: 'Status ID' })
  public id: string;

  @Column({ type: 'uuid' })
  @ApiProperty({ example: 'uuid', description: 'Patient ID' })
  public patientId: string;

  @Column({ type: 'uuid' })
  @ApiProperty({ example: 'uuid', description: 'Status ID' })
  public statusId: string;

  @Column({ type: 'timestamptz' })
  @ApiProperty({ example: '2023-01-01T00:00:00.000Z', description: 'Changed date' })
  public changedAt: Date;

  public constructor(params: Partial<StatusHistoryEntity>) {
    Object.assign(this, params);
  }
}
