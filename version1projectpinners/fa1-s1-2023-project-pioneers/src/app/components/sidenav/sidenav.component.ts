import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Liste des collaborateurs',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/home/collaborators']
            },
            {
                label: 'Injection des fichiers',
                icon: 'pi pi-fw pi-upload',
                routerLink: ['/home/upload']
            },
            {
                label: 'Automatisation de la restitution',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/home/restitution']
            },

            {separator: true},

            {
                label: 'Déconnexion',
                icon: 'pi pi-fw pi-power-off',
                routerLink: ['/home/']
            },
        ];
    }

}
