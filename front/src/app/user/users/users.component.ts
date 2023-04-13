import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  isLoaded: boolean = false;
  numbers = [0, 1, 2, 3];

  usuarios!: any;
  usersPag: any;
  usuarioslength: number = 0;

  page: number = 1;
  rows: number = 4;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsuarios();
    this.getUsuariosPag(this.page, this.rows);
  }

  getUsuarios() {
    this.userService.index().subscribe((data: any) => {
      this.usuarios = data.users;
      this.usuarioslength = this.usuarios.length;
    })
  }

  getUsuariosPag(page: number, limit: number) {
    this.userService.indexPag(page, limit).subscribe((data:any) => {
      this.usersPag = data.usuarios;
      this.isLoaded = true;
    })
  }

  onPageChange(event: any) {
    this.page = event.page+1;
    this.rows = event.rows;
    this.userService.indexPag(this.page, this.rows).subscribe((data:any) => {
      this.usersPag = data.usuarios;
    })
  }
}
