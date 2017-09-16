import { Component, OnInit, Inject } from '@angular/core';

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

  constructor(@Inject('collaboration') private collaboration) {

  }

  ngOnInit() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
    this.collaboration.init();
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
