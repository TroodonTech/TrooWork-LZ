import { WelcomepageModule } from './welcomepage.module';

describe('WelcomepageModule', () => {
  let welcomepageModule: WelcomepageModule;

  beforeEach(() => {
    welcomepageModule = new WelcomepageModule();
  });

  it('should create an instance', () => {
    expect(welcomepageModule).toBeTruthy();
  });
});
