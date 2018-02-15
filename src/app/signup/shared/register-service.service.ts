import { Injectable } from '@angular/core';
import { RegisterModel } from './register-model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class RegisterService {
  public usersList: AngularFireList<any>;
  selectedUser : RegisterModel = new RegisterModel();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.usersList = this.firebase.list('users');
    return this.usersList;
  }
  insertUser(users: RegisterModel){
    let usersIns = this.firebase.list('/users');

    console.log(users.gender+"user inserting");
    usersIns.push({
      name : users.name, 
      phone : users.phone,
      email : users.email,
      password : users.password,
      gender : users.gender,
      role : users.role

    }).then(()=>console.log("push successfull"));
  }
  updateUser(users:RegisterModel){
    let usersUpd = this.firebase.list('/users');
    usersUpd.update(users.$key,{
      name : users.name, 
      phone : users.phone,
      email : users.email,
      password : users.password,
      gender : users.gender,
      role : users.role
    }).then(()=>console.log(users.name+"updated successfully"))
  }
  deleteUser(user:RegisterModel){
    let userDel = this.firebase.list('/users');
    userDel.remove(user.$key).then(()=>console.log(user.name+"updated successfully"));
  }

}
