import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AvatarService } from '../../../avatar.service';

@Component({
  selector: 'app-avatar-input',
  templateUrl: './avatar-input.component.html',
  styleUrls: ['./avatar-input.component.css']
})
export class AvatarInputComponent implements OnInit {
  @Output() addname: EventEmitter<any> = new EventEmitter();

  name:string;
  constructor(private avatarService:AvatarService) {
    this.name = '';
   }
  ngOnInit(): void {
  }
  onSubmit() {


    this.avatarService.addname(this.name);
  }

}
