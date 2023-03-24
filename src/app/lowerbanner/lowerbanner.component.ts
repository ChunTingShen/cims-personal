import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lowerbanner',
  templateUrl: './lowerbanner.component.html',
  styleUrls: ['./lowerbanner.component.css']
})
export class LowerbannerComponent {
  constructor(private router: Router){}


  toHome() {
    // console.log("to Home page")
    this.router.navigate(['/'])
    document.getElementById('name')?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

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
