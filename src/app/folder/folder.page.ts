import { ComponentTestService } from './../component-test/component-test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private composerService: ComponentTestService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');


    this.composerService.printMessage();
  }

}
