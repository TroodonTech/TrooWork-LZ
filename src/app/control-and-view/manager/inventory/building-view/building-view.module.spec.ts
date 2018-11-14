import { BuildingViewModule } from './building-view.module';

describe('BuildingViewModule', () => {
  let buildingViewModule: BuildingViewModule;

  beforeEach(() => {
    buildingViewModule = new BuildingViewModule();
  });

  it('should create an instance', () => {
    expect(buildingViewModule).toBeTruthy();
  });
});
