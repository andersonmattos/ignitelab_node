import { PrimsaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { NotificationRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

@Module({
    providers:[PrismaService,{
        provide:NotificationRepository,
        useClass: PrimsaNotificationsRepository,
    }],
    exports: [NotificationRepository]
})
export class DatabaseModule {}