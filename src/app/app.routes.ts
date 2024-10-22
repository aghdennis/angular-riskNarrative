import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyOfficerComponent } from './company-officer/company-officer.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'company', pathMatch: 'full'},
    { path: 'company', component: CompanyComponent, pathMatch: 'full', canActivate: [authGuard]},
    { path: 'list/:searchTerm', component: CompanyListComponent, pathMatch: 'full', canActivate: [authGuard]},
    { path: 'details/:number', component: CompanyDetailComponent, pathMatch: 'full',canActivate: [authGuard]},
    { path: 'officers/:number/:companyName', component: CompanyOfficerComponent, pathMatch: 'full',canActivate: [authGuard]},
    { path:'login', component: LoginComponent, pathMatch: 'full'},
    { path:'**', component: ErrorComponent, pathMatch: 'full'}
];
