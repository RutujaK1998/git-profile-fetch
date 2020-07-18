import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProfileService} from '../../service/profile.service'
import { HttpClient } from '@angular/common/http';
import { MatPaginator, transformMenu } from '@angular/material';
import { distinctUntilChanged, debounceTime, tap } from "rxjs/operators";

@Component({
  selector: 'app-process-profile',
  templateUrl: './process-profile.component.html',
  styleUrls: ['./process-profile.component.css']
})
export class ProcessProfileComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  repos: Object;
  @ViewChild('searchInput') searchInput: ElementRef;
  gitUsers = [];
  searchCtrl: FormControl;
  totalValue = 0;
  page = 1;
  _pageIndex = 1;
  sortByList = 
  [{ value: 'login', viewValue: 'Name (Ascending)' },
  { value: '-login', viewValue: 'Name (Descending)' },
  { value: 'score', viewValue: 'Rank (Ascending)' },
  { value: '-score', viewValue: 'Rank (Descending)' }];
  sortBy: FormControl ;
  sortElementBy: Array<any>
  constructor(
    private newHttp: HttpClient,
    public profileService: ProfileService
  ) {
    this.searchCtrl = new FormControl();
    this.sortBy == new FormControl();
  }
  SortBy(formValues) {
    this.sortElementBy = [];
    formValues.value ? this.sortElementBy = formValues.value : null;
    
  }
  nextPage(paginator) {
    this.profileService.getProfileSearchResult(this.searchCtrl.value, this.paginator._pageIndex + 1).subscribe(res => {
      this.gitUsers = res.items;
      this.gitUsers.forEach(a => a.mode = 'C');
    })
    console.log(paginator);
  }
  viewDetails(item) {
    if (item.mode == 'C') {
      item.mode = 'D'
      this.repos = [];
      this.newHttp.get('https://api.github.com/users/' + item.login + '/repos').subscribe(res => {
        this.repos = res;
      })
    } else {
      item.mode = 'C'
    }
  }
  ngOnInit(){
    this.searchCtrl.valueChanges
    .pipe(
      distinctUntilChanged(),
      debounceTime(1000)
    )
    .subscribe(res => {
      this.gitUsers = [];
      this.profileService.getProfileSearchResult(res, this.page)
        .subscribe(a => {
          this.gitUsers = a.items;
          this.totalValue = a.total_count;
          this.gitUsers.forEach(a => a.mode = 'C');
        })
    });
  }
  
}
