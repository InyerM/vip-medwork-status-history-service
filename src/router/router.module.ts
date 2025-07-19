// Core
import { Module } from '@nestjs/common';
import { RouterModule as NRouterModule } from '@nestjs/core';

// Modules
import { HealthModule } from '@/modules/health/health.module';
import { StatusHistoryModule } from '@/modules/status-history/status-history.module';

@Module({
  imports: [
    HealthModule,
    StatusHistoryModule,
    NRouterModule.register([
      {
        path: '/health',
        module: HealthModule,
      },
      {
        path: '/status-histories',
        module: StatusHistoryModule,
      },
    ]),
  ],
})
export class RouterModule {}
