import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgxFileDropModule, NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { FormGroup } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { SharedModule } from "@app/shared/shared.module";

@Component({
  standalone: true,
  selector: 'app-reporter-form',
  templateUrl: './app-reporter-form.component.html',
  imports: [SharedModule, NgxFileDropModule],
})
export class AppReporterFormComponent {
  @Input('title') title: string = '';
  @Input('hint') hint: string = '';
  @Input('form') form!: FormGroup;
  @Input('files') files!: NgxFileDropEntry[];
  @Input('isSubmiting') isSubmiting: boolean = false;
  @Output() onAddAttachment: EventEmitter<NgxFileDropEntry> = new EventEmitter();
  @Output() onRemoveAttachment: EventEmitter<NgxFileDropEntry> = new EventEmitter();
  @Output() onSubmit: EventEmitter<void> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  MAX_MB_ATTACHMENTS = 4; // 4MB
  MAX_ATTACHEMENTS = 3;

  constructor(
    private readonly translate: TranslateService,
  ) {}

  handleAddAttachment(files: NgxFileDropEntry[]): void {
    if (this.files.length + files.length > this.MAX_ATTACHEMENTS) {
      alert(this.translate.instant('AppReporter.ATTACHMENTS_HINT'));
      return;
    }
    for (const droppedFile of files) {
      if (this.files.filter((currFile) => currFile.relativePath === droppedFile.relativePath).length > 0) {
        continue;
      }
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const fileSizeInMb = (file.size / 1024) / 1024;
          const totalSizeInMb = this.files.reduce((acc, curr) => {
            const currFileEntry = curr.fileEntry as FileSystemFileEntry;
            return currFileEntry.file((currFile: File) => {
              const currFileSizeInMb = (currFile.size / 1024) / 1024;
              return acc + currFileSizeInMb;
            });
          }, fileSizeInMb);
          if (
            (file.type === 'image/png'
            || file.type === 'image/jpg'
            || file.type === 'image/jpeg'
            || file.type === 'image/tiff'
            || file.type === 'image/gif') &&
            totalSizeInMb < this.MAX_MB_ATTACHMENTS
          ) {
            this.onAddAttachment.emit(droppedFile);
          }
        });
      } else {
        continue;
      }
    }
  }

  handleRemoveAttachment(itemToRemove: NgxFileDropEntry): void {
    this.onRemoveAttachment.emit(itemToRemove);
  }

  handleSubmit(): void {
    this.onSubmit.emit();
  }

  handleCancel(): void {
    this.onCancel.emit();
  }
}
