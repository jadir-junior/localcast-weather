import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { SideNavComponent } from './side-nav.component'

describe('SideNavComponent', () => {
  let component: SideNavComponent
  let fixture: ComponentFixture<SideNavComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SideNavComponent],
        imports: [NoopAnimationsModule, MaterialModule],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should compile', () => {
    expect(component).toBeTruthy()
  })
})
