import { Component, OnInit,EventEmitter, Output,Input } from '@angular/core';

import { AvatarService } from '../../../avatar.service';

@Component({
  selector: 'app-avatar-glasses',
  templateUrl: './avatar-glasses.component.html',
  styleUrls: ['./avatar-glasses.component.css']
})
export class AvatarGlassesComponent implements OnInit {
  @Output() changeGlasses: EventEmitter<any> = new EventEmitter();

  constructor(private avatarService:AvatarService) {

  }
 ngOnInit(): void {
 }

 sendGlasses(glass:string)
 {
   this.avatarService.addGlasses(glass);
   this.changeGlasses.emit(glass);
 }
}
