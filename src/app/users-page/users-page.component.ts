import { ActionsService } from './../actions.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export interface User {
  name: string;
  lastName: string;
  profession: string;
}


const USER_DATA: User[] = [
  {name: 'Dmytro', lastName: 'Mezhenskyi', profession: 'Frontend Developer'},
  {name: 'Daria', lastName: 'Lazurenko', profession: 'UI Designer'},
];


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'profession'];
  dataSource = USER_DATA;

  addNew$: Observable<boolean>;

  constructor(private actions: ActionsService) { }

  ngOnInit(): void {
    this.actions.switchContext('users');
    this.addNew$ = this.actions.onAddNewItem$.pipe(mapTo(true))
    this.actions.onDelete$.subscribe(
      () => console.log('Handle delete user ...')
    );
  }

}
