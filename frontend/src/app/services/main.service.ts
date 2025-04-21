import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  hostName: string = '';
  routeName: string = '';
  constructor(private _HttpClient: HttpClient, private _Router: Router, private _GlobalService: GlobalService) {
    this.hostName = this._GlobalService.hostName;
    this.routeName = this._GlobalService.authRoute;
  }
  register(formData: any) {
    return this._HttpClient.post(`${this.hostName}${this.routeName}/attendance/markAttendance`, formData)
  }
  addStudent(formData: any) {
    return this._HttpClient.post(`${this.hostName}${this.routeName}/auth/Registration`, formData)
  }
  export(date: any, department: any, currentYear: any) {
    const url = `${this.hostName}${this.routeName}/export/export2csv?date=${date}&department=${department}&currentYear=${currentYear}`;
    return this._HttpClient.get(url, { responseType: 'blob' })
  }
}