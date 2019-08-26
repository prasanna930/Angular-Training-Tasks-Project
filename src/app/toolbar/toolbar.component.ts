import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  display: any;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'ReactiveForms',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'form1',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'template'
          },
          {
              label: 'componentcommunication',
              icon: 'pi pi-fw pi-external-link',
              routerLink: 'communication'
            },
          {
            label: 'services',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'services'
          },
          {
            label: 'Directives',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'directive'
          },
          {
            label: 'FormArray',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'array'
          },
          {
            label: 'Pipes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'pipes'
          },
          {
            label: 'jsontotable',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'address'
          },
          {
            label: 'DataBinding',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'data'
          },
          {
            label: 'Arraymethods',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'arraymethods'
          },
          {
            label: 'observables',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'observables'
          },
          {
            label: 'operators',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'fromeventpattern'
          },
          {
            label: 'proxyserver',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'proxy'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'DynamicCheckbox',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'dynamiccheckbox'
          },
          {
            label: 'multiCheckboxes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'multicheckbox'
          },
          {
            label: 'lazyloading',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'customers'
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus' },
          { label: 'Actions', icon: 'pi pi-fw pi-cog' }
        ]
      }
    ];
  }
}
