const { Builder} = require('@tpio/javascript-opensdk');
const {By} = require('selenium-webdriver');

(async () => {
  const driver = await new Builder().forBrowser('chrome').withToken('EfUCtCDNcaXrUdVXoRZ9ZlBA16QB7Af0TRWWAutIY8k1').build()
  await driver.get("http://eaapp.somee.com/")
  
  await driver.findElement(By.linkText("Login")).click()
  // 3 | type | id=UserName | admin
  await driver.findElement(By.id("UserName")).sendKeys("admin")
  // 4 | type | id=Password | password
  await driver.findElement(By.id("Password")).sendKeys("password")
  // 5 | click | css=.btn | 
  await driver.findElement(By.css(".btn")).click()
  // 6 | click | linkText=Employee List | 
  await driver.findElement(By.linkText("Employee List")).click()
  // 7 | click | linkText=Create New | 
  await driver.findElement(By.linkText("Create New")).click()
  // 8 | type | id=Name | FirstTestUser
  await driver.findElement(By.id("Name")).sendKeys("FirstTestUser")
  // 9 | type | id=Salary | 1000
  await driver.findElement(By.id("Salary")).sendKeys("1000")
  // 10 | type | id=DurationWorked | 12321
  await driver.findElement(By.id("DurationWorked")).sendKeys("12321")
  // 11 | type | id=Grade | 12
  await driver.findElement(By.id("Grade")).sendKeys("12")
  // 12 | type | id=Email | firsttestuser@ea.com
  await driver.findElement(By.id("Email")).sendKeys("firsttestuser@ea.com")
  // 13 | click | css=.btn | 
  await driver.findElement(By.css(".btn")).click()
  // 14 | click | linkText=Log off | 
  await driver.findElement(By.linkText("Log off")).click()



  await driver.quit();

})();

