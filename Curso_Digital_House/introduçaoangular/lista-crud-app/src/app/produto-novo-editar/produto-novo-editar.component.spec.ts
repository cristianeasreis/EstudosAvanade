import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoNovoEditarComponent } from './produto-novo-editar.component';

describe('ProdutoNovoEditarComponent', () => {
  let component: ProdutoNovoEditarComponent;
  let fixture: ComponentFixture<ProdutoNovoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoNovoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoNovoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
