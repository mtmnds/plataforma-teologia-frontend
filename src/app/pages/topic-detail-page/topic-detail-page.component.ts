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
  public selectedTopic: any = {
    content: "",
    studies: []
  };

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

  changeSelectedTopic(topic: any) {
    this.selectedTopic = topic;
  }

  formatDate(dateAsString: string) {
    if (dateAsString) {
      const dt = dateAsString.split("T")[0];
      const hr = dateAsString.split("T")[1].split(".")[0];
      const y = dt.split("-")[0];
      const m = dt.split("-")[1];
      const d = dt.split("-")[2];
      return `${d}/${m}/${y} ${hr}`;
    }
    return dateAsString;
  }

}
