import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { AuthGaurd } from '../shared/gaurds/auth-gaurd.service';
import { CanDeactivateGaurd } from '../shared/gaurds/can-deactivate-gaurd.service';

export const dashboardRoutes : Routes =[
{
    path: 'dashboard',
    children: [

        {
            path: '',
            canActivate: [ AuthGaurd ],
            component: DashboardComponent
        },

        {
            path: 'users',
            canActivateChild : [AuthGaurd],
            component: DashboardUsersComponent,
            children: [

                {
                    path: '',
                    component: DashboardUsersHomeComponent
                },
                {
                    path: ':username',
                    component: DashboardUserDetailsComponent,
                    canDeactivate: [CanDeactivateGaurd]
                }
            ]
        }
    ]
}

];

export const dashboardRouting : ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
