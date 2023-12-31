import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/services/authGuard.service';
import { BoardComponent } from './components/board/board.component';
import { BoardService } from './services/board.service';
import { ColumnsService } from '../shared/services/columns.service';
import { TopbarModule } from '../shared/modules/topbar/topbar.module';
import { InlineFormModule } from '../shared/modules/inlineForm/inlineForm.module';

const routes: Routes = [
  {
    path: 'boards/:boardId',
    component: BoardComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TopbarModule, InlineFormModule],
  declarations: [BoardComponent],
  providers: [BoardService, ColumnsService]
})
export class BoardModule {}
