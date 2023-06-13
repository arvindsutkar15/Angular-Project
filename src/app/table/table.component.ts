import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
TableData:Table[]=[];
Search:string="";
  constructor(private servicehttp:ServiceService){

  }
  ngOnInit(): void {
   this.getData();
   console.log(this.TableData);
   
   
  }

  SearchData(res:any){
    this.Search=res;
  }

  getData(){
    // this.servicehttp.getDataToServer("characters").subscribe((el:any)=>{
    //   this.TableData=el.results;

    this.servicehttp.getDataToServer("character").subscribe((el:any)=>{
      this.TableData=el.results;
      console.log(this.TableData);
    })
  }

}

export interface Table{
  id:number;
  name:string;
  status:string;
  species:string;
  gender:string;
  image:any;
}
