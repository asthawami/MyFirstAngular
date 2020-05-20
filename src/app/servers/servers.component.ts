import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer= false;
  serverCreationStatus='no status';
  serverName='testserver';
  serverCreated= false;
  servers=['testserver','testserver 2'];
  constructor() {
    setTimeout(() =>
    {
        this.allowNewServer=true;
    },3000);
  }
  onCreateServer()
  {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="server was created! name is-"+ this.serverName;  }
  ngOnInit(): void {
  }

}
