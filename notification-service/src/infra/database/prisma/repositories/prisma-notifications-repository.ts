import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../prisma.service';
import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from '../../../../application/repositories/notification-repository';

@Injectable()
export class PrimsaNotificationsRepository implements NotificationRepository {
    
    constructor(
        private prismaService: PrismaService
    ) {}
    
    async create(notification: Notification): Promise<void> {
       await this.prismaService.notification.create({
        data: {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
       });
    }

}