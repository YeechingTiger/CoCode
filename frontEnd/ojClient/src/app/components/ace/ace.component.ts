import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

declare var ace: any;

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent implements OnInit {
  
  editor: any;
  public languages: string[] = ['Java', 'C++', 'Python'];
  language: string = 'Java'; // Default
  sessionId: string;
  defaultContent = {
    'Java': `public class Solution {
      public static void main(String[] args) {
        // Type your code here
      }
}`,
    'C++': `#include <iostream>
using namespace std;
​
int main() {
   // Type your C++ code here
   return 0;
}`,
    'Python': `class Solution:
    def example():
        # Write your Python code here`
  }

  constructor(@Inject('collaboration') private collaboration,
                  private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.sessionId = params['id'];
        this.initAce();
      });

    
  }

  initAce() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
    
    document.getElementsByTagName('textarea')[0].focus();

    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;

    this.editor.on('change', (e) => {
      console.log('editor change:' + JSON.stringify(e));
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    });
  }

  resetEditor(): void {
    this.editor.getSession().setMode("ace/mode/" + (this.language === "C++" ? "c_cpp" :this.language.toLowerCase() ));
    this.editor.setValue(this.defaultContent[this.language]);
  }

  submit(): void {
    let user_code = this.editor.getValue();
    console.log(user_code);
  }

  changeLanguage(value: string): void {
    this.language = value;
    this.resetEditor();
  }
}
