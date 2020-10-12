import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Http , Response} from '@angular/http';
//import { ENGINE_METHOD_DIGESTS } from 'constants';
import 'rxjs/add/operator/map'
import {Album} from './album'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {


  private _albumUrl = '../assets/album.json'
  constructor(private _http:Http) { }
  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map((response) =>
   <Album>response.json());
    
  }

}
