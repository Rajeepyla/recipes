import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
protected optionList:{option:string}[]=[
{'option':'Party A'},
{'option':'Party B'},
{'option':'Division'}
]
public investments:FormGroup<any> = new FormGroup({
  name: new FormControl('', Validators.required),
  option: new FormControl('', Validators.required)
})


   protected details=[{name:'rajee', designation:'Dev'},{name:'Naveen', designation:'SR.Dev'}, {name:'Anil', designation:'QA'}]
 value:any

//  ShowDesignation(values:any){
//  this.value = values
 
//  }
showDesignations = false;
designations: string[] = [];

constructor() { }

showAllDesignations() {
  this.showDesignations = true;
  console.log(this.designations)
  this.designations = this.details.map(detail => detail.designation);
  console.log(this.designations)
}
}
