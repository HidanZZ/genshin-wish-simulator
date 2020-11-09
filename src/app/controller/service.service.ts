import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Banner} from './model/banner.model';
import {Observable} from 'rxjs';
import {Weapon} from './model/weapon.model';
import {Character} from './model/character.model';
import {Request} from './model/request.model';
import {Response} from './model/response.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private HOST = 'http://localhost:5000/';
  private _banner: Banner;
  private _banners: Array<Banner>;
  private _response: Response;


  get banner(): Banner {
    return this._banner;
  }

  set banner(value: Banner) {
    this._banner = value;
  }


  get response(): Response {
    return this._response;
  }

  set response(value: Response) {
    this._response = value;
  }

  get banners(): Array<Banner> {
    if (this._banners == null) {
      this._banners = new Array<Banner>();
    }
    return this._banners;
  }

  set banners(value: Array<Banner>) {
    this._banners = value;
  }

  constructor(private httpClient: HttpClient) {
  }

  public single(request: Request): Observable<Response> {
    return this.httpClient.post<Response>('https://genshin-impact-wish-simulator.herokuapp.com//single', request);
  }

  public multi(request: Request): Observable<Response> {
    return this.httpClient.post<Response>('https://genshin-impact-wish-simulator.herokuapp.com/multi', request);
  }

  public findAllBanners(): Observable<Array<Banner>> {
    return this.httpClient.get<Array<Banner>>('https://genshin-impact-wish-simulator.herokuapp.com/banner/all');
  }

  public test() {
    const req = new Request();
    req.banner_id = 1;
    req.g4 = 1;
    req.g5 = 1;
    req.ru4e = true;
    req.ru4w = false;
    req.ru5e = false;
    req.ru5w = true;
    return this.httpClient.post('http://localhost:5000/single', req);
  }
}
