import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
  heroes = ['Rajakumar', 'Amitab', 'Rajanikanth', 'Chiranjivi'];

  data=[new hero(123,"Shailaja"),
        new hero(234,"Jayashree")
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
