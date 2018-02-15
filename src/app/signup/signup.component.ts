import { Component, OnInit } from '@angular/core';
import { RegisterService } from './shared/register-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [RegisterService]
})
export class SignupComponent implements OnInit {

  constructor(private regService: RegisterService) { }

  ngOnInit() {
  }

}
