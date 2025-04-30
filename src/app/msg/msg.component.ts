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
  public ports=[3000];
  public nb=0;
  public msgs=new Array<string>();
  public   L=[212630330631,212627168197,212605343464,212641130235,212724321194,212694612891,212705203145,212657247056,212711591310,212770392179,212770392179,212629110628,212628186506,212775641214,212676652492,212645584164,212622657025,212695256546,212694109746,212697717254,212695930225,212655938824,212666744789];

  public msg=["salam ana ","c'est "]
  public m=""
  public portnum=0
  constructor(private http:HttpClient)  {
  }
  send(){
    console.log("nb >> "+this.L.length)
      for (let i = 0; i < this.L.length; i++) {
        let timeSend=Math.floor(Math.random() * (this.time1 - this.time2 + 1)) + this.time1;
        setTimeout(() => {
          if (this.portnum >= this.ports.length) {
            this.portnum = 0;
          }
          this.m = this.mixt();
          this.http.post("http://localhost:3000/api/sendText", {
            "chatId": this.L[i]+"@c.us",
            "text": this.m,
            "session": "default"
          }).subscribe()
          this.portnum += 1;
        }, timeSend);


      }
    // console.log(Math.floor((Math.random()) * (this.time1 - this.time2 + 1)) + this.time2);
    // console.log(Math.random())
  }
  mixt(){
    var res
    if(this.nb<this.msg.length) {
      res = this.msg[this.nb] + " abdou";
      this.msgs.push(this.msg[this.nb])
      this.nb+=1
      // console.log(this.nb);


    }else {
      this.nb=0
      res = this.msg[this.nb] + " abdou";
      this.msgs.push(this.msg[this.nb])
      this.nb+=1
      // console.log(this.nb);


    }
    console.log(this.msgs)
    return res;


  }
}
