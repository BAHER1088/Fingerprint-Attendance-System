import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-manage-student',
  imports: [ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.css'
})

export class ManageStudentComponent {

  constructor(private _MainService: MainService, private _Router: Router) { }

  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    studentID: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    department: new FormControl(null, [Validators.required]),
    currentYear: new FormControl(null, [Validators.required])
  });

  statusMessage = '';

  onRegister() {
    this._MainService.addStudent(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.statusMessage = 'Registration successful!';
        this.registerForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.statusMessage = 'Registration failed. Please try again.';
      }
    });

  }
}