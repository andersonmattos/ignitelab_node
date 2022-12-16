import { CountRecipientNotifications } from './count-recipient-notifications';
import { NotificationNotFound } from './errors/notification-not-found';
import { Content } from "@application/entities/content";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { Notification } from "../entities/notification";
import { CancelNotification } from "./cancel-notification";
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications',() => {
    it('should be able to count recipient notifications', async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationRepository);

        await notificationRepository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationRepository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationRepository.create(makeNotification({recipientId: 'recipient-2'}));

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-2'
        })
        
        expect(count).toEqual(1);
    });
});