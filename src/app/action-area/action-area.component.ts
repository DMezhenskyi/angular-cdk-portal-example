import { Portal, PortalBridgeService } from './../portal-bridge.service';
import { TemplatePortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-area',
  templateUrl: './action-area.component.html',
  styleUrls: ['./action-area.component.scss'],
})
export class ActionAreaComponent implements OnInit {
  portal$: Observable<Portal>;

  constructor(private portalBridge: PortalBridgeService) {}

  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$;
  }
}
