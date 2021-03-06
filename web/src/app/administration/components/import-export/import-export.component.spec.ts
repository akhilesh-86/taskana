import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbasketService } from 'app/shared/services/workbasket/workbasket.service';
import { ClassificationDefinitionService } from 'app/administration/services/classification-definition.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { configureTests } from 'app/app.test.configuration';
import { ImportExportService } from 'app/administration/services/import-export.service';
import { WorkbasketDefinitionService } from '../../services/workbasket-definition.service';
import { ImportExportComponent } from './import-export.component';
import { NotificationService } from '../../../shared/services/notifications/notification.service';

describe('ImportExportComponent', () => {
  let component: ImportExportComponent;
  let fixture: ComponentFixture<ImportExportComponent>;
  let debugElement;

  beforeEach(done => {
    const configure = (testBed: TestBed) => {
      testBed.configureTestingModule({
        declarations: [ImportExportComponent],
        imports: [HttpClientModule, AngularSvgIconModule],
        providers: [WorkbasketService, ClassificationDefinitionService, WorkbasketDefinitionService, NotificationService,
          ImportExportService]
      });
    };
    configureTests(configure).then(testBed => {
      fixture = TestBed.createComponent(ImportExportComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement.nativeElement;
      fixture.detectChanges();
      done();
    });
  });

  afterEach(() => {
    document.body.removeChild(debugElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
