import { Injectable, NgZone } from '@angular/core';
import { NzMessageDataOptions, NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class NotificationUtilService {
  constructor(
    private readonly snackBar: NzMessageService,
    private readonly zone: NgZone,
  ) {}

  default(message: string) {
    this.show('info', message, {
      nzDuration: 2000,
    });
  }

  info(message: string) {
    this.show('info', message, {
      nzDuration: 2000,
    });
  }

  success(message: string) {
    this.show('success', message, {
      nzDuration: 2000,
    });
  }

  warn(message: string) {
    this.show('warning', message, {
      nzDuration: 2500,
    });
  }

  error(message: string) {
    this.show('error', message, {
      nzDuration: 3000,
    });
  }

  private show(type: string, message: string, options: NzMessageDataOptions) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.create(type, message, options));
  }
}
