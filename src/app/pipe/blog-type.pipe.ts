import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogType'
})
export class BlogTypePipe implements PipeTransform {

  transform(type: string): string {
    let tmp = '无'
    switch (type) {
      case 'note':
        tmp = '日志';
        break;
      case 'document':
        tmp = '文档';
        break;
      case 'skill':
        tmp = '技术';
        break;
      default:
        tmp = '无'
    }
    return tmp;
  }

}
