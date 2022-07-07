import {GenericUpdateFormGroup} from "../../../../../_generic/form-group/GenericUpdateFormGroup";
import {RequiredLanguages} from "../../../../../domain/RequiredLanguages";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MarkdownData} from "../../../../../domain/Markdown/MarkdownData";
import { MarkdownDataControls } from "../../common/MarkdownDataControls";
import {MarkdownUpdateDto} from "../../../../../domain/Markdown/dto/MarkdownUpdateDto";

export class MarkdownUpdateFormGroup
  extends GenericUpdateFormGroup<MarkdownData, MarkdownDataControls, MarkdownUpdateDto>
{

  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  //changes on lang changed
  name : FormControl = new FormControl("", Validators.required)
  source : FormControl = new FormControl("", Validators.required)

  updateDto!:MarkdownUpdateDto

  constructor() {
    super();
  }

  valid(): boolean {
    return this.isDataControlsListValid()
  }

  setDto(updateDto:MarkdownUpdateDto){
    this.updateDto = updateDto
    //for each data in updateDto create its own controls
    this.updateDto.dataList.forEach((modelData)=>{
      let markdownDataControls = new MarkdownDataControls(modelData.lang, modelData.id)

      markdownDataControls.source.setValue(modelData.source)
      this.dataControlsList.push(markdownDataControls)

      if(modelData.lang == this.requiredLangs[0]){
        this.source =  markdownDataControls.source
      }
    })

  }

  getDto():MarkdownUpdateDto{
    let markdownUpdateDto:MarkdownUpdateDto = {
      id: this.updateDto.id,
      name: this.updateDto.name,
      dataList: new Array<MarkdownData>()
    }
    this.dataControlsList.forEach((data)=>{
      markdownUpdateDto.dataList.push(data.getData())
    })
    return markdownUpdateDto
  }

  onLangChange(lang:string){

    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(data!=undefined){
      this.source = data.source
    }
  }

}
