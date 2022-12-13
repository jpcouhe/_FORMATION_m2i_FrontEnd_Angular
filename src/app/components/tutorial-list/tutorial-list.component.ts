import { Component, OnInit } from '@angular/core';
import {TutorialService} from "../../services/tutorial.service";
import {Tutorial} from "../../models/tutorial";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  tutorials!: Tutorial[];
  currentTutorial!: Tutorial
  currentIndex = -1;
  /*tutorial$ = this.tutorialService.getAll();*/

  constructor(private tutorialService: TutorialService, private router : Router) {
  }

  ngOnInit(): void {
    this.fetchTutorial();
  }

  private fetchTutorial() {
    this.tutorialService.getAll().subscribe({
      next: (data:Tutorial[]) => {
          this.tutorials = data;
      }, error: (error) => {
        console.log(error)
      }
    })
  }

  /*removeAllTutorials() {
      this.tutorialService.removeAll().pipe(
        tap(()=>{
          this.router.navigate(['/tutorials'])
        })
      )
        .subscribe()
  }*/

  removeAllTutorials() {
    this.tutorialService.removeAll().subscribe(()=>{
      this.tutorials = [];
    })
  }


  setActiveTutorial(tutorial:Tutorial, index:number):void{
    this.currentTutorial = tutorial
    this.currentIndex = index
  }
}
