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

  /*public materialInfo: any = {
    title: "Gênesis",
    imgUrl: "assets/images/posts/genesis.jpg",
    desc: [
      "Esse é o livro das origens, pois conta a origem do mundo, da humanidade e do povo hebreu. Os primeiros capítulos contam a origem da humanidade, desde os dias da criação até o dilúvio. A partir do capítulo 12, é contada a história dos três patriarcas dos hebreus: Abraão, Isaque e Jacó. A história termina com os filhos de Jacó no Egito, preparando a narrativa do livro de Êxodo.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisl erat, auctor sit amet augue vitae, rhoncus laoreet augue. Integer vitae sodales ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam erat erat, pellentesque sed risus id, imperdiet viverra diam. Phasellus vestibulum maximus venenatis.",
      "Morbi a arcu faucibus, luctus dolor quis, consectetur ex. Praesent sit amet justo vitae nunc dictum vehicula. Donec a urna varius, dapibus sapien sed, tristique risus. Vivamus interdum urna molestie mi tristique sagittis. Morbi tristique volutpat tellus faucibus porta. Pellentesque cursus lorem id auctor aliquam."
    ],
    sections: [
      { title: "Gênesis 1", link: "/material/genesis/topico1" },
      { title: "Gênesis 2", link: "/material/genesis/topico1" },
      { title: "Gênesis 3", link: "/material/genesis/topico1" },
      { title: "Gênesis 4", link: "/material/genesis/topico1" },
      { title: "Gênesis 5", link: "/material/genesis/topico1" },
      { title: "Gênesis 6", link: "/material/genesis/topico1" },
      { title: "Gênesis 7", link: "/material/genesis/topico1" },
      { title: "Gênesis 8", link: "/material/genesis/topico1" },
      { title: "Gênesis 9", link: "/material/genesis/topico1" },
      { title: "Gênesis 10", link: "/material/genesis/topico1" },
      { title: "Gênesis 11", link: "/material/genesis/topico1" },
      { title: "Gênesis 12", link: "/material/genesis/topico1" },
      { title: "Gênesis 13", link: "/material/genesis/topico1" },
      { title: "Gênesis 14", link: "/material/genesis/topico1" },
      { title: "Gênesis 15", link: "/material/genesis/topico1" },
      { title: "Gênesis 16", link: "/material/genesis/topico1" },
      { title: "Gênesis 17", link: "/material/genesis/topico1" },
      { title: "Gênesis 18", link: "/material/genesis/topico1" },
      { title: "Gênesis 19", link: "/material/genesis/topico1" },
      { title: "Gênesis 20", link: "/material/genesis/topico1" },
      { title: "Gênesis 21", link: "/material/genesis/topico1" },
      { title: "Gênesis 22", link: "/material/genesis/topico1" },
      { title: "Gênesis 23", link: "/material/genesis/topico1" },
      { title: "Gênesis 24", link: "/material/genesis/topico1" },
      { title: "Gênesis 25", link: "/material/genesis/topico1" },
      { title: "Gênesis 26", link: "/material/genesis/topico1" },
      { title: "Gênesis 27", link: "/material/genesis/topico1" },
      { title: "Gênesis 28", link: "/material/genesis/topico1" },
      { title: "Gênesis 29", link: "/material/genesis/topico1" },
      { title: "Gênesis 30", link: "/material/genesis/topico1" },
      { title: "Gênesis 31", link: "/material/genesis/topico1" },
      { title: "Gênesis 32", link: "/material/genesis/topico1" },
      { title: "Gênesis 33", link: "/material/genesis/topico1" },
      { title: "Gênesis 34", link: "/material/genesis/topico1" },
      { title: "Gênesis 35", link: "/material/genesis/topico1" },
      { title: "Gênesis 36", link: "/material/genesis/topico1" },
      { title: "Gênesis 37", link: "/material/genesis/topico1" },
      { title: "Gênesis 38", link: "/material/genesis/topico1" },
      { title: "Gênesis 39", link: "/material/genesis/topico1" },
      { title: "Gênesis 40", link: "/material/genesis/topico1" },
      { title: "Gênesis 41", link: "/material/genesis/topico1" },
      { title: "Gênesis 42", link: "/material/genesis/topico1" },
      { title: "Gênesis 43", link: "/material/genesis/topico1" },
      { title: "Gênesis 44", link: "/material/genesis/topico1" },
      { title: "Gênesis 45", link: "/material/genesis/topico1" },
      { title: "Gênesis 46", link: "/material/genesis/topico1" },
      { title: "Gênesis 47", link: "/material/genesis/topico1" },
      { title: "Gênesis 48", link: "/material/genesis/topico1" },
      { title: "Gênesis 49", link: "/material/genesis/topico1" },
      { title: "Gênesis 50", link: "/material/genesis/topico1" }
    ]
  };*/

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
