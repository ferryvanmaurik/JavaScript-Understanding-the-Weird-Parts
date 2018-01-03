console.log(3 < 2 < 1);
//What you thing this will be?
// Check the Operator-Precedence-In-Javascript.pdf
// left-to-right so it makes this first
console.log(false < 1);
// Javascript converts false to 0
// so it will be
console.log(0 < 1);

// Test how javascript converts a type
Number('3')
Number(false)
Number(true)

String(1)


== 3
true
3 == '3'
true
3 === '3' // === does not convert the type

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness


