import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
