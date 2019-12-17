import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({
  name: "htmlFormat"
})
export class HtmlFormatPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(style, type: string) {
    if (type == 'nohtml') {
      return style.replace(/<[^>]+>/g, "")
    } else {
      return this.sanitizer.bypassSecurityTrustHtml(style);
    }
  }
}