import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public recentPubs: any[] = [
    {
      title: "Gênesis",
      desc: "Esse é o livro das origens, pois conta a origem do mundo, da humanidade e do povo hebreu. Os prim...",
      link: "material/genesis",
      imgUrl: "assets/images/posts/genesis.jpg"
    },
    {
      title: "Êxodo",
      desc: "Êxodo inicia-se com a história do nascimento de Moisés, passa pela sua fuga do Egito e formação d...",
      link: "material/exodo",
      imgUrl: "assets/images/posts/exodo.jpg"
    },
    {
      title: "Levítico",
      desc: "Levítico é o livro da pureza, pois ressalta a santidade e pureza que o povo de Deus deveria ter, ...",
      link: "material/levitico",
      imgUrl: "assets/images/posts/levitico.png"
    },
    {
      title: "Números",
      desc: "Números continua a jornada dos hebreus rumo a terra prometida. O livro recebe esse nome por começ...",
      link: "material/numeros",
      imgUrl: "assets/images/posts/numeros.png"
    },
    {
      title: "Deuteronômio",
      desc: "Esse é o livro da repetição da Lei, pois muito tempo se passou desde que Deus deu a Lei em Êxodo....",
      link: "material/deuteronomio",
      imgUrl: "assets/images/posts/deuteronomio.png"
    },
    {
      title: "Josué",
      desc: "Josué é um livro de conteúdo militar, pois narra a conquista da terra prometida, Canaã, em todo o...",
      link: "material/josue",
      imgUrl: "assets/images/posts/josue.jpg"
    },
  ];

}
