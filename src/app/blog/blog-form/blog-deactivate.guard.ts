import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BlogFormComponent } from './blog-form.component'

@Injectable({
  providedIn: 'root',
})
export class BlogDeactivateGuard implements CanDeactivate<BlogFormComponent> {
  canDeactivate(component: BlogFormComponent) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}