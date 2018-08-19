import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  onSendCorrect() {
    // Request to get the photo with the '2' ID
    this.http.get('https://jsonplaceholder.typicode.com/photos/2').subscribe(
      response => {
        if (response) {
          this.toastr.success('😃', 'Request Correct');
        }
      }
    );
  }

  onSend404() {
    // Request to get the photo with unknow photo ID
    this.http.get('https://jsonplaceholder.typicode.com/photos/dd').subscribe();
  }

  onSend500() {
    // Request to put not allowed data to the photo with '1' ID
    this.http.put('https://jsonplaceholder.typicode.com/photos/1', 2).subscribe();
  }

}
