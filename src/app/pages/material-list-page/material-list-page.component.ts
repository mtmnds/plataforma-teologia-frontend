import { Component } from '@angular/core';
import { MaterialListPageService } from './material-list-page.service';

@Component({
  selector: 'app-material-list-page',
  templateUrl: './material-list-page.component.html',
  styleUrls: ['./material-list-page.component.scss']
})
export class MaterialListPageComponent {

  public recentPubs: any[] = [];

  constructor(
    private materialListPageService: MaterialListPageService
  ) { }

  ngOnInit(): void {
    this.materialListPageService.buscarMateriaisPagina(1, 10).subscribe(
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
