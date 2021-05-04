import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  img_section = '../../../assets/img/fondo_section.jpg';
  img_card_1 = '../../../assets/img/card-1.png';
  img_card_2 = '../../../assets/img/card-2.jpg';
  img_card_3 = '../../../assets/img/card-3.jpg';
  img_section_2 = '../../../assets/img/section-2.jpg';
  constructor() {}

  ngOnInit(): void {}
}
