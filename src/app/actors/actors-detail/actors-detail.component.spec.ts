import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { ActorsDetailComponent } from './actors-detail.component';
import { ActorDetail } from '../actorDetail';

describe('ActorsDetailComponent', () => {
  let component: ActorsDetailComponent;
  let fixture: ComponentFixture<ActorsDetailComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsDetailComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should display actor details when an actor is selected', () => {
    const name = faker.lorem.word();
    const actorDetail = new ActorDetail(
      faker.datatype.number(),
      name,
      faker.image.imageUrl(),
      faker.lorem.word(),
      faker.date.recent().toISOString(),
      faker.lorem.word(),
      []
    );

    component.actorsDetail = actorDetail;
    fixture.detectChanges();
    const h3 = debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toBe(name);
  });
});
