import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Restaurant} from "./restaurant/restaurant.model"
import {MIT_API} from "../app.api"

import {ErrorHandler} from '../app.error-handler'


@Injectable()
export class RestaurantsService{

  constructor(private http: Http){}

  restaurants() : Observable<Restaurant[]>{
     return this.http.get(`${MIT_API}/restaurants`)
     .map(response => response.json())
     .catch(ErrorHandler.handlerError)
  }

  restaurantsById(id: string) : Observable<Restaurant[]>{
    return this.http.get(`${MIT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
 }

}
