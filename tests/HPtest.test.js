const { chromium } = require('playwright');

describe('Navigation Menu Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should navigate to Resources page', async () => {
    // Find the Resources link by its text
    const resourcesLink = await page.waitForSelector('a:has-text("Resources")');

    // Click the link
    await resourcesLink.click();

    // Wait for the page to load and check the URL
    await page.waitForURL('http://localhost:3000/resource');
    expect(page.url()).toContain('/resource');
  });

  it('should navigate to Success Stories page', async () => {
    // Find the Success Stories link by its text
    const successStoriesLink = await page.waitForSelector('a:has-text("Success Stories")');

    // Click the link
    await successStoriesLink.click();

    // Wait for the page to load and check the URL
    await page.waitForURL('http://localhost:3000/stories');
    expect(page.url()).toContain('/stories');
  });

  it('should navigate to Services page', async () => {
    // Find the Services link by its text
    const servicesLink = await page.waitForSelector('a:has-text("Services")');

    // Click the link
    await servicesLink.click();

    // Wait for the page to load and check the URL
    await page.waitForURL('http://localhost:3000/services');
    expect(page.url()).toContain('/services');
  });

  it('should navigate to About page', async () => {
    // Find the About link by its text
    const aboutLink = await page.waitForSelector('a:has-text("About")');

    // Click the link
    await aboutLink.click();

    // Wait for the page to load and check the URL
    await page.waitForURL('http://localhost:3000/about');
    expect(page.url()).toContain('/about');
  });

  it('should navigate to Contact page', async () => {
    // Find the Contact link by its text
    const contactLink = await page.waitForSelector('a:has-text("Contact")');

    // Click the link
    await contactLink.click();

    // Wait for the page to load and check the URL
    await page.waitForURL('http://localhost:3000/contact');
    expect(page.url()).toContain('/contact');
  });

  it('should navigate to FAQ page', async () => {
    // Find the FAQ link by its text
    const faqLink = await page.waitForSelector('a:has-text("FAQ")');

    // Click the link
    await faqLink.click();

    // Wait for the page to load and check the URL
    await page.waitForURL('http://localhost:3000/Faq');
    expect(page.url()).toContain('/Faq');
  });
});
