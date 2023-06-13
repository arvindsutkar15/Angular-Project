import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any[], Search: any): any[] {
    if(!value){
      return value;
    }else{
        return value = value.filter((el:any)=>{
         return el.name.toLowerCase().includes(Search) || 
          el.status.toLowerCase().includes(Search)
      })
     
    }
    
  }

}
