import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private _context = new BehaviorSubject<string | null >(null);

  get context() {
    return this._context.asObservable();
  }

  onAddNewItem$ = new Subject<void>();
  onSearch$ = new Subject<void>();
  onEdit$ = new Subject<void>();
  onDelete$ = new Subject<void>();

  constructor() { }

  switchContext(ctx: string) {
    this._context.next(ctx);
  }
}
