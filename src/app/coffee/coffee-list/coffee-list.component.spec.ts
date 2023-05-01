import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
import { Observable, of } from 'rxjs';
import { CoffeeListComponent } from './coffee-list.component';

describe('CoffeeTableComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffeeService: CoffeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      imports: [HttpClientTestingModule],
      providers: [CoffeeService],
    }).compileComponents();

    coffeeService = TestBed.inject(CoffeeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    // Creamos una lista de 3 cafés para la prueba
    const coffees: Coffee[] = [
      {
        id: 1,
        nombre: 'Café Especial 1',
        tipo: 'Blend',
        region: 'Antioquia',
        sabor: 'Panela, Durazno, Caramelo',
        altura: 1920,
        imagen: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        nombre: 'Café Especial 2',
        tipo: 'Single origin',
        region: 'Huila',
        sabor: 'Chocolate, Vainilla, Canela',
        altura: 1800,
        imagen: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        nombre: 'Café Especial 3',
        tipo: 'Decaf',
        region: 'Nariño',
        sabor: 'Nuez, Cacao, Cítricos',
        altura: 2100,
        imagen: 'https://via.placeholder.com/150',
      },
    ];

    // Hacemos que el servicio retorne la lista de cafés para la prueba
    spyOn(coffeeService, 'getCoffees').and.returnValue(of(coffees));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three rows', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    // Esperamos encontrar 4 filas (encabezado + 3 cafés)
    expect(tableRows.length).toBe(4);
  });
});
