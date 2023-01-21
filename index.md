<html>
<head>
  <title>
    Calculator
  </title>
</head>
<body>

  <form>
    <div class="calculator">
  <div class="display">0</div>
  <div class="buttons">
    <button class="clear">C</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button class="operator">/</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button class="operator">*</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button class="operator">-</button>
    <button>0</button>
    <button>.</button>
    <button class="equal">=</button>
    <button class="operator">+</button>
  </div>
</div>
  </form>
.calculator {
  width: 300px;
  height: 400px;
  background-color: #333;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.display {
  width: 100%;
  height: 80px;
  font-size: 40px;
  text-align: right;
  padding: 10px;
  background-color: #222;
  border: none;
  color: white;
}

.buttons {
  width: 100%;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
}

.buttons button {
  width: 25%;
  height: 60px;
  font-size: 20px;
  background-color: #555;
  color: white;
  border: none;
}

.operator {
  background-color: #ffa500;
}

.equal {
  background-color: #00bfff;
}

.clear {
  background-color: #dc143c;
}

</body>
</html>
