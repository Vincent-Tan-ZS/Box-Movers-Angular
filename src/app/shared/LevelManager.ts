import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LevelManager {
    private levelSrc = new BehaviorSubject<number>(1);
    curLevel = this.levelSrc.asObservable();

    nextLevel() {
        this.levelSrc.next(this.levelSrc.value + 1);
    }

    getLevel(): number {
        return this.levelSrc.value;
    }
}