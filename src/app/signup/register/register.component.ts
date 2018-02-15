import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register-service.service'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public roleList : any;
  public genList : any;

  constructor(private regCompService: RegisterService) {
    this.getRoleList();
    this.getGender();
  }
  private role= [{"id":1,"val":"Super Admin"},{"id":2,"val":"Admin"},{"id":3,"val":"End User"}];
  private gender = [{"id":1,"val":"Male"},{"id":2,"val":"Female"},{"id":3,"val":"Other"}];
  public defaultRole = this.role[0];
  public defaultGender = this.gender[0];
  ngOnInit() {
    this.resetForm();
  }
  getRoleList(){
    this.roleList = this.role;
  }
  getGender(){
    this.genList = this.gender;
  }

  onSubmit(form: any){
    if(form.value.key == null){
      this.regCompService.insertUser(form.value);      
    }else{
      this.regCompService.updateUser(form.value);
    }
     this.resetForm(form); 
  }
  changeRole(roleId:any){
    this.defaultRole = null;
    for(let i=0; i<this.role.length;i++){
      if(this.role[i].id == roleId){
        this.defaultRole = this.role[i];
        this.regCompService.selectedUser.role = this.role[i].id;
      }
    }
  }
  changeGender(genId: any){
    this.defaultGender = null;
    for(let i=0;i<this.gender.length;i++){
      if(this.gender[i].id == genId){
        this.defaultGender = this.gender[i];
        this.regCompService.selectedUser.gender = this.gender[i].id;
      }
    }
  }
  resetForm(form? : any){
    if(form != null)
    form.reset();
    this.regCompService.selectedUser = {
      $key: null,
      name: '',
      phone: null,
      email: '',
      password: '',
      gender : 1,
      role : 1
    }
  }
  deleteUser(form:any){
    if(confirm('Are you sure you want to delete this user')==true){
      this.regCompService.deleteUser(form.value);
      this.resetForm(form);
    }

  }
}
