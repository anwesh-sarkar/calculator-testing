<h2>Testing a Basic Calculator</h2>

<p>This automation framework is based on jest-puppeteer and Cucumber. I chose Jest because the framework is well documented, with a large community. Puppeteer is quite well known for JS UI testing. Jest is fast and the integration with Puppeteer is smooth. Setting up and running headless is easy.</p>
<p>Setup has also been done for API testing with Jest and Supertest. If need be, this could be explored further.</p>
<p>Most companies follow a BDD approach and, hence, I decided to use Cucumber as well. Writing out tests in Gherkin make it easy for any user to understand.</p>
<p>The framework has only been setup for basic single operations of Addition, Subtraction, Multiplication and Division. The next step would be set it up to deal with multiple arithmetic operations.</p>

<p> The application that was tested <a>http://jsbin.com/hudape/1/</a></p>

<p>To run the test, please do:
  
```
  npm test
```
  
OR

```
  yarn test
```
