import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switchArray = [];

  addSwitch(){
    for(let i = 0; i < 10; i++){
      const on_off = (Math.floor(Math.random()*2)) + 1;
      if(on_off == 1){
        this.switchArray.push("red");
      } else{
        this.switchArray.push("green");
      }
    }
  }

  change(index: number){
    if(this.switchArray[index] === "green"){
      this.switchArray[index] = "red";
    } else {
      this.switchArray[index] = "green";
    }
  }

  ngOnInit(){
    this.addSwitch();
  }
}
