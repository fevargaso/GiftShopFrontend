import { NgModule } from '@angular/core';
import { AntdModule } from '../core/antd/antd/antd.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: [CommonModule, TranslateModule, RouterModule, FormsModule, ReactiveFormsModule, AntdModule],
})
export class SharedModule {}
