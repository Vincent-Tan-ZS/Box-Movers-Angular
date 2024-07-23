import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Level1Component } from './components/level1/level1.component';
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { CommonModule } from '@angular/common';
import { LevelManager } from './shared/LevelManager';
import { Level2Component } from "./components/level2/level2.component";
import { Level3Component } from "./components/level3/level3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Level1Component, InstructionsComponent, Level2Component, Level3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private levelManager: LevelManager) { }
  
  GetLevel(): number {
    return this.levelManager.getLevel();
  }
}
