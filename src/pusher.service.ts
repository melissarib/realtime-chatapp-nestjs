import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
    pusher: Pusher;

    constructor() {
        this.pusher = new Pusher({
            appId: "1721332",
            key: "3240fcc634e22cf0bc5e",
            secret: "3c65508697ceb3e62a5b",
            cluster: "sa1",
            useTLS: true
          });
    }
    async trigger(channel: string, message: string, data: any) {
        await this.pusher.trigger(channel, message, data);
      }
}
