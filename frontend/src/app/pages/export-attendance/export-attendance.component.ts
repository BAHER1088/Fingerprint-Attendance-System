import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MainService } from '../../services/main.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-export-attendance',
  imports: [ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './export-attendance.component.html',
  styleUrl: './export-attendance.component.css'
})
export class ExportAttendanceComponent {
  constructor(private _Router: Router, private _mainService: MainService) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.maxDate = `${year}-${month}-${day}`;
  }
  exportForm = new FormGroup({
    department: new FormControl(null, [Validators.required]),
    currentYear: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required])
  })

  statusMessage = '';
  maxDate: string;


  onExport() {
    const { department, currentYear, date } = this.exportForm.value;
    this._mainService.export(date, department, currentYear).subscribe({
      next: (res: any) => {
        this.statusMessage = "file exporting";
        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(res);
        downloadLink.href = url;
        downloadLink.download = 'attendance for ' + department + ' ' + currentYear + ' ' + date + '.csv';
        downloadLink.click(); ``
        window.URL.revokeObjectURL(url);
        setTimeout(() => {
          this.statusMessage = "file exported";
        }, 3000)

      }, error: (err: any) => {
        this.statusMessage = 'server Error';
      }
    })
  }
}