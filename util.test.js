const { expect } = require("@jest/globals");
// const puppeteer = require("puppeteer");
// const { generateText, checkAndGenerate } = require("./util");

// test("output title and price", () => {
//   const text = generateText("Book", 29);
//   expect(text).toBe("Book 29");
// });

// test("check and generate input", () => {
//   const text = checkAndGenerate("Book", 79);
//   expect(text).toBe("Book 79");
// });

// test("clicked", async () => {
//   const list = [
//     { title: "Book1", price: "23" },
//     { title: "Book2", price: "33" },
//     { title: "Book3", price: "43" },
//     { title: "Book4", price: "53" },
//     { title: "Book5", price: "63" },
//     { title: "Book6", price: "73" },
//     { title: "Book7", price: "83" },
//     { title: "Book8", price: "93" },
//     { title: "Book9", price: "212" },
//     { title: "Book10", price: "210" },
//     { title: "Book11", price: "219" },
//     { title: "Book12", price: "217" },
//   ];
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//   });
//   const page = await browser.newPage();
//   await page.goto("http://127.0.0.1:8080");

//   for (const input of list) {
//     await page.click("#title");
//     for (let i = 0; i < 7; i++) {
//       await page.keyboard.press("Backspace");
//     }
//     await page.type("#title", input.title);
//     await page.click("#price");
//     for (let j = 0; j < 3; j++) {
//       await page.keyboard.press("Backspace");
//     }
//     await page.type("#price", input.price);
//     await page.click("#add-product");
//     await page.type("#title", "");
//     await page.type("#price", "");
//   }
// });

const { loadData } = require("./util");

test("load data", () => {
  loadData().then((title) => {
    expect(title).toBe(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });
});
