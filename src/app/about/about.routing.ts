import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';


const aboutRoutes: Routes = [

    {path: '',
     component: AboutSectionComponent,
     children: [

        {
             path : '', 
             component: AboutComponent, 
            //  data:{message: 'This is my data message'}
            resolve: { users: AboutUsersResolve }
        },
        { path : ':username', component: AboutUserComponent,
            resolve: AboutUserResolve},
     ]
    }
];

export const aboutRouting = RouterModule.forChild(aboutRoutes);