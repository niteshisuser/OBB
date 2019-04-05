import { Component, OnInit,ViewChild, NgModule} from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import {UserRegistrationService } from '../../services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('userForm') userForm: NgForm;
  myControl = new FormControl();
  currentUser: User = {
    Name : '',
    Email: '',
    Phone: '',
    Zip: '',
    State: '',
    Country: ''    
  };

  countryDetails: [];
  filteredCountry: any;
  constructor(private userRegistrationService: UserRegistrationService) { 
    this.bindCountry();
  }

  ngOnInit() {
  }

  bindCountry() {
    this.userRegistrationService.getCountryList().subscribe((res:any)=>{
      this.countryDetails =  res;
    });
  }
}
