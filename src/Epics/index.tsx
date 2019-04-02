import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import {
    FETCH_LIST,
    fetchListFailure,
    fetchListSuccess
} from "../Actions";
interface Data {
    results?: [],
}

const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/';

export const ListEpic= (action$:any)=> (
     action$
        .ofType(FETCH_LIST)
        .switchMap(() => {
            return ajax
                .getJSON(url)
                .map((data:Data) => data.results)
                .map((List:any) => List.map((Arr:any) => ({
                    id: Arr.id||'',
                    title: Arr.title,
                    url:Arr.img_url
                })))
                .map(List => List.filter((Arr:any) => !!Arr.url))
        })
        .map((List:any) => fetchListSuccess(List))
        .catch((error:any) => Observable.of(fetchListFailure(error.message)))
);

export const rootEpic = combineEpics(ListEpic);
