function compile() {
  const input = document.getElementById("input");
  const transpiled = document.getElementById("transpiled");
  const output = document.getElementById("output");

  transpiled.value = Opal.compile(input.value);
  output.value = eval(transpiled.value);
}

document.onload = function() { compile(); }
