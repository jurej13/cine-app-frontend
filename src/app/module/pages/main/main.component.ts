import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesResponse } from 'src/app/interface/movies.interface';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movies !: Observable<MoviesResponse[]>
  constructor(private dataManager : DataManagerService) { }
  
  ngOnInit(): void {
    this.movies = this.dataManager.getMoviesLimit()
  }
  

}
