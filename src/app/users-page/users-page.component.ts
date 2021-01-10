import { CdkPortal } from '@angular/cdk/portal';
import { PortalBridgeService } from './../portal-bridge.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(CdkPortal, { static: true })
  portalContent: CdkPortal;

  displayedColumns: string[] = ['name', 'lastName', 'profession'];
  dataSource = USER_DATA;

  showForm = false;

  constructor(private portalBridge: PortalBridgeService) {}

  ngOnInit(): void {
    this.portalBridge.setPortal(this.portalContent);
  }
  ngOnDestroy() {
    this.portalContent.detach();
  }
}
