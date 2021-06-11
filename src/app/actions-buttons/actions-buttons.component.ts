import { Component, OnInit, Inject } from '@angular/core';
import { DATA_TOKEN } from '../data.token';

@Component({
  selector: 'app-actions-buttons',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.scss'],
})
export class ActionsButtonsComponent implements OnInit {
  constructor(@Inject(DATA_TOKEN) private data: string) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
