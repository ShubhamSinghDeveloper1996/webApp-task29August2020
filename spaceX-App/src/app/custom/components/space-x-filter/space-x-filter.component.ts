import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { SpaceXData } from '../../models/space-x-data.model';

@Component({
  selector: 'app-space-x-filter',
  templateUrl: './space-x-filter.component.html',
  styleUrls: ['./space-x-filter.component.css']
})
export class SpaceXFilterComponent implements OnInit {

  constructor(public spaceX: SpaceXService) { }

  launchYear: number = null;
  successLaunchValue: boolean = false;
  successLandingValue: boolean = false;

  ngOnInit() {
  }

  launchYears: number[] = [2006, 2007, 2008, 2009, 2010,2011, 2012, 2013, 2014, 2015,2016, 2017, 2018, 2019, 2020];

  filter_SuccessfulLaunchData(launchValue: boolean) {
    this.successLaunchValue = launchValue;

    //Fetch Space X Data from the Api on the basis of Successful Launch Value -- Code Start
    this.spaceX.getSpaceXData_BasedOnLaunch(this.successLaunchValue).subscribe((response: SpaceXData[]) => {
      if (response) {
        this.spaceX.spaceXCompleteData = response;
        if (this.spaceX.spaceXCompleteData.length > 0) {
          this.spaceX.dataFound = true;
        } else {
          this.spaceX.dataFound = false;
        }
      }
    }, (error) => {
      this.spaceX.errorFound = true;
      this.spaceX.errorMessage = error;
    });
    //Fetch Space X Data from the Api on the basis of Successful Launch Value -- Code End
  }

  filter_SuccessfulLandingData(landingValue: boolean) {
    this.successLandingValue = landingValue;

    //Fetch Space X Data from the Api on the basis of Successful Landing Value -- Code Start
    this.spaceX.getSpaceXData_BasedOnLanding(this.successLaunchValue, this.successLandingValue).subscribe((response: SpaceXData[]) => {
      if (response) {
        this.spaceX.spaceXCompleteData = response;
        if (this.spaceX.spaceXCompleteData.length > 0) {
          this.spaceX.dataFound = true;
        } else {
          this.spaceX.dataFound = false;
        }
      }
    }, (error) => {
      this.spaceX.errorFound = true;
      this.spaceX.errorMessage = error;
    });
    //Fetch Space X Data from the Api on the basis of Successful Landing Value -- Code End
  }

  filter_launchYearData(year: number) {
    this.launchYear = year;
    
    //Fetch Space X Data from the Api on the basis of launch Year, Launch Success and Landing Sucess  -- Code Start
    this.spaceX.getSpaceXData_BasedOnYear(this.successLaunchValue, this.successLandingValue, this.launchYear).subscribe((response: SpaceXData[]) => {
      if (response) {
        this.spaceX.spaceXCompleteData = response;
        if (this.spaceX.spaceXCompleteData.length > 0) {
          this.spaceX.dataFound = true;
        } else {
          this.spaceX.dataFound = false;
        }
      }
    }, (error) => {
      this.spaceX.errorFound = true;
      this.spaceX.errorMessage = error;
    });
    //Fetch Space X Data from the Api on the basis of launch Year, Launch Success and Landing Sucess  -- Code end
  }

}
