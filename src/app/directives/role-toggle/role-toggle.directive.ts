import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appRoleToggle]'
})
export class RoleToggleDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appRoleToggle(role: string) {
    const _userRole = JSON.parse(sessionStorage.getItem('axis-token'))['role'];
    if (role === _userRole && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (role !== _userRole && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
