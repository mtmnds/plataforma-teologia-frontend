import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-detail-page',
  templateUrl: './topic-detail-page.component.html',
  styleUrls: ['./topic-detail-page.component.scss']
})
export class TopicDetailPageComponent {

  public topicInfo: any = {
    materialTitle: "Gênesis",
    title: "Gênesis 1",
    materialUrl: "/material/genesis",
    desc: [
      "1: No princípio, Deus criou os céus e a terra.",
      "2: A terra estava informe e vazia; as trevas cobriam o abismo e o Espírito de Deus pairava sobre as águas.",
      "3: Deus disse: 'Faça-se a luz!' E a luz foi feita.",
      "4: Deus viu que a luz era boa, e separou a luz das trevas.",
      "5: Deus chamou à luz DIA, e às trevas NOITE. Sobreveio a tarde e depois a manhã: foi o primeiro dia.",
      "6: Deus disse: 'Faça-se um firmamento entre as águas, e separe ele umas das outras'.",
      "7: Deus fez o firmamento e separou as águas que estavam debaixo do firmamento daquelas que estavam por cima.",
      "8: E assim se fez. Deus chamou ao firmamento CÉUS. Sobreveio a tarde e depois a manhã: foi o segundo dia.",
      "9: Deus disse: 'Que as águas que estão debaixo dos céus se ajuntem num mesmo lugar, e apareça o elemento árido.' E assim se fez.",
      "10: Deus chamou ao elemento árido TERRA, e ao ajuntamento das águas MAR. E Deus viu que isso era bom.",
      "11: Deus disse: 'Produza a terra plantas, ervas que contenham semente e árvores frutíferas que dêem fruto segundo a sua espécie e o fruto contenha a sua semente.' E assim foi feito.",
      "12: A terra produziu plantas, ervas que contêm semente segundo a sua espécie, e árvores que produzem fruto segundo a sua espécie, contendo o fruto a sua semente. E Deus viu que isso era bom.",
      "13: Sobreveio a tarde e depois a manhã: foi o terceiro dia.",
      "14: Deus disse: 'Façam-se luzeiros no firmamento dos céus para separar o dia da noite; sirvam eles de sinais e marquem o tempo, os dias e os anos,",
      "15: e resplandeçam no firmamento dos céus para iluminar a terra'. E assim se fez.",
      "16: Deus fez os dois grandes luzeiros: o maior para presidir ao dia, e o menor para presidir à noite; e fez também as estrelas.",
      "17: Deus colocou-os no firmamento dos céus para que iluminassem a terra,",
      "18: presidissem ao dia e à noite, e separassem a luz das trevas. E Deus viu que isso era bom.",
      "19: Sobreveio a tarde e depois a manhã: foi o quarto dia.",
      "20: Deus disse: 'Pululem as águas de uma multidão de seres vivos, e voem aves sobre a terra, debaixo do firmamento dos céus.'",
      "21: Deus criou os monstros marinhos e toda a multidão de seres vivos que enchem as águas, segundo a sua espécie, e todas as aves segundo a sua espécie. E Deus viu que isso era bom.",
      "22: E Deus os abençoou: 'Frutificai, disse ele, e multiplicai-vos, e enchei as águas do mar, e que as aves se multipliquem sobre a terra.'",
      "23: Sobreveio a tarde e depois a manhã: foi o quinto dia.",
      "24: Deus disse: 'Produza a terra seres vivos segundo a sua espécie: animais domésticos, répteis e animais selvagens, segundo a sua espécie.' E assim se fez.",
      "25: Deus fez os animais selvagens segundo a sua espécie, os animais domésticos igualmente, e da mesma forma todos os animais, que se arrastam sobre a terra. E Deus viu que isso era bom.",
      "26: Então Deus disse: 'Façamos o homem à nossa imagem e semelhança. Que ele reine sobre os peixes do mar, sobre as aves dos céus, sobre os animais domésticos e sobre toda a terra, e sobre todos os répteis que se arrastem sobre a terra.'",
      "27: Deus criou o homem à sua imagem; criou-o à imagem de Deus, criou o homem e a mulher.",
      "28: Deus os abençoou: 'Frutificai, disse ele, e multiplicai-vos, enchei a terra e submetei-a. Dominai sobre os peixes do mar, sobre as aves dos céus e sobre todos os animais que se arrastam sobre a terra.'",
      "29: Deus disse: 'Eis que eu vos dou toda a erva que dá semente sobre a terra, e todas as árvores frutíferas que contêm em si mesmas a sua semente, para que vos sirvam de alimento.",
      "30: E a todos os animais da terra, a todas as aves dos céus, a tudo o que se arrasta sobre a terra, e em que haja sopro de vida, eu dou toda erva verde por alimento.' E assim se fez.",
      "31: Deus contemplou toda a sua obra, e viu que tudo era muito bom. Sobreveio a tarde e depois a manhã: foi o sexto dia.",
    ]
  };

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('topicId');
  }

}
