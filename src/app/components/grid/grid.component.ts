import { CommonModule } from '@angular/common';
import { Component, inject, Input, TemplateRef } from '@angular/core';
import { GridType } from '../../Enums';
import { Position } from '../../Types';
import { cloneDeep } from "lodash";
import { LevelManager } from '../../shared/LevelManager';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  @Input() grids!: number[][];
  @Input() playerPos!: Position;
  @Input() boxes!: Position[];
  @Input() goals!: Position[];

  private modalService = inject(NgbModal);

  _gridWidth = 1;
  _gridHeight = 1;

  _stepCount = 0;

  _gridContainer = "auto";

  _isGameOver = false;

  _playerPos: Position = { x: 0, y: 0};
  _goalPositions: Position[] = [];
  _boxPositions: Position[] = [];

  constructor(private levelManager: LevelManager) { }

  ngOnInit(): void {
    this._gridWidth = this.grids[0].length;
    this._gridHeight = this.grids.length;
    this._gridContainer = Array.from(Array(this._gridWidth).fill("max-content")).join(' ');

    this._goalPositions = cloneDeep(this.goals);
    this.Reset();

    document.getElementById("grid-container")?.focus();
  }

  OpenModal(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}

  NextLevel(): void {
    this.levelManager.nextLevel();
    this.modalService.dismissAll();
  }

  Reset() {
    this._playerPos = cloneDeep(this.playerPos);
    this._boxPositions = cloneDeep(this.boxes);
    this._stepCount = 0;
    this._isGameOver = false;

    this.modalService.dismissAll();
  }

  IsEntityMovable (xPos: number, yPos: number): boolean {
    // Check if game is over
    if (this._isGameOver === true) return false;

    // Check if outside of grid
    if (xPos >= this._gridWidth) return false;
    if (xPos < 0) return false;
    if (yPos >= this._gridHeight) return false;
    if (yPos < 0) return false;

    // Check if hit wall
    const newPosGrid = this.grids[yPos][xPos];
    if (newPosGrid == GridType.Wall) return false;

    // Check if hit null
    if (newPosGrid == GridType.NULL) return false;

    return true;
  }

  MovePlayer(x: number, y: number): void {
    const newPos = { x: this._playerPos.x + x, y: this._playerPos.y + y };

    if (this.IsEntityMovable(newPos.x, newPos.y) !== true) return; 

    // Check if push box
    const boxIndex = this._boxPositions.findIndex(box => box.x == newPos.x && box.y == newPos.y);
    if (boxIndex >= 0)
    {
      const newBoxPos = { x: this._boxPositions[boxIndex].x + x, y: this._boxPositions[boxIndex].y + y };
      if (this.IsEntityMovable(newBoxPos.x, newBoxPos.y) !== true) return; 

      this._boxPositions[boxIndex] = newBoxPos;
    }

    this._playerPos = newPos;
    this._stepCount++;

    const goalsLeft = this._boxPositions.filter(box => this._goalPositions.findIndex(goal => goal.x === box.x && goal.y === box.y) < 0).length;
    if (goalsLeft === 0) this._isGameOver = true;

    if (this._isGameOver === true) {
      document.getElementById("gameovermodal")?.click();
    }
  }

  IsBox(i: number, j: number): boolean {
    return this._boxPositions.findIndex(pos => pos.x === j && pos.y === i) >= 0;
  }

  IsGoal(i: number, j: number): boolean {
    if (this.IsBox(i, j) === true) return false;
    if (this._playerPos.x === j && this._playerPos.y === i) return false;
    
    return this._goalPositions.findIndex(pos => pos.x === j && pos.y === i) >= 0;
  }

  IsGridEmpty(cell: GridType): boolean {
    return cell == GridType.Empty;
  }

  IsGridWall(cell: GridType): boolean {
    return cell == GridType.Wall;
  }

  IsGridNull(cell: GridType): boolean {
    return cell == GridType.NULL;
  }
}
