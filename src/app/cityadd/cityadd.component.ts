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
  /**
   * Форма поиска
   * @type {any}
   */
  addForm: any = null;

  constructor(private formBuilder: FormBuilder, private cityservice: CityserviceService, private geocoderdervice: GeocoderService) {
// Инициализация формы поиска
    this.addForm = this.formBuilder.group({
      cityname: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  /**
   * Поиск координат города для и передача их в Subject для немедленного получения погоды и добавления в массив
   * @private
   */
  private _Find() {
    this.geocoderdervice.Geocode(this.addForm.value.cityname).then((res: any) => {
        this.cityservice.cityadd.next({coords: res.boundedBy[0], name: res.text});
      }
    );

  }
}
