import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  YT = 'Kuldeep Patil'

  getyoutubechannel(){
    return "My Name"
  }
  txt1 = '';
  ytname = '';
  number1=0;
  number2=0;
  sum=0;
  calc(num1:any,num2:any)
  {
    this.sum=parseFloat(num1)+parseFloat(num2);
  }
  getvalue(val: any ){
    this.ytname = val;
     console.warn(val);
  }
  eventhandling(val:any){
console.warn(val)
  }
  obj={
    name:'Ashish', age:'28', gender:'Male'
  }
}
