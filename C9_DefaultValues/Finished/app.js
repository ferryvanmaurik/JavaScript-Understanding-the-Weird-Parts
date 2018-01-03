function greet(name) {
    name = name || '<Your name here>'; // || has a lower precedence than =
    console.log('Hello ' + name);    
}

greet('Tony');
greet();