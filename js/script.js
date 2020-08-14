const buttonCreate = $('.btn-create');
const buttonReplace = $('.btn-replace');
const textValue = $('.ryaba');
const obj = {
  "text":[
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
  ]
};
buttonCreate.click(function() {
  textValue.html(obj.text)
});
buttonReplace.click(function() {
  const var1 = $(".var1").val();
  const var2 = $(".var2").val();
  const var3 = $(".var3").val();
  const var4 = $(".var4").val();
  const var5 = $(".var5").val();
  const var6 = $(".var6").val();
  const speach = $(".speach").val();
  const NewObj = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`
    ]
  };
  textValue.html(NewObj.text);
});
