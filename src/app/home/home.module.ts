import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [ReactiveFormsModule,SharedModule, HomeRoutingModule,HttpClientModule],
  declarations: [HomeRoutingModule.components]
})
export class HomeModule { }
