import { Component } from '@angular/core';
import { GridType } from '../../Enums';
import { Position } from '../../Types';
import { GridComponent } from "../grid/grid.component";

@Component({
  selector: 'app-level3',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './level3.component.html',
  styleUrl: './level3.component.scss'
})
export class Level3Component {
  grids: number[][] = [
    [ GridType.Empty, GridType.Empty, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty ],
    [ GridType.Wall, GridType.Empty, GridType.Empty, GridType.Wall, GridType.NULL, GridType.Empty, GridType.Empty ],
    [ GridType.NULL, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Wall, GridType.Empty, GridType.NULL ],
    [ GridType.NULL, GridType.Wall, GridType.Wall, GridType.Empty, GridType.Wall, GridType.Empty, GridType.NULL ],
    [ GridType.NULL, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty ],
    [ GridType.NULL, GridType.Wall, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty, GridType.Empty ],
    [ GridType.NULL, GridType.Wall, GridType.Wall, GridType.Wall, GridType.Wall, GridType.Empty, GridType.Empty ],
  ]

  playerPos: Position = { x: 0, y: 0 };
  
  goalPositions: Position[] = [
    { x: 3, y: 0 },
    { x: 6, y: 6 },
  ];

  boxPositions: Position[] = [
    { x: 3, y: 4},
    { x: 5, y: 5},
  ];
}
