import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError, map} from "rxjs";
import {Injectable} from "@angular/core";
import {NbGlobalPhysicalPosition, NbToastrService} from "@nebular/theme";
import {environment} from "../../../environments/environment";


export class SingleResponse {
    public status: number | undefined;
    public IsSuccess: boolean | undefined;
    public details: string | undefined;
}

export class Responses {
    public errors: SingleResponse[] = [];
    public success: SingleResponse[] = [];
}

@Injectable({
    providedIn: 'root',
})
export class BaseAPIService {

    public positions = NbGlobalPhysicalPosition;

    constructor(public http: HttpClient,
                private toastrService: NbToastrService) {
    }

    public actionGet<T>(url: string, options: object = {}): Observable<any> {
        return this.http.get(environment.api_url + url, options)
            .pipe(
                map((response: any) => response.data),
            );
    }

    public actionPost<T>(url: string, body: object): Observable<any> {
        return this.http.post(environment.api_url + url, body)
            .pipe(
                map((response: any) => response.data),
            );
    }

    public actionPut(url: string, body: object): Observable<any> {
        return this.http.put(environment.api_url + url, body)
            .pipe(
                map((response: any) => {
                    this.toastrService.show("Cập Nhật Dữ Liệu Thành Công!",'Thành công', {
                        position: this.positions.TOP_LEFT,
                        status: 'success'
                    });
                    return response.data
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status != 200) {
                        this.toastrService.show( error.error.message,'error', {
                            position: this.positions.TOP_LEFT,
                            status: 'danger'
                        });
                        return  ""
                    } else {
                        // return error
                        return throwError(error);
                    }
                })
            );
    }

    public actionDelete<T>(url: string, options: object = {}): Observable<T> {
        return this.http.delete(environment.api_url + url, options)
            .pipe(
                map((response: any) => response.data),
            );
    }


    public uploadFile<T>(url: string, file: File): Observable<T> {
        const formData: FormData = new FormData();
        formData.append('image', file);
        return this.http.post(environment.api_url + url, formData)
            .pipe(
                map((response: any) => response.data),
            );
    }

    public handleError() {

    }
}