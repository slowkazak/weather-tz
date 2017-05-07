import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {GeocoderService} from "../service/geocoder.service";
import {CityserviceService} from "../service/cityservice.service";

@Component({
  selector: 'app-cityadd',
  templateUrl: './cityadd.component.html',
  styleUrls: ['./cityadd.component.css']
})
export class CityaddComponent implements OnInit {
  addForm: any = null;
  searchresult:any = {};

  constructor(private formBuilder: FormBuilder, private cityservice: CityserviceService, private geocoderdervice: GeocoderService) {
    this.addForm = this.formBuilder.group({
      cityname: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  private _Find() {
    this.geocoderdervice.Geocode(this.addForm.value.cityname).then(res => {
      console.log(res)
       this.searchresult = res;
      }
    )
    ;

  }
  private _AddCity(){
    this.cityservice.cityadd.next(this.searchresult.boundedBy[0]);

  }

}
