import { Component, OnInit,Input } from '@angular/core';
import * as faces from "facesjs";
import { AvatarService } from '../../avatar.service';
import { Avatar } from '../../models/Avatar';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatar:Avatar;
  face:any;

  constructor(private avatarService:AvatarService) {
    this.avatar=avatarService.avatar;

   }

  ngOnInit(): void {
    this.updateFace();
  }
  updateFace()
  {
    console.log(this.avatar);
    var overrides:any
    this.face=faces.generate(overrides);
    faces.display("my-div-id", this.face, {"fatness":0.03,"teamColors":["#5c7a8a","#f0494a","#cccccc"],"body":{"id":"body","color":`${this.avatar.color}`},"jersey":{"id":"football"},"ear":{"id":"ear2","size":1.18},"head":{"id":"head8","shave":"rgba(0,0,0,0)"},"eyeLine":{"id":"line4"},"smileLine":{"id":"none","size":0.65},"miscLine":{"id":"none"},"facialHair":{"id":"none"},"eye":{"id":"eye2","angle":-5},"eyebrow":{"id":"eyebrow3","angle":-6},"hair":{"id":"messy","color":"#272421","flip":false},"mouth":{"id":"smile3","flip":false},"nose":{"id":"nose2","flip":false,"size":0.57},"glasses":{"id":`${this.avatar.glasses}`},"accessories":{"id":`none`}});
  }

  changeColor(color:string) {
    this.updateFace()
  }
  changeGlasses(glasses:string) {
    this.updateFace()
  }

}
