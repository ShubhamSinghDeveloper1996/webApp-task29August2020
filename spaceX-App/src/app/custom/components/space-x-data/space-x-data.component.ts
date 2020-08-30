import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';
import { SpaceXData } from '../../models/space-x-data.model';

@Component({
  selector: 'app-space-x-data',
  templateUrl: './space-x-data.component.html',
  styleUrls: ['./space-x-data.component.css']
})
export class SpaceXDataComponent implements OnInit {

  constructor(public spaceX: SpaceXService) { }
  ngOnInit() {

    //Fetch Space X Data from the Api on Application loads -- Code Start
    this.spaceX.getSpaceX_CompleteData().subscribe((response: SpaceXData[]) => {

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
    //Fetch Space X Data from the Api on Application loads -- Code End
  };

}
