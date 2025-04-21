import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mark-attendance',
  imports: [ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent {
  constructor(private _Router: Router, private _mainService: MainService) { }
  attendanceForm = new FormGroup({
    department: new FormControl(null, [Validators.required]),
    currentYear: new FormControl(null, [Validators.required])
  })
  statusMessage = '';
  onMarkAttendance() {
    if (this.attendanceForm.value.currentYear != null && this.attendanceForm.value.department != null) {
      const { department, currentYear } = this.attendanceForm.value;
      this.statusMessage = `Scanning started for ${department} - ${currentYear}`;
      this.scan(this.attendanceForm);
    } else {
      this.statusMessage = 'Please select both Department and Year!';
    }
  }
  scan(formData: FormGroup) {
    this._mainService.register(formData.value).subscribe({
      next: (res: any) => {
        this.statusMessage = res.message;
      }, error: (err: any) => {
        this.statusMessage = err.error.message;
      }
    })
  }
}
