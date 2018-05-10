import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
 public posts;
 
  constructor() {
    this.posts = this.postsData();

    
}

  ngOnInit() {
  }
  private postsData() {
    return [
	{
	"id":"1",
	"image":"http://via.placeholder.com/348x180",
	"title":"Making Angular.js realtime with Websockets by strapless strap on",
	"link":"https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10372",
	"author":"Jane Doe",
	"thumbnail":"http://via.placeholder.com/348x180",
	"description":"always a big fan of linking to bloggers that I enjoy but dont get a great deal of link enjoy from"
	},
	
	{
	"id":"2",
	"image":"http://via.placeholder.com/348x180",
	"title":"Making Angular.js realtime with Websockets by strapless strap on",
	"link":"https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10372",
	"author":"Jane Doe",
	"thumbnail":"http://via.placeholder.com/348x180",
	"description":"always a big fan of linking to bloggers that I enjoy but dont get a great deal of link enjoy from"
	},
	
	{
	"id":"3",
	"image":"http://via.placeholder.com/348x180",
	"title":"Making Angular.js realtime with Websockets by strapless strap on",
	"link":"https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10372",
	"author":"Jane Doe",
	"thumbnail":"http://via.placeholder.com/348x180",
	"description":"always a big fan of linking to bloggers that I enjoy but dont get a great deal of link enjoy from"
	},
	
	{
	"id":"4",
	"image":"http://via.placeholder.com/348x180",
	"title":"Making Angular.js realtime with Websockets by strapless strap on",
	"link":"https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10372",
	"author":"Jane Doe",
	"thumbnail":"http://via.placeholder.com/348x180",
	"description":"always a big fan of linking to bloggers that I enjoy but dont get a great deal of link enjoy from"
	},
	
	{
	"id":"5",
	"image":"http://via.placeholder.com/348x180",
	"title":"Making Angular.js realtime with Websockets by strapless strap on",
	"link":"https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10372",
	"author":"Jane Doe",
	"thumbnail":"http://via.placeholder.com/348x180",
	"description":"always a big fan of linking to bloggers that I enjoy but dont get a great deal of link enjoy from"
	}
	
	
	];
}

}
