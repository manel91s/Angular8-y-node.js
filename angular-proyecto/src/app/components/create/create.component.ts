import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService,UploadService]
})
export class CreateComponent implements OnInit {
    public title: String;
    public project: Project;
    public status: string;
    public filesToUpload: Array<File>;
  constructor(
    //objeto que contiene la peticion de guardar el formulario
    private _projectService: ProjectService,
    //objeto que contiene la peticion de subir archivos
    private _uploadService : UploadService
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2020,'','');
    
   }

  ngOnInit() {
  }

  onSubmit(form) {
    if(this.project.name == "" || this.project.description == "" || this.project.langs=="") {
      alert("Todos los campos son obligatorios");
      
      return;
    }else{
      
      //Guardar los datos 
      this._projectService.saveProject(this.project).subscribe(

        response => {
          if(response.project) {
            console.log(response.project);
            

            //Subir la imagen
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
            .then((result:any) => {
              console.log(result.project)
              this.status = 'success';
              form.reset();
            });
            
            
          }else {
            this.status = 'failed';
          }
        },
        error => {
          console.log(<any>error);
        }
      )
    }
  }

  fileChangeEvent(fileInput:any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
    
  }

}
