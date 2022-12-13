import { Component, OnInit } from '@angular/core';
import {TutorialService} from "../../services/tutorial.service";
import {Tutorial} from "../../models/tutorial";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  submitted: boolean = false
  tutorial:Tutorial = {
    title:'',
    description:'',
    published:false
  }
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial() {

      this.tutorialService.create(this.tutorial).subscribe((tutorial)=>{
        console.log(tutorial)
        this.submitted = true
      })
  }
}
