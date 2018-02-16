import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register-service.service'; 
import {AngularFireList } from 'angularfire2/database';
import { RegisterModel } from '../shared/register-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: RegisterModel[];
  constructor(private usersService: RegisterService) { }

  ngOnInit() {
   var da = this.usersService.getData();
   da.snapshotChanges().subscribe(item => {
     this.usersList = [];
     item.forEach(element => {
       var conJs = element.payload.toJSON();
       conJs['$key'] = element.key;
       this.usersList.push(conJs as RegisterModel)

     })
   });

  }
  onItemClick(user: RegisterModel){
    this.usersService.selectedUser = Object.assign({},user);
  }
}
