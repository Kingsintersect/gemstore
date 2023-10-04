import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {

  @Input() FilterData: any;
  @Input() radioType: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}
  
  handleMultipleSeletedFilter(value:string, sectionId: string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};

    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];

      const valueIndex = filterValues.indexOf(value);

      if(valueIndex != -1){
        filterValues.splice(valueIndex, 1);
      }else{
        filterValues.push(value);
      }

      if(filterValues.length > 0){
        queryParams[sectionId] = filterValues.join(",");
      }else{
        delete queryParams[sectionId];
      }

      this.router.navigate([], {queryParams});
  }

  handleSingleSelectFilter(value:string, sectionId: string){
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], {queryParams});
  }



  // material module
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
