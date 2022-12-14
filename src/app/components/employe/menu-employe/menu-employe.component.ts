import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-employe',
  templateUrl: './menu-employe.component.html',
  styleUrls: ['./menu-employe.component.css']
})
export class MenuEmployeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  deconnect() {
    localStorage.setItem('role', '');
    this.router.navigate(['/']);
  }

}
