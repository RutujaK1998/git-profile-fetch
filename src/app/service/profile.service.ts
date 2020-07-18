import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

//Service for getting serach results of matched profiles
@Injectable()
export class ProfileService {
    constructor(private newHttp: HttpClient, ) {
    }
    getProfileSearchResult(searchTerm, page?): Observable<any> {
        return this.newHttp.get('https://api.github.com/search/users?q=' + searchTerm + '&page=' + page)
    }
}
