import { Component } from '@angular/core';
import { GridType } from '../../Enums';
import { Position } from '../../Types';
import { GridComponent } from "../grid/grid.component";

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './level2.component.html',
  styleUrl: './level2.component.scss'
})
export class Level2Component {
  grids: number[][] = [
    [ GridType.NULL, GridType.NULL, GridType.Wall, GridType.Wall, GridType.Wall, GridType.NULL, GridType.NULL ],
    [ GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Wall, GridType.Empty, GridType.Empty ],
    [ GridType.Wall, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty ],
    [ GridType.NULL, GridType.NULL, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Wall ],
    [ GridType.NULL, GridType.Wall, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Wall ],
    [ GridType.NULL, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty ],
  ]

  playerPos: Position = { x: 6, y: 2 };
  
  goalPositions: Position[] = [
    { x: 0, y: 1 },
    { x: 6, y: 5 }
  ];

  boxPositions: Position[] = [
    { x: 5, y: 2},
    { x: 3, y: 4}
  ];
}
