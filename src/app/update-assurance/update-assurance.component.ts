import { Component } from '@angular/core';
import { Assurance } from '../assurance/assurance.model';
import { AssuranceService } from '../assurance/assurance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-assurance',
  templateUrl: './update-assurance.component.html',
  styleUrl: './update-assurance.component.scss'
})
export class UpdateAssuranceComponent {
  assurances : Assurance[] = [];
  assurance : Assurance = new Assurance();
  id!: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.assuranceService.getAssuranceById(this.id).subscribe(data =>{
    this.assurance = data;
  });
  }

  constructor(private assuranceService : AssuranceService, private route : ActivatedRoute, private router : Router){}
  goToAssuranceHome(){
    this.router.navigate(['/admin/assurance'])
  }

  ngSubmit(){
    this.assuranceService.updateAssurance(this.id, this.assurance).subscribe(data =>{
      this.goToAssuranceHome();
    });
  }


}
