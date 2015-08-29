describe("app home page", function(){
  it("should do something", function(){

    browser.get('http://localhost:8080');

    element(by.tagName("button")).click();

    var elementText = element(by.tagName("h1")).getText();

    console.log(elementText);

    expect(elementText).toEqual('Hello, World!');
  });
});