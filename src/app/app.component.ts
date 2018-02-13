import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'app';
  isChecked = false;
  para = "test";
  users: User[];
  myusers: string[];
  mylist;
  i:number = 0;

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get("http://localhost:8880/api/user")
      .map((response: Response) => response.json())
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get("http://localhost:8880/api/user")
  //     .map((response: Response) => <User[]>response.json())
  // }

  ngOnInit() {
    // console.log(this.requestAutocompleteItems);
    this.getUsers()
      .subscribe((u => this.users = u));

    // console.log(this.users);

  }

  getUserList() {
    this.getUsers()
      .subscribe((u => this.users = u));
    this.getUsers().subscribe((u => this.users = u));

    for (let key of Object.values(this.users)) {
      // this.myusers = this.users[key];
      while (this.users) {
        this.mylist[this.i] = key.UserName;
        this.i++;
      }
    }

    for (let u of this.users)
        console.log(u);
  }

  // public requestAutocompleteItems = (text: string): Observable<Response> => {
  //   return this.http.get("http://localhost:8880/api/user")
  //     .map(data => data.json());

  // };




}

