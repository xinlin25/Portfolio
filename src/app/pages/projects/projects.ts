import { Component, inject } from '@angular/core';
import { Project } from '../../services/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  standalone: true
})
export class Projects {

  private projectService = inject(Project);

  projects: any[] = [];

  ngOnInit() {
      this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
