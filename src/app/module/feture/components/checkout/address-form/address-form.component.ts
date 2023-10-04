import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  addresses = [1,1,1];

  addressForm: FormGroup = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    streetAddress: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    zipCode: ["", Validators.required],
    mobile: ["", Validators.required],
  })

  constructor(private fb: FormBuilder){}

  handleCreateOrder(order:any){

  }

  handleSubmit(){
    const formValue = this.addressForm.value;
    console.log("Addresses", formValue);
  }
  getErrorMessage(){

  }

  get firstName(){ return this.addressForm.get('firstName')  as FormArray; }
  get lastName(){ return this.addressForm.get('lastName')  as FormArray; }
  get streetAddress(){ return this.addressForm.get('streetAddress')  as FormArray; }
  get city(){ return this.addressForm.get('city')  as FormArray; }
  get state(){ return this.addressForm.get('state')  as FormArray; }
  get zipCode(){ return this.addressForm.get('zipCode')  as FormArray; }
  get mobile(){ return this.addressForm.get('mobile')  as FormArray; }
}
