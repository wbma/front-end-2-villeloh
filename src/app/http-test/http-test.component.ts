import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  localData: string;
  remoteData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.loadLocalJson();
    this.loadRemoteJson();

  }

  loadLocalJson() {

    this.http.get('/assets/tsconfig.app.json')
    .subscribe((res: Response) => this.localData = JSON.stringify(res));
  }

  loadRemoteJson() {

    console.log('loading remote json');

    interface FileObject {
      file_id: Number;
      user_id: Number;
      filename: string;
      filesize: string;
      title: string;
      description: string;
      media_type: string;
      mime_type: string;
      time_added: string;
    }

    this.http.get('http://media.mw.metropolia.fi/wbma/media')
    .subscribe((res: Response) => { this.remoteData = res; console.log('res: ' + res[0]['file_id']); });
  }

}
