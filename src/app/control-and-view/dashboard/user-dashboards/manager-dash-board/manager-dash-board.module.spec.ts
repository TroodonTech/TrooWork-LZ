import { ManagerDashBoardModule } from './manager-dash-board.module';

describe('ManagerDashBoardModule', () => {
  let managerDashBoardModule: ManagerDashBoardModule;

  beforeEach(() => {
    managerDashBoardModule = new ManagerDashBoardModule();
  });

  it('should create an instance', () => {
    expect(managerDashBoardModule).toBeTruthy();
  });
});
