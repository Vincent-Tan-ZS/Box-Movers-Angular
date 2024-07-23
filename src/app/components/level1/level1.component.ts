import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { GridType } from '../../Enums';
import { Position } from '../../Types';

@Component({
  selector: 'app-level1',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './level1.component.html',
  styleUrl: './level1.component.scss'
})
export class Level1Component {
  grids: number[][] = [
    [ GridType.Empty, GridType.Wall, GridType.Empty, GridType.Wall, GridType.Empty ],
    [ GridType.Empty, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Empty ],
    [ GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty ],
    [ GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty ],
  ]

  playerPos: Position = { x: 4, y: 3 };
  
  goalPositions: Position[] = [
    { x: 3, y: 3 }
  ];

  boxPositions: Position[] = [
    { x: 2, y: 2}
  ];
}
