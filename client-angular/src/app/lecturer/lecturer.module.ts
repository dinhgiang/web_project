import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerComponent } from './lecturer.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListPlanReportComponent } from './list-plan-report/list-plan-report.component';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { LecturerRoutingModule } from './lecturer-routing.module'
import { MessageModalComponent } from '../user/message-modal/message-modal.component';
import { UserModule } from '../user/user.module';
import { LecturerService } from './lecturer.service';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    LecturerRoutingModule,
    UserModule,
    ShareModule
  ],
  declarations: [LecturerComponent, 
    ListStudentComponent,
    ListPlanReportComponent,
    ListStudentFollowMeComponent,
  ],
  providers:[LecturerService]
})
export class LecturerModule { }
