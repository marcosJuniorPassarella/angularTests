import { ActionDirective } from './action.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  // TESTA SE A DIRETIVA ESTÁ EMITINDO COM PAYLOAD EVENTO
  // AO CLICAR NO ENTER DO TECLADO

  /* it(`(D) (@Output appAction) should emit event with payload when
  ENTER key is pressed `, () => {
    const divEL: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'enter' });
    divEL.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  }); */

  // TESTA SE A DIRETIVA ESTÁ EMITINDO COM PAYLOAD EVENTO
  // AO CLICAR
  it(`(D) (@Output appAction) should emit event with payload
  when clicked`, () => {
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    // DEBUG ELEMENT
    /* const divEl: HTMLElement = fixture.debugElement.query(
      By.directive(ActionDirective)
    ).nativeElement; */
    const event = new Event('click');
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandler($event)"
  ></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event = null;
  public actionHandler(event: Event): void {
    this.event = event;
  }
  public hasEvent(): boolean {
    return !!this.event;
  }
}
