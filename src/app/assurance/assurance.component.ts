import { Component } from '@angular/core';
import { Assurance } from './assurance.model';
import { AssuranceService} from './assurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrl: './assurance.component.scss'
})
export class AssuranceComponent {

  assurances: Assurance[] = [];
  assurance : Assurance = new Assurance();
  
  constructor(private assuranceService: AssuranceService, private router: Router){}
  getAssurance(){
    this.assuranceService.getAssuranceList().subscribe(data => {
    this.assurances = data;
    });
  }
  ngOnInit(){
    this.getAssurance();
  }
  addAssurance(){
    this.assuranceService.addAssurance(this.assurance).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
  }
  ngSubmit(){
    this.addAssurance();
  }
}
