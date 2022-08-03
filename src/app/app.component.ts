import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public title:string = ' ANGULAR'
  public name:string =""
  public count=0
  public type:string =""
  public input =0
  public typeOF :string =""
  public fruits =[                      //7
    {"name": "Apple",  "price":100},
    {"name":"Orange",  "price":120},
    {"name":"Grape",   "price":90 },
    {"name":"Banana",  "price":80 },
    {"name":"Mango",   "price":120}
 ]


  ngOnInit(){

  }
  public data ={
    name :"Aravind",
    wife :"Rishika",
    friend :"Arya"
}
center(){
  return "center"  //1
}

colorfunction(){     
  return"yellow"  //2
}

margintop(){
  return "1cm"  
}

clickf(){
  console.log("hy");
  return this.name="Aravind"  //3
  
}
hide(){
  return this.name=""         //4
}

increment(){
  this.count++                //5
  if(this.count%2==0){
    this.type="even"
  }else if(this.count%2==1){
    this.type="odd"
  }else{
    this.type="undefined"
  }
}

decrement(){
  this.count--                //5
  if(this.count%2==0 ){
    this.type="even"
  }else if(this.count%2==1 ){
    this.type="odd"
  }else{
    this.type ="undefined"
  }
  }

 typeN(){
  if(this.input%2==0 ){       //6
     this.typeOF="even"
  }else if(this.input%2==1){      
    this.typeOF ="odd"
  }else{
    this.typeOF="undefined"
  }
 } 

 hide2(){                     //6
  if(this.input==null){
  this.typeOF =""             
 }else{
  this.typeOF=""
 }
}

}
