const qs = require("../src/qs");

test("Expect to find param and value on query string and ", () => {
  const search = "?x=5&y=45&foo=bar";
  const x = qs.getParam("foo", search);
  console.log(x);
  const y = qs.getParam("y", search);
  console.log(y);
  expect(y).toBe("45");
});

test("Expect no param on query string", () => {
  const search = "?x=5&y=45&foo=bar";
  const x = qs.getParam("fff", search);
  console.log(x);
  expect(x).not.toBe("45");
});
