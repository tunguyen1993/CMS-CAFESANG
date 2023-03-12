import {Component, Input, OnInit} from '@angular/core';
import {PageService} from "../../page.service";

@Component({
  selector: 'page-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() fake: boolean = false
  @Input() page_data: any | null;
  data: any = [];
  models: any = [];
  listSelected: Array<number> = []
  constructor(private readonly service: PageService) { }

  ngOnInit(): void {
    if (this.page_data){
      if (this.page_data.FrontEndType === "POST" && this.page_data.max_fields === 0){
        this.page_data.max_fields = 1000
      }
      this.getPost()
    }
  }

  getPost (){
    this.service.getPostType(this.page_data.type, this.page_data.category_id ?? undefined, this.fake).subscribe(res => {
      if (this.page_data.category_id){
        res.map((category: { post: any; }) => {
          this.data.push(category.post)
        })
      }else{
        this.data = res;
      }
      this.page_data.data.map((data: any) => {
        this.models.push({
          order:0,
          page_id:data.page_id,
          page_type_id:data.page_type_id,
          post_id:data.post_id
        })
        this.listSelected.push(data.post_id);
      });
      if (this.page_data.data.length === 0 && this.page_data.FrontEndType !== 'GAME' && this.page_data.type !=='CATEGORY' && this.page_data.category_id !== 6){
        this.addNewPost()
      }
    })
  }

  addNewPost() {
    this.models.push({
      order:0,
      page_id:this.page_data.page_id,
      page_type_id: this.page_data.id,
      post_id: null
    });
  }

  changePost () {
    setTimeout(() => {
      const data: Array<{
        order: number,
        post_id: number,
        page_type_id:number,
        page_id:number
      }> = []
      this.models.map((item: {
        order: number,
        post_id: number,
        page_type_id:number,
        page_id:number
      }) => {
        if (item.post_id){
          data.push(item)
        }
      })
      this.service.addPageItem({
        data,
        page_id:this.page_data.page_id,
        page_type_id: this.page_data.id,
      }, this.fake).subscribe(res => {
        this.listSelected = []
        res.map((item: any) => {
          this.listSelected.push(item.post_id)
        })
      })
    }, 10)
  }

  disableSelect (value: number) {
    return this.listSelected.includes(value)
  }
}
