import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coach-create-program',
  templateUrl: './coach-create-program.component.html',
  styleUrls: ['./coach-create-program.component.css']
})
export class CoachCreateProgramComponent implements OnInit {
  id: any;
  form: any;
  constructor(private formBuilder: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.id = localStorage.getItem('coachId');
    this.form = this.formBuilder.group({
      name: [],
      backgroundImage: [],
      description: [],
      objectives: this.formBuilder.array([]),
      duration: [],
      sex: [],
      tailleMax: [],
      tailleMin: [],
      poidsMax: [],
      poidsMin: [],
      frame: [],
      fatSorage: [],
      silhouette: []
          });
    this.addObjectif();
    console.log(this.form.value);
  }

  getObjectifsForm() {
    return this.form.get('objectives') as FormArray;
  }

  addObjectif() {
    const objective = this.formBuilder.group({
      objective: []
      });
    this.getObjectifsForm().push(objective);
    console.log(this.form.value);
  }

  deleteObjectif(i) {
    this.getObjectifsForm().removeAt(i);
  }

  nextForm() {
      window.localStorage.setItem('form1', this.form);
      this.route.navigate(['/espace/coach/create/program/form2/', this.id]);

  }
}