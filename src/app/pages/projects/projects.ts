import { Component, inject } from '@angular/core';
import { Project } from '../../services/project';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [AsyncPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  standalone: true
})
export class Projects {

  private projectService = inject(Project);

  projects$!: Observable<any[]>;

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }
}