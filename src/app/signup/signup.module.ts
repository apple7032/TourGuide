import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatError, MatLineModule, MatDatepickerModule, MatIconModule, MatNativeDateModule } from '@angular/material';
//import {IonicStepperModule} from 'ionic-stepper';

const routes: Routes =[
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    //IonicStepperModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {
  
}