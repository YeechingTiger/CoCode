import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
const DEFAULT_PROBLEM = Object.freeze({
  id: 0,
  name: "",
  desc: "",
  diff: "Easy"
});
@Component({
  selector: 'app-problem-add-form',
  templateUrl: './problem-add-form.component.html',
  styleUrls: ['./problem-add-form.component.css']
})
export class ProblemAddFormComponent implements OnInit {
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  public difficulties: string[] = ["Easy","Medium", "Hard", "Super"];
  constructor(@Inject("data") private data) { }

  ngOnInit() {
  }

  addProblem(): void {
    this.data.addProblem(this.newProblem)
          .catch(error => console.log(error._body));
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }
}
