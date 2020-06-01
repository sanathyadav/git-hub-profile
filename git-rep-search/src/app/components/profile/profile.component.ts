import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;
 

  constructor(private ProfileServices:ProfileService ) { 
  }
  ngOnInit() {
    this.ProfileServices.updateProfile(this.username);
    this.ProfileServices.getCollectData().subscribe((profile)=>{
      console.log(profile);
      this.profile=profile;
      this.username="sanathyadav";
  })
}

  findProfile(){
    this.ProfileServices.updateProfile(this.username);
    this.ProfileServices.getCollectRepos().subscribe((repos)=>{
        console.log(repos);
        this.repos=repos;
      });
    }

    followers(){

      window.location.href='https://github.com/'+this.username+'?tab=followers';
    }
    following(){

      window.location.href='https://github.com/'+this.username+'?tab=following';
    }
    gits(){
      window.location.href='https://github.com/'+this.username+'?tab=gists';
    }
    repository(){
      window.location.href='https://github.com/'+this.username+'?tab=repos';
    }
   
  }
  

    
  

  


