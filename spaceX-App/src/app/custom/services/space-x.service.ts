import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SpaceXData } from '../models/space-x-data.model';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private baseUrl: string = "https://api.spacexdata.com/v3/launches";
  private dataLimit: number = 100;
  
  spaceXCompleteData: SpaceXData[];
  dataFound :boolean;
  errorFound: boolean;
  errorMessage: string;
  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse){
    let errorMessage;
    if (error.error instanceof HttpErrorResponse) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else if(error.error !instanceof HttpErrorResponse) {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }else{
      errorMessage = 'Sorry, something went wrong.';
    }
    return throwError(errorMessage);
  }

  getSpaceX_CompleteData(): Observable<SpaceXData[]> {
    return this.http.get<SpaceXData[]>(`${this.baseUrl}?limit=${this.dataLimit}`)
    .pipe(catchError(this.errorHandler));
  };

  getSpaceXData_BasedOnLaunch(isLaunchSuccess: boolean): Observable<SpaceXData[]> {
    return this.http.get<SpaceXData[]>(`${this.baseUrl}?limit=${this.dataLimit}&launch_success=${isLaunchSuccess}`)
    .pipe(catchError(this.errorHandler));
  }

  getSpaceXData_BasedOnLanding(isLaunchSuccess: boolean, isLandSuccess: boolean): Observable<SpaceXData[]> {
    return this.http.get<SpaceXData[]>(`${this.baseUrl}?limit=${this.dataLimit}&launch_success=${isLaunchSuccess}&land_success=${isLandSuccess}`)
    .pipe(catchError(this.errorHandler));
  }

  getSpaceXData_BasedOnYear(isLaunchSuccess: boolean, isLandSuccess: boolean, launchYear: number): Observable<SpaceXData[]> {
    return this.http.get<SpaceXData[]>(`${this.baseUrl}?limit=${this.dataLimit}&launch_success=${isLaunchSuccess}&land_success=${isLandSuccess}&launch_year=${launchYear}`)
    .pipe(catchError(this.errorHandler));
  }
}
