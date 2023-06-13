import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
UserList:user[]=[];

constructor(private servicehttp:ServiceService){

}
  ngOnInit(): void {
    this.getUserData();
    console.log(this.UserList);
    
  }
  getUserData(){
    this.servicehttp.getDataToUserList("users").subscribe((el:any)=>{
      this.UserList=el.data;
      console.log(this.UserList);
    })
  }


}

export interface user{
  id:number;
  email:string;
  first_name:string;
  last_name:string;
  avatar:string;
}

