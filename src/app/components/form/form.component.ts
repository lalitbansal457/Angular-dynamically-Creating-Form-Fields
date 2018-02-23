import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder, FormArray, ReactiveFormsModule,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  constructor(public formBuilder:FormBuilder) {}

  	orderForm: FormGroup;
  	items:FormArray;

  	ngOnInit() {
  	  this.orderForm = this.formBuilder.group({
  	    customerName: '',
  	    email: '',
  	    items: this.formBuilder.array([ this.createItem() ])
  	  });
  	}

  	// formcontrol name that should be created dynamically
  	createItem(): FormGroup {
  	  return this.formBuilder.group({
  	    name: '',
  	    description: '',
  	    price: ''
  	  });
  	}

  	addItem(): void {
  	  this.items = this.orderForm.get('items') as FormArray;
  	  this.items.push(this.createItem());
      console.log(this.orderForm.controls.items.value) // get value of form fields
  	}

}

