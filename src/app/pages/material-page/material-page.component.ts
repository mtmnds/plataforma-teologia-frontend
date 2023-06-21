import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialPageService } from './material-page.service';

@Component({
  selector: 'app-material-page',
  templateUrl: './material-page.component.html',
  styleUrls: ['./material-page.component.scss']
})
export class MaterialPageComponent {

  public materialInfo: any = {};

  constructor(
    private route: ActivatedRoute,
    private materialPageService: MaterialPageService
  ) { }

  ngOnInit(): void {
    const materialId = this.route.snapshot.paramMap.get('materialId');

    if (materialId) {
      this.materialPageService.buscarDetalhesMaterial(materialId).subscribe(
        (res: any) => {
          if (res) {
            this.materialInfo = {
              title: res.titulo,
              imgUrl: res.urlImagem,
              desc: res.descricao,
              sections: []
            };

            res.capitulos.forEach((item: any) => {
              this.materialInfo.sections.push({
                title: item.titulo,
                link: `material/${materialId}/${item.id}`
              });
            });
          }
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

}
