import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as _ from 'lodash';

import { BoardComponent } from './board.component';

fdescribe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должен быть метод, который возвращает массив координт пустых ячеек', () => {
    let result = component.CheckFreeCells([
      [3, 2],
      [2, 0],
    ]);
    expect(result).toEqual([
      [1, 1],

    ]);
  });
  it('должен быть метод помещающий в свободную ячейку число', () => {
    let result = component.GenerateNumber([
      [2, 0],
      [3, 0],
    ]);
    let expectedBoards = [
      [
        [2, 4],
        [3, 0],
      ],
      [
        [2, 0],
        [3, 2]
      ],
      [
        [2, 0],
        [3, 4]
      ],
      [
        [2, 2],
        [3, 0]
      ]
    ];
    expect(expectedBoards.some((p) => {
      return _.isEqual(p, result);
    })).toEqual(true);

  });
});
