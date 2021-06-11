import { ComponentPortal } from '@angular/cdk/portal';
import { PortalBridgeService } from './../portal-bridge.service';
import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ActionsButtonsComponent } from '../actions-buttons/actions-buttons.component';
import { DATA_TOKEN } from '../data.token';
export interface User {
  name: string;
  lastName: string;
  profession: string;
}

const USER_DATA: User[] = [
  { name: 'Dmytro', lastName: 'Mezhenskyi', profession: 'Frontend Developer' },
  { name: 'Daria', lastName: 'Lazurenko', profession: 'UI Designer' },
];

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  portalContent: ComponentPortal<ActionsButtonsComponent>;

  displayedColumns: string[] = ['name', 'lastName', 'profession'];
  dataSource = USER_DATA;

  constructor(private portalBridge: PortalBridgeService) {}

  ngOnInit(): void {
    const portalInjector = Injector.create({
      providers: [{ provide: DATA_TOKEN, useValue: 'Hello from Portal' }],
    });
    this.portalContent = new ComponentPortal<ActionsButtonsComponent>(
      ActionsButtonsComponent,
      null,
      portalInjector
    );
    this.portalBridge.setPortal(this.portalContent);
  }
  ngOnDestroy() {
    this.portalContent.detach();
  }
}
