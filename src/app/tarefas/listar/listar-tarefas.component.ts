import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';

import { TarefaService, Tarefa } from "../shared";

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[]

  constructor(private TarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.TarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefa ${tarefa.nome} ?`)) {
      this.TarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm(`Deseja alterar o status da terefa ${tarefa.nome} ?`)){
      this.TarefaService.atualizarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
