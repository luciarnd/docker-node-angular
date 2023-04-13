import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserDetailComponent{
  isLoaded = false;

  userId!: number;
  usuario: any;

  constructor(private router: ActivatedRoute, private userService: UserService) {
    this.userId = this.router.snapshot.params['userId'];
    this.getUser(this.userId);
  }

  getUser(id: number) {
    this.userService.view(id).subscribe((data: any) => {
      this.usuario = data.user;
      this.isLoaded = true;
    });
  }
}
