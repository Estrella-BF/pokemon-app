import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  userQuestionUpdate = new Subject<string>();
  constructor() { }

  ngOnInit(): void {

    // Debounce search.
    this.userQuestionUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        console.log('valueee', value);
        
      });
  }

  searchField(text: any) {
    const value = text.target.value;
    this.userQuestionUpdate.next(value)
  }
}
