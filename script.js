function addGeneratorInformation() {
  var generatorSection = document.createElement('div');
  generatorSection.className = 'genInfo';

  generatorSection.innerHTML = `
  <div class="genInfo">
  <div class="genType-div">
  <div class="name">Generator Type</div>
  <div class="input-div2">
      <input type="radio" name="answer" id="">LHP 7.5 kVA to 320 kVA <br>
      <input type="radio" name="answer" id="">HHP - 380 kVA & Above <br>
      <input type="radio" name="answer" id="">Portable (Upto 5 kVA) <br>
      <input type="radio" name="answer" id="">Open OG ( 5 kVA to 15 kVA) OG <br>
      <input type="radio" name="answer" id="">Other 
      <br>
  </div>
</div>

<div class="kva-div">
  <div class="name">KVA Rating</div>
  <div class="input2-div">
      <div style="padding-left: 20px;">
      <label><input type="checkbox" name="state" value="karnataka"> 3</label>
      <label><input type="checkbox" name="state" value="goa"> 5</label>
      <label><input type="checkbox" name="state" value="maharashtra"> 7.5</label>
      <label><input type="checkbox" name="state" value="kerala"> 10</label>
      <label><input type="checkbox" name="state" value="kerala"> 15</label></div>
  </div>
</div>

<div class="genType-div">
  <div class="name">Phase</div>
  <div class="input-div2">
      <input type="radio" name="answer" id="">1 Phase<br>
      <input type="radio" name="answer" id="">3 Phase<br>
      <br>
  </div>
</div>
<div class="genType-div">
<div class="name">Company Make</div><!--Jitne KVA ratings  utne companies-->
<div class="input-div"><input type="input" name="answer" placeholder="Your answer"></div>
<div class="input-div"><input type="input" name="answer" placeholder="Your answer"></div>
<div class="input-div"><input type="input" name="answer" placeholder="Your answer"></div>
  <br>
</div>


<div class="genType-div">
  <div class="name">Breaker(Only for HHP)</div>
  <div class="input-div2">
      <input type="radio" name="answer" id="">Yes<br>
      <input type="radio" name="answer" id="">No<br>
      <br>
  </div>
</div>

<div class="genType-div"><!--Jitne Companies utne prices-->
<div class="name">Price</div><!--Jitne KVA ratings  utne companies-->
<div class="input-div"><input type="input" name="answer" placeholder="Your answer"></div>
  <br>
</div>

<div class="genType-div">
<div class="name">Remark</div><!--Jitne KVA ratings  utne companies-->
<div class="input-div"><input type="input" name="answer" placeholder="Your answer"></div>
  <br>
</div>
</div>
<br>

<div style="display: flex; align-items: center; justify-content: center; padding-bottom: 50px;">
    <input class="btnadd" type="button" value="Add More" onclick="addGeneratorInformation()">
</div>
<br>

<div style="display: flex; align-items: center; justify-content: center; padding-bottom: 10px;">
<input class="btn" type="submit" name="Submit" value="Click Me">
</div>
<br>
</div>
  `;

  document.querySelector('.form').appendChild(generatorSection);
}