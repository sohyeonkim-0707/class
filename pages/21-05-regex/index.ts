// regular express 정규식
// /apple/.test("apple")
// true

// /apple/.test("applq")
// false

// /^\w+@\w+.\w+$/.test("asdfasd@a;com")
// true
// /^\w+@\w+\.\w+$/.test("asdfasd@a.com")
// true

// /010-1234-5678/.test("010-1234-5678")
// true
// /^\d{3}-\d{3,4}-\d{4}$/.test("123-1234-5678")
// true

// [a-zA-Z]
// \s
