import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'jose';
  public nameUpper: string = 'JOSE';
  public fullName: string = 'jOSe MaNUEl';

  public customDate: Date = new Date();

}
