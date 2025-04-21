import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarkAttendanceComponent } from './pages/mark-attendance/mark-attendance.component';
import { ManageStudentComponent } from './pages/manage-student/manage-student.component';
import { ExportAttendanceComponent } from './pages/export-attendance/export-attendance.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'markAttendance', component: MarkAttendanceComponent },
    { path: 'manageStudent', component: ManageStudentComponent },
    { path: 'exportAttendance', component: ExportAttendanceComponent },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' },
];