import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { NgxFileDropEntry } from "ngx-file-drop";
import { KeycloakService } from "keycloak-angular";
import { AppReporterFormComponent } from "../components/app-reporter-form/app-reporter-form.component";
import { SharedModule } from "@app/shared/shared.module";
import { JanusBambooHrService } from "@app/core/services/janus-bamboohr.service";
import { NotificationUtilService } from "@app/core/utils/notification-util.service";

@Component({
  standalone: true,
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  imports: [SharedModule, AppReporterFormComponent],
})
export class IssueFormComponent implements OnInit {
  form!: FormGroup;
  files: NgxFileDropEntry[] = [];
  isSubmiting: boolean = false;
  userEmailReporting: string = '';

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly translate: TranslateService,
    private readonly janusBambooHrService: JanusBambooHrService,
    private readonly keycloak: KeycloakService,
    private readonly notification: NotificationUtilService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
    const profile = await this.keycloak.loadUserProfile();
    this.userEmailReporting = profile?.email || '';
  }

  onAddAttachment(file: NgxFileDropEntry): void {
    this.files = [...this.files, file];
  }

  onRemoveAttachment(itemToRemove: NgxFileDropEntry): void {
    this.files = [...this.files.filter((file) => file.relativePath !== itemToRemove.relativePath)];
  }

  onSubmit(): void {
    if (!this.form.valid) {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const model = this.form.getRawValue();
    const formData = new FormData();
    formData.append('reportedByEmail', this.userEmailReporting);
    formData.append('subject', model.subject);
    formData.append('body', model.message);
    formData.append('type', `${this.translate.instant('General.APP_NAME')}: ${this.translate.instant('AppReporter.ISSUE_TITLE')}`);
    for (const droppedFile of this.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          formData.append('files', file);
        });
      }
    }
    this.isSubmiting = true;
    this.janusBambooHrService.sendNotification(formData)
      .subscribe({
        error: (err: any) => {
          this.isSubmiting = false;
          console.error(err);
          this.notification.error(
            this.translate.instant('AppReporter.ERROR_RESPONSE')
          );
        },
        complete: () => {
          this.notification.success(
            this.translate.instant('AppReporter.SUCCESS_RESPONSE')
          );
          this.isSubmiting = false;
          this.router.navigate(['/']);
        },
      });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
