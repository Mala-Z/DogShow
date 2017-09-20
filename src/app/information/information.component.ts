/**
 * Created by St_Muerte on 9/20/17.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  selector: 'information',
  template:`

<div>
  <div *ngIf="mybool===0"style="text-justify: distribute" align="justify">
   

<p>Please feel free to fill out the form below and help us by becoming a volunteer at the event.</p>


  </div>
  
  <div *ngIf="mybool===1" >
  <p>The Staffordshire Bull Terrier is a medium-sized, stocky, and very muscular dog. This dog has a broad head, dark round eyes and a wide mouth. The ears are small, cheek muscles are pronounced, the lips show no looseness. The teeth form a scissor bite. 

They are coloured brindle, black, red, fawn, blue, white, or any blending of these colours with white.</p>
    The show is open for all dogs and it will take place in Valby's Maxi Zoo!
    Come and enjoy the fun of the Nanny Dog
  </div>
  <div *ngIf="mybool===2" >
    We need as many volunteers as we can.
    All sorts of skills are need it.
  </div>
  </div>
  `
})
export class InformationComponent {

  mybool:number;
  constructor(private router: Router){
    console.log(this.router.url)

  }
  /*logic for showing the right information depending on router called*/
  showDiv(){
    if (this.router.url === '/home') {
      this.mybool = 0;
    }else if(this.router.url === '/about'){
      this.mybool = 1;
    } else if(this.router.url === '/volunteer'){
      this.mybool = 2;
    }
  }


  /*calling the function with the information if statements*/
  ngOnInit()
  {
    this.showDiv();
  }
}


