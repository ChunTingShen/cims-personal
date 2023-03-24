import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css']
  
})
export class TopbannerComponent {

  constructor(
    private router: Router,
    private _vps: ViewportScroller
    ){}

  toHome() {
    // console.log("to Home page")
    this.router.navigate(['/'])
    
  }


  toAbout() {
    
    this.router.navigate(['/']).then(()=> {
      try{        
        setTimeout(()=>{
          document.getElementById('about')?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
          
        }, 200)

      }
      catch(error){
        console.log(error);
      }

    })

    
  }

  toContact() {
    
    // console.log("to Contact page")
    this.router.navigate(['/contact'])
    
  }
}
