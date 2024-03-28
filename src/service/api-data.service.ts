import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {


  constructor(public _http:HttpClient  ) { }

  public baseUrl:string = ' http://localhost:3000/posts';
  get(){
    return this._http.get(`${this.baseUrl}`)
  }
  update(details:any){
    return this._http.post(`${this.baseUrl}`, details)
  }
  edit(id:any){
 
    return this._http.put(`${this.baseUrl}/${id.id}`, id)
  }
  delete(id:any){
    return this._http.delete(`${this.baseUrl}/${id}`)
  }
  detailsAding(data:any){
return this._http.post(`${this.baseUrl}`, data)
  }
  getting(){
return this._http.get(`${this.baseUrl}`)
  }
  del(id:any){
    return this._http.delete(`${this.baseUrl}/${id}`)
  }
  editings(id:any){
    return this._http.put(`${this.baseUrl}/${id.id}`, id)
  }
  updating(id:any){
    return this._http.post(`${this.baseUrl}`, id)
  }
}
