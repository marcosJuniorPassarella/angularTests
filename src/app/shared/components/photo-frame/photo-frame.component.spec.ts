import { PhotoFrameComponent } from './photo-frame.component';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  // TESTA SE O COMPONENTE FOI CRIADO
  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  // TESTA SE O MÉTODO LIKE DEVE DISPARAR A OUTPUT LIKED UMA ÚNICA VEZ
  // QUANDO CHAMADOS MÚLTIPLAS VEZES DENTRO DO TEMPO DE DEBOUNCE
  it(`#${PhotoFrameComponent.prototype.like.name}
  should trigger (@Output liked) once when called multiple times within
  debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));

  // like incremente duas vezes se tiver dentro do tempo do debounce
  it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) two times when called outside debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);
    expect(times).toBe(2);
  }));

  // TESTA SE ESTÁ SENDO EXIBIDO O NÚMERO DE LIKES COMPUTADOS AO CLICAR NO LIKE
  it(`Should display number of likes when (@Input likes) is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    // ACESSANDO NOSSO ELEMENTO DO DOM QUE DIZ A QUANTIDADE DE LIKES
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1');
  });

  // TESTA SE AO INCREMENTAR NOSSO NÚMERO DE LIKES O ARIA-LABEL EXIBE CORRRETAMENTE
  // O NÚMERO DE LIKES
  it(`(D) Should update aria-label when (@Input likes) is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  // TESTA SE AO NÃO CLICAR NO BOTÃO DE LIKE O CONTEÚDO DO ARIA-LABEL É O QUE
  // ESPERAMOS QUE SEJA
  it(`(D) Should have aria-label with 0 (@Input likes) value`, () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  // TESTA SE O NOSSO COMPONENTE ESTÁ RECEBENDO O SRC E A DESCCRIPTION
  // QUANDO ESSES VALORES ESTIVEREM ASSOCIADOS AS PROPRIEDADES SRC E DESCRIPTION
  // ELE DEVERÁ EXIBIR A IMAGEM E O ALT DEVE SER A NOSSA PROPRIEDADE DESCRIPTION
  it(`(D) Should display image width src and description when bount to
  properties`, () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg';
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });
});
