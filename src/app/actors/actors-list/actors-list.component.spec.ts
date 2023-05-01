import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { ActorService } from '../actor.service';

import { ActorsListComponent } from './actors-list.component';
import { ActorDetail } from '../actorDetail';

describe('ActorsListComponent', () => {
  let component: ActorsListComponent;
  let fixture: ComponentFixture<ActorsListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ActorsListComponent],
      providers: [ActorService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 12; i++) {
      const actor = new ActorDetail(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.image.imageUrl(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.sentence(),
        []
      );

      component.actors.push(actor);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update component actors property', () => {
    // Create a mock list of actors
    const mockActors: ActorDetail[] = [];

    for (let i = 0; i < 2; i++) {
      const actor = new ActorDetail(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.image.imageUrl(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.sentence(),
        []
      );

      mockActors.push(actor);
    }

    // Spy on the ActorService's `getActors` method and return the mock list of actors
    const actorService = TestBed.inject(ActorService);
    spyOn(actorService, 'getActors').and.returnValue(of(mockActors));

    // Call the component's `ngOnInit` method to simulate initialization
    component.ngOnInit();

    // Check if the component's `actors` property is updated with the mock list of actors
    expect(component.actors).toEqual(mockActors);
  });
});
