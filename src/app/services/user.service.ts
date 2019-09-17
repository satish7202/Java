import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  teamMemberId;
  imageUrl;
  getTeamMemberId()
  {
    return this.teamMemberId=2929;
  }
  getImageUrl()
  {
    return this.imageUrl="https://res.cloudinary.com/futurewise/image/upload/v1566029063/icons_fakfxf.png";;
  }
  
  
}
