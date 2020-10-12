import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Http , Response} from '@angular/http';
//import { ENGINE_METHOD_DIGESTS } from 'constants';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {


  private _albumUrl = '../assets/album.JSON'
  constructor(private _http:Http) { }
  getAlbum(id: number){
    return this._http.get(this._albumUrl).map((response) =>
    response.json());
    
  }

}
