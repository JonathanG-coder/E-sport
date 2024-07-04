import { Routes } from '@angular/router';
import { ListTeamComponent } from './views/list-team/list-team.component';
// import { MemberComponent } from './views/member/member.component';

export const routes: Routes = [
    { path: '', redirectTo: '/teams', pathMatch: 'full' },
    { path: 'teams', component: ListTeamComponent },
    // { path: 'member', component: MemberComponent },
    { path: 'teams/:id', loadComponent: () => import('./views/list-user/list-user.component').then(mod => mod.ListUserComponent) },
    { path: 'teams/:idTeam/:type/:idMember', loadComponent: () => import('./views/member/member.component').then(mod => mod.MemberComponent) }
];

