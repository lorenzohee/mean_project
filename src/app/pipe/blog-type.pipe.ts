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
      case 'recommand':
        tmp = '推荐';
        break;
      case 'innovationMethod':
        tmp = '创新方法论';
        break;
      case 'innovationTech':
        tmp = '创新技术';
        break;
      case 'innovationThing':
        tmp = '创新好物';
        break;
      case 'innovation':
        tmp = '创新';
        break;
      case 'translation':
        tmp = '翻译';
        break;
      default:
        tmp = '创新资讯'
    }
    return tmp;
  }

}
