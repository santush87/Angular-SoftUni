import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit{

  ngOnInit(): void {
    console.log('navigation -> init')
  }
  isActive = false;

  activeUsers = [
    { name: 'Martin', age: 36 },
    { name: 'Anatol', age: 35 },
    { name: 'Ceco', age: 36 },
    { name: 'Botev', age: 35 },
  ];

  handleClick() {
    this.isActive = !this.isActive;
  }
}
