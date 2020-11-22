import { Component, OnInit,EventEmitter, Output,Input } from '@angular/core';
import { AvatarService } from '../../../avatar.service';
import { Avatar } from '../../../models/Avatar';

@Component({
  selector: 'app-avatar-color',
  templateUrl: './avatar-color.component.html',
  styleUrls: ['./avatar-color.component.css']
})
export class AvatarColorComponent implements OnInit {

  @Output() changeColor: EventEmitter<any> = new EventEmitter();


  constructor(private avatarService:AvatarService) {

   }
  ngOnInit(): void {
  }

  sendColor(color:string)
  {
    this.avatarService.addColor(color);
    this.changeColor.emit(color);
  }

}
