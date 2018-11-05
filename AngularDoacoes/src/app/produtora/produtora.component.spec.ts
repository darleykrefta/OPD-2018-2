import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoraComponent } from './produtora.component';

describe('ProdutoraComponent', () => {
  let component: ProdutoraComponent;
  let fixture: ComponentFixture<ProdutoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
