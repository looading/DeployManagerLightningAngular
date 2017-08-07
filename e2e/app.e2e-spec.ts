import { DeployManagerLightningAngularPage } from './app.po';

describe('deploy-manager-lightning-angular App', () => {
  let page: DeployManagerLightningAngularPage;

  beforeEach(() => {
    page = new DeployManagerLightningAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
