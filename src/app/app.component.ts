import { HttpClient } from '@angular/common/http';
import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'Growtech_AngularHttp';

  constructor(public httpClient: HttpClient) {

  }

  bookmyShowUrl ="https://in.bookmyShow.com/api/explore/v1/discover/regions"
  jsonplaceholderURL = "https://jsonplaceholder.typicode.com/posts";

  postsURL = "http://localhost:3000/posts";

  output:any[] = [];

  database:any[] = []
  ngOnInit(): void {
    //fetch related 
    // this.httpClient.get(this.jsonplaceholderURL).subscribe((data: any) => {
    //   console.log("sasi",data);
    //   this.output = data;// this is arry of obect
    // });

    // this.httpClient.get(this.bookmyShowUrl).subscribe((data: any) => {
    //   console.log("sekhar-BookMyshow",data);
    //   // this.output = data;// this is arry of obect
    // });
    
    //<!-- this is my owen data --> 

   // fetch relaed
    this.httpClient.get(this.postsURL,{
      // headers : {
      //   'UserName1' : "sasi",
      //   'UserNmae2' : "sekhar",
      //   'Authorization' : "ahjdhjdhjhduhahjsskjhdjkhjkshjhsjkhjf"
      // },
      // params : {
      //   'UserName1ROLEID' : 'Admin',
      //   'UserName2ROLEID' : 'Sales'
      // }

    }).subscribe((data: any) => {
      console.log("posts data....",data);
      this.database = data;
      // this.output = data;// this is arry of obect
      
    });
  

  }

// post related
  btnCreate(){
    this.httpClient.post(this.postsURL, { "title":"baseball Relaed News","views":30  }).subscribe((data: any) => {
      console.log("posts data....",data);
      this.database = data;
      // this.output = data;// this is arry of obect
      
    });


  }
UpdateURL="http://localhost:3000/posts/1"
//updae related (we have to use put method)
  btnUpdate(){
    this.httpClient.put(this.UpdateURL, { "title":"Educational Relaed News","views":30  }).subscribe((data: any) => {
      console.log("posts data....",data);//while we have use this updatemehod mus and shouls we have to update "put" method
      this.database = data;
      // this.output = data;// this is arry of obect
      
    });


  }

// patch related work

  btnPatch(){
    this.httpClient.patch(this.UpdateURL, { "title":"Political related News","views":30  }).subscribe((data: any) => {
      console.log("posts data....",data);//while we have use this updatemehod mus and shouls we have to update "put" method
      this.database = data;
      // this.output = data;// this is arry of obect
      
    });
  }

  // here we have to take one text box what we needs to delete the id u can give that id in end point of url/id
DeleteURL="http://localhost:3000/posts/d6d4"
  // delete related 
  btnDelete(){
    this.httpClient.delete(this.DeleteURL).subscribe((data: any) => {
      console.log("posts data....",data);//while we have use this updatemehod mus and shouls we have to update "put" method
      this.database = data;
      // this.output = data;// this is arry of obect
      
    });
  }
}

// https verbs is get , put ,patch, delete, post this are main verbs 



