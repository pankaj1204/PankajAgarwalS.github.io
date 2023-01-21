<html>
<head>
  <title>
    Calculator
  </title>
</head>
<style>

.inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.operand {
    width: 45%;
    height: 25px;
    font-size: 20px;
    margin-right: 5%;
    padding: 5px;
    text-align: right;
}

select {
    width: 20%;
    height: 30px;
    font-size: 20px;
    padding: 5px;
}

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
  </style>
<body>

  <form>
    <div class="calculator">
  <div class="display">0</div>
  <div class="inputs">
    <input type="text" id="operand1" class="operand" placeholder="Enter a number">
    <input type="text" id="operand2" class="operand" placeholder="Enter a number">
    <select id="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
  </div>
  <div class="buttons">
    <button class="clear" onclick="clearInput()">C</button>
    <button onclick="addNumber('7')">7</button>
    <button onclick="addNumber('8')">8</button>
    <button onclick="addNumber('9')">9</button>
    <button class="operator" onclick="addOperator('/')">/</button>
    <button onclick="addNumber('4')">4</button>
    <button onclick="addNumber('5')">5</button>
    <button onclick="addNumber('6')">6</button>
    <button class="operator" onclick="addOperator('*')">*</button>
    <button onclick="addNumber('1')">1</button>
    <button onclick="addNumber('2')">2</button>
    <button onclick="addNumber('3')">3</button>
    <button class="operator" onclick="addOperator('-')">-</button>
    <button onclick="addNumber('0')">0</button>
    <button onclick="addDecimal()">.</button>
    <button class="equal" onclick="calculate()">=</button>
    <button class="operator" onclick="addOperator('+')">+</button>
  </div>
</div>

  </form>


</body>
</html>

