import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coach } from '../Models/coach.Model';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http: HttpClient) { }

  getAllCoaches() {
    return this.http.get<Array<Coach>>('http://localhost:8080/coach');
  }

  getCoachByUsername(username) {
    return this.http.get<Coach>('http://localhost:8080/coach/byUsername/' + username);
  }

  getCoachById(id) {
    return this.http.get<Coach>('http://localhost:8080/coach/' + id);
  }

  saveCoach(coach: Coach) {
    this.http.post<Coach>('http://localhost:8080/coach/addCoach', coach).subscribe(res => {
      console.log(res);
    });
  }
  updateCoach(coach: Coach, id) {
    this.http.put<Coach>('http://localhost:8080/coach/updateCoach/' + id, coach).subscribe(res => {
      console.log(res);
    });
  }
}
