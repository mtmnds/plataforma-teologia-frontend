import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicDetailPageService } from './topic-detail-page.service';

@Component({
  selector: 'app-topic-detail-page',
  templateUrl: './topic-detail-page.component.html',
  styleUrls: ['./topic-detail-page.component.scss']
})
export class TopicDetailPageComponent {

  public topicInfo: any = {};

  constructor(
    private route: ActivatedRoute,
    private topicDetailPageService: TopicDetailPageService
  ) {}

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('topicId');

    if (topicId) {
      this.topicDetailPageService.buscarDetalhesCapitulo(topicId).subscribe(
        (res: any) => {
          if (res) {
            this.topicInfo = {
              materialTitle: res.tituloMaterial,
              title: res.tituloCapitulo,
              materialUrl: `material/${res.materialId}`,
              desc: []
            };

            res.paragrafos.forEach((item: any) => {
              this.topicInfo.desc.push({
                content: item.conteudo.join(""),
                studies: item.estudos
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
