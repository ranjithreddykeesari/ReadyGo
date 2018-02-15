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

  constructor(private usersService: RegisterService) { }

  ngOnInit() {
  }

}
