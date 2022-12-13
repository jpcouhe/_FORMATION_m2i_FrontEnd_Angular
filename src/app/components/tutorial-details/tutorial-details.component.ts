import {Component, Input, OnInit} from '@angular/core';
import {TutorialService} from "../../services/tutorial.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tutorial} from "../../models/tutorial";

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  constructor(private tutorialService: TutorialService, private route: ActivatedRoute, private router:Router) { }
  @Input() viewMode = false;
  @Input() currentTutorial: Tutorial = {
    title:'',
    description:'',
    published:false
  }
 /*   currentTutorial!:Tutorial
*/

  ngOnInit(): void {
    if(!this.viewMode){
      this.getTutorial(this.route.snapshot.params['id'])
    }
  }


  private getTutorial(id: string) {
      this.tutorialService.get(id).subscribe((data)=>{
          this.currentTutorial = data
      })
  }

  removeTutorial() {
      this.tutorialService.deleteTutorial(this.currentTutorial.id!).subscribe(()=>{
        this.router.navigate(['/tutorials'])
      })
  }
}
