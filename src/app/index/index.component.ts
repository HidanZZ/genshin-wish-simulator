import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../controller/service.service';
import {Banner} from '../controller/model/banner.model';
import {Weapon} from '../controller/model/weapon.model';
import {Character} from '../controller/model/character.model';
import {Request} from '../controller/model/request.model';
import {SessionStorageService} from '../controller/session-storage.service';
import {Response} from '../controller/model/response.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public index: number;
  private request: Request = new Request();
  displayModal: boolean;
  result: Weapon | Character;
  results: Array<Weapon | Character>;

  constructor(private service: ServiceService,
              private sessionStorage: SessionStorageService) {

  }

  get banner(): Banner {
    return this.service.banner;
  }

  get banners(): Array<Banner> {
    return this.service.banners;
  }

  get response(): Response {
    return this.service.response;
  }

  ngOnInit(): void {
    this.index = 0;
    this.service.findAllBanners().toPromise().then(
      value => {
        if (value != null) {
          this.service.banners = value;
          this.service.banner = value[this.index];
          this.request.banner_id = this.banner.id;
          this.request.g5 = 0;
          this.request.g4 = 0;
          this.request.ru5w = false;
          this.request.ru5e = false;
          this.request.ru4w = false;
          this.request.ru4e = false;
          this.sessionStorage.saveData(this.request);

        }
      }
    );
  }

  // change() {
  //   this.index += 1;
  //   if (this.index >= this.service.banners.length) {
  //     this.index = 0;
  //   }
  //   this.service.banner = this.service.banners[this.index];
  //
  //
  // }
  //


  multi() {
    this.service.multi(this.sessionStorage.getData()).toPromise().then(
      value => {
        if (value != null) {
          this.service.response = value;
          this.sessionStorage.saveData(value.userData);
          this.displayModal = true;
        }


      }
    );


  }

  randomArray(n): Array<any> {
    return Array(n).fill(0);
  }

  single() {
    this.service.single(this.sessionStorage.getData()).toPromise().then(
      value => {
        if (value != null) {
          this.service.response = value;
          this.sessionStorage.saveData(value.userData);
          this.displayModal = true;
        }


      }
    );
  }


  test($event: any) {
    this.service.banner = this.banners[$event.page];
    const r = this.sessionStorage.getData();
    r.banner_id = this.banner.id;
    this.sessionStorage.saveData(r);
    console.log(this.sessionStorage.getData());
  }
}
