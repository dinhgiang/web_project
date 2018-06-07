import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { RouterModule } from '@angular/router';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { AssessStudentComponent } from './assess-student/assess-student.component';
import { FormPartnerComponent } from './form-partner/form-partner.component';
import { ShareModule } from '../share/share.module';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { UserModule } from '../user/user.module';


@NgModule({
  imports: [
    CommonModule,
    PartnerRoutingModule,
    ShareModule,
    UserModule
  ],
  declarations: [
    PartnerComponent,
    AddNewPostComponent,
    ManagePostComponent,
    AssessStudentComponent,
    FormPartnerComponent,
    ListStudentFollowMeComponent
  ],
  exports: [PartnerComponent,
    FormPartnerComponent
  ],
})
export class PartnerModule { }
