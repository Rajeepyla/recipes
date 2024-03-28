import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiDataService } from 'src/service/api-data.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})


export class ServerComponent implements OnInit {
constructor(private service: ApiDataService){}
  ngOnInit(): void {
    this.allDetails()
  }

  names:any
  public person: FormGroup= new FormGroup({
    first: new FormControl(),
    last:new FormControl(),
    email: new FormControl()

  })
  addDetails(){
    this.service.detailsAding(this.person.value).subscribe((data:any)=>{
      console.log(data)
      this.person.reset
    })
  }
  allDetails(){
this.service.getting().subscribe((data:any)=>{
  console.log(data)
  this.names=data
  this.person.reset()
})
  }
  deleting(id:any){
this.service.del(id).subscribe((data:any)=>{
  console.log(data)
})
  }
  editDetails(name:any){console.log(name)
    this.person.patchValue({
      
      first:name.first,
      last:name.last,
email:name.email
    })
  }
  uppdatedValue(){
this.service.updating(this.person.value).subscribe((data:any)=>{

})
  }
}
