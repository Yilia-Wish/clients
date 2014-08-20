goog.require('Blockly.Blocks');

Blockly.Blocks['eval'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendValueInput("NAME")
        .appendField("eval")
        .setCheck("String");
    this.setOutput(false);
    this.setTooltip('');
	this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['eval'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'eval('+value_name+');';
  return code;
};

Blockly.Blocks['orb_lifetime'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(195);
    this.appendDummyInput()
        .appendField("orb-lifetime");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.JavaScript['orb_lifetime'] = function(block) {
  var code = 'orb.lifeTime';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// =============== FUNCTIONS ====================

// == ON CREATE ==
Blockly.Blocks['oncreate'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("onCreate         ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("orb");
    this.appendStatementInput("BODY");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['oncreate'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var code = 'function onCreate( orb ) {\n' + statements_body +"\n}";
  return code;
};
//==============

// == ON TICK ==
Blockly.Blocks['ontick'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(195);
    this.appendDummyInput()
        .appendField("onTick          ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("orb");
    this.appendStatementInput("BODY");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['ontick'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var code = 'function onTick( orb ) {\n' + statements_body +"\n}";
  return code;
};
//==============

Blockly.Blocks['onactivate'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("onActivate        orb");
    this.appendStatementInput("NAME");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['onactivate'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  
  var code = 'function onActivate( orb ) {\n' + statements_name +"\n}";
  return code;
};

// == ON HIT ==
Blockly.Blocks['onhit'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(15);
    this.appendDummyInput()
        .appendField("onHit         ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("orb");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("other");
    this.appendStatementInput("BODY");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['onhit'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var code = 'function onHit( orb, other ) {\n' + statements_body +"\n}";
  return code;
};
//==============

//== MOVE-Dropdown ==
Blockly.Blocks['orb_move_dropdown'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput()
        .appendField("orb-move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["slow", "SLOW"], ["medium", "MEDIUM"], ["fast", "FAST"]]), "SPEED");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['orb_move_dropdown'] = function(block) {
  var dropdown_speed = block.getFieldValue('SPEED');
  
  var moveSpeed = 10;
  if( dropdown_speed == 'SLOW' )
  	moveSpeed = 5;
  if( dropdown_speed == 'MEDIUM' )
  	moveSpeed = 15;
  if( dropdown_speed == 'FAST' )
  	moveSpeed = 50;
  	
  var code = 'orb.move(' + moveSpeed + ');';
  return code;
};
//========

//== MOVE-Variable ==
Blockly.Blocks['orb_move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput()
        .appendField("orb-move");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.JavaScript['orb_move'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'orb.move(' + value_name + ');';
  return code;
};
//========

//== DIG-Variable ==
Blockly.Blocks['orb_dig'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(30);
    this.appendDummyInput()
        .appendField("orb-dig");
    this.appendValueInput("STRENGTH")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['orb_dig'] = function(block) {
  var value_strength = Blockly.JavaScript.valueToCode(block, 'STRENGTH', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'orb.dig(' + value_strength + ' );';
  return code;
};
//========

//== Create-Orb ==
Blockly.Blocks['create_orb'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
    this.appendDummyInput()
        .appendField("create-orb");
    this.appendDummyInput()
        .appendField("    name");
    this.appendValueInput("ORB_NAME")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("   mana");
    this.appendValueInput("MANA")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['create_orb'] = function(block) {
  var value_orb_name = Blockly.JavaScript.valueToCode(block, 'ORB_NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mana = Blockly.JavaScript.valueToCode(block, 'MANA', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'orb.createOrb( ' + value_orb_name + ', ' + value_mana + ' );';
  return code;
};
//========

//== Turn-Orb ==
Blockly.Blocks['orb_turn'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("orb-turn    ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left", "LEFT"], ["up", "UP"]]), "DIRECTION");
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle("90"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['orb_turn'] = function(block) {
  var angle_name = block.getFieldValue('NAME');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  
  var code = 'orb.turn';
  if( dropdown_direction == 'LEFT' )
  	code += 'Left';
  if( dropdown_direction == 'UP' )
  	code += 'Up';
  
  code += '( ' + angle_name + ' );';
  return code;
};
//========

//== Destroy-Orb ==
Blockly.Blocks['destroy_orb'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(0);
    this.appendDummyInput()
        .appendField("destroy-orb");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['destroy_orb'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'orb.destroySelf();';
  return code;
};
//========

//== CreatePhysicalConnection ==
Blockly.Blocks['create_physical_connection'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("create-physical-connection");
    this.appendDummyInput()
        .appendField("      other");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['create_physical_connection'] = function(block) {
  var code = 'orb.createPhysicalConnection( other );';
  return code;
};
//==========

//== BreakPhysicalConnection ==
Blockly.Blocks['break_physical_connection'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("break-physical-connection");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['break_physical_connection'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'orb.breakPhysicalConnections();';
  return code;
};
//==========

//== Point at ==
Blockly.Blocks['orb_lookat'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(225);
    this.appendDummyInput()
        .appendField("look-at     ")
        .appendField(new Blockly.FieldDropdown([["player", "PLAYER"], ["owner", "OWNER"]]), "OBJECT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['orb_lookat'] = function(block) {
  var dropdown_object = block.getFieldValue('OBJECT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'orb.pointAt';
  
  if( dropdown_object == "PLAYER" )
    code += 'Player';
  else if( dropdown_object == "OWNER" )
    code += 'Owner';

  code += '();\n';
  return code;
};
//==========

//== Random Roation ==
Blockly.Blocks['orb_set_rotation'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(225);
    this.appendDummyInput()
        .appendField("orb-set-rotation     ")
        .appendField(new Blockly.FieldDropdown([ ["random", "RANDOM"], ["up", "UP"], ["down", "DOWN"] ]), "OBJECT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['orb_set_rotation'] = function(block) {
  var dropdown_object = block.getFieldValue('OBJECT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'orb.transform.rotation = ';
  
  if( dropdown_object == "RANDOM" )
    code += 'Random.rotation';
  else if( dropdown_object == "UP" )
    code += 'Quaternion.LookRotation(Vector3.up, orb.transform.up)';
  else if( dropdown_object == "DOWN" )
    code += 'Quaternion.LookRotation(-Vector3.up, orb.transform.up)';

  code += ';\n';
  return code;
};
//==========

