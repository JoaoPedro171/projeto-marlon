import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { MudaCorDirective } from './diretivas/muda-cor.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { MudaAutorPipe } from './pipes/muda-autor.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastrarComponent,
    HomeComponent,
    ListarComponent,
    MudaCorDirective,
    MudaAutorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
