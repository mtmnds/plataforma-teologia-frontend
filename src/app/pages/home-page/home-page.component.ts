import { Component } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public recentPubs: any[] = [];

  constructor(
    private homePageService: HomePageService
  ) { }

  ngOnInit(): void {
    this.homePageService.buscarMateriaisHome().subscribe(
      (res: any) => {
        if (res) {
          this.recentPubs = res.map((item: any) => {
            return {
              title: item.titulo,
              desc: item.descricao,
              link: `material/${item.id}`,
              imgUrl: item.urlImagem
            }
          });
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
