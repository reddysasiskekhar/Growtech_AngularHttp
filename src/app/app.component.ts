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

  output:any[] = [];
  ngOnInit(): void {
    this.httpClient.get(this.jsonplaceholderURL).subscribe((data: any) => {
      console.log("sasi",data);
      this.output = data;// this is arry of obect
    });

    this.httpClient.get(this.bookmyShowUrl).subscribe((data: any) => {
      console.log("sekhar-BookMyshow",data);
      // this.output = data;// this is arry of obect
    });
  }
}
