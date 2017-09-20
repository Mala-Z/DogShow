/**
 * Created by St_Muerte on 9/20/17.
 */
import {Class, Component} from "@angular/core";
@Component({
  selector: "carousel",
  template: `
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  <!-- Wrapper for the slides -->
  <div class="carousel-inner"  style="height: 300px">
    <div class="item active" align="center">
     <img src="http://www.carmichaels.nl/img/news/2008/17.jpg">
      <!--<img src="http://i.dailymail.co.uk/i/pix/2014/02/12/article-urn:publicid:ap.org:f97e73584b484ba49aa580548985e8c6-6NKDTBLtT-HSK1-61_634x469.jpg" >      -->
    </div>

    <div class="item" align="center">
      <img src="http://www.domidar.cz/obr/2016/image9.jpg" alt="staffy">
    </div>

    <div class="item" align="center">
      <img src="http://dogs.bsl-sbt.com/imagefiles/dogsimages/staffordshirebullterrier_1937show.jpg" alt="staffy" >
    </div>
    
    <div class="item" align="center">
      <img src="http://www.fiapbt.net/origins_archivos/image051.jpg" alt="staffy">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`,
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{

}
