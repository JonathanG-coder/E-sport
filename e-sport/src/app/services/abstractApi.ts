import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export abstract class AbstractApi<T> {

    readonly SUFFIXE = ".json"; //suffixe permettant de faire des appels REST sans utiliser la librairie firebase
    abstract base_service: string;

    constructor(private http: HttpClient) { }

    /**
     * @returns a dynamic url
     */
    private getBase(): string {
        return environment.BASE_API + this.base_service;
    }

    /**
    * @returns an array of all the teams
    */
    getAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.getBase()}${this.SUFFIXE}`);
    }

    /**
    * @param rId : id of the team
    * @returns the wanted team
    */
    getById(rId: Number): Observable<T> {
        return this.http.get<T>(`${this.getBase()}/${rId}${this.SUFFIXE}`);
    }
}