import { ActionsService } from './../actions.service';
import { Component, OnInit } from '@angular/core';

export interface Order {
  item: string;
  address: string;
  country: string;
}


const ORDERS_DATA: Order[] = [
  { item: 'iPhone 12', address: 'Rammstein Straße 4', country: 'Germany' },
  { item: 'MacBook Pro', address: 'Oida Gasse 5', country: 'Austria' },
];


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  displayedColumns: string[] = ['item', 'address', 'country'];
  dataSource = ORDERS_DATA;


  constructor(private actions: ActionsService) { }

  ngOnInit(): void {
    this.actions.switchContext('orders');
  }

}
