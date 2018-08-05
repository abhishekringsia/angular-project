import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  imports: [ReactiveFormsModule,SharedModule, PostRoutingModule],
  declarations: [PostRoutingModule.components]
})
export class PostModule { }
