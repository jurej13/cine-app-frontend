import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesResponse } from 'src/app/interface/movies.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie !: MoviesResponse
  constructor() { }

  ngOnInit(): void {
  }

}
