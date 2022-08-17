import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {

  pathImage: string = "https://picsum.photos/200/300?random=1"
  donneesCarte: {
    titre: string,
    description: string
  } = {
    titre: 'Titre de la carte',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }


  constructor() { }

  ngOnInit(): void {
  }



}
