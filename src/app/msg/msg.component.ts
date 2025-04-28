import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-msg',
  standalone: false,
  templateUrl: './msg.component.html',
  styleUrl: './msg.component.css'
})
export class MsgComponent {
  public time1=0;
  public time2=0;
  public ports=[3000,3001,3002];
  public nb=0;
  public msgs=new Array<string>();
  public   L=[212630330631,212630330631];
  public msg=["hi","hello","hi"]
  public m=""
  public portnum=0
  constructor(private http:HttpClient)  {
  }
  send(){
      for (let i = 0; i < 5; i++) {
        let timeSend=Math.floor(Math.random() * (this.time1 - this.time2 + 1)) + this.time1;
        setTimeout(() => {
          if (this.portnum >= this.ports.length) {
            this.portnum = 0;
          }
          this.m = this.mixt();
          this.http.post("http://localhost:" + this.ports[this.portnum % (this.ports.length)] + "/api/sendText", {
            "chatId": "212630330631@c.us",
            "text": this.m,
            "session": "default"
          }).subscribe()
          this.portnum += 1;
        }, timeSend);


      }
  }
  mixt(){
    var res
    if(this.nb<this.msg.length) {
      res = this.msg[this.nb] + " this test";
      this.msgs.push(this.msg[this.nb])
      this.nb+=1
      console.log(this.nb);


    }else {
      this.nb=0
      res = this.msg[this.nb] + " this test";
      this.msgs.push(this.msg[this.nb])
      this.nb+=1
      console.log(this.nb);

    }
    console.log(this.msgs)
    return res;


  }
}
