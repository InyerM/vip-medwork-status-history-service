import type { StatusHistory } from '../models/status-history.model';

export interface StatusHistoryRepository {
  findById(id: string): Promise<StatusHistory | null>;
  findAll(): Promise<StatusHistory[]>;
  create(statusHistory: Partial<StatusHistory>): Promise<void>;
}
