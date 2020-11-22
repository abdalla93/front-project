import { Injectable } from '@angular/core';
import { Avatar } from '../app/models/Avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  avatar:Avatar;
  constructor() {
    this.avatar={
      name:'',
      glasses:'none',
      color:'#ffdbac'
    }
   }
  addname(name:string) {
    this.avatar.name=name;
  }
  addColor(color:string) {
     this.avatar.color=color;
    // console.log(this.avatar.color);
  }
  addGlasses(glasses:string) {

    this.avatar.glasses=glasses;
  //  console.log(this.avatar.color);
 }
}
