import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditComponent } from './product-edit.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have label defined', () => {
    let labelName = fixture.debugElement.query(By.css("label[for=Name]"));
    expect(labelName).toBeDefined();
  });

  it('should have label with "Price"', () => {
    const labelName = de.query(By.css('.myLabel')).nativeElement;
    expect(labelName.textContent).toContain("Price");
  });


});
