import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarInputComponent } from './components/avatar/avatar-input/avatar-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvatarColorComponent } from './components/avatar/avatar-color/avatar-color.component';
import { AvatarGlassesComponent } from './components/avatar/avatar-glasses/avatar-glasses.component';
import { FormsModule } from '@angular/forms';
import { AvatarService } from './avatar.service';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    AvatarInputComponent,
    AvatarColorComponent,
    AvatarGlassesComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent,AvatarService]
})
export class AppModule { }
