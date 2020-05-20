import {Component} from '@angular/core';
@Component({
  selector:'app-assign',
  templateUrl: './assignment.component.html',
  styles: ['.whiten{color: white;}']
})
export class Assignment
{
  log =[];
  showSecret=false;
onToggle()
{
  this.showSecret=!this.showSecret;
 // this.log.push(this.log.length +1);
 this.log.push(new Date());
}

}
