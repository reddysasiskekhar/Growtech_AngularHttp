import { HttpHeaders, HttpInterceptorFn, HttpParams } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  // add title and role
// title is -- make sure we have to updaet header section
//role is -- make in to the param

var newheaders = new HttpHeaders({
  companytitle : "Growton"
})

var roleParams = new HttpParams().set("Role" , "Admin")
var cloneRequest = req.clone({headers : newheaders, params : roleParams })

  return next(req);
};
