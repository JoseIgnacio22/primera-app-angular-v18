import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Final Fantasy VII',
    },
    {
      id: 2,
      name: 'The Legend of Zelda: Ocarina of Time',
    },
    {
      id: 3,
      name: 'Super Mario 64',
    },
    {
      id: 4,
      name: 'Chrono Trigger',
    },
    {
      id: 5,
      name: 'The Legend of Zelda: A Link to the Past',
    },
    {
      id: 6,
      name: 'Super Metroid',
    },
    {
      id: 7,
      name: 'Super Mario World',
    },
    {
      id: 8,
      name: 'The Legend of Zelda: Breath of the Wild',
    },
    {
      id: 9,
      name: 'Super Mario Odyssey',
    },
    {
      id: 10,
      name: 'The Legend of Zelda: Majora\'s Mask',
    }
  ]
}
