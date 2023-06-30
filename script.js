function handleSubmit(){
  var fname=document.getElementById('fname').value;
  var lname=document.getElementById('lname').value;
  var str=document.getElementById('str').value;
  var hnr=document.getElementById('hnr').value;
  var plz=document.getElementById('plz').value;
  var place=document.getElementById('place').value;
  var date_a=document.getElementById('date_a').value;
  var date_b=document.getElementById('date_b').value;
  var pet=document.getElementById('pet').value;
  var data=document.getElementById('data').checked;

  var message=
    'Vorname: ' + 
    fname +
    '\nNname: ' +
    lname +
    '\nStraße: ' +
    str +
    '\nHausnummer: ' +
    hnr +
    '\nPostleitzahl: ' +
    plz +
    '\nOrt: ' +
    place +
    '\nAnreisedatum: ' +
    date_a +
    '\nAbreisedatum: ' +
    date_b +
    '\nMitgebrachte Haustiere: ' +
    pet +
    '\nDatenschutzerklärung annerkannt: ' + 
    data

alert(`Folgende Angaben wurden an uns übersandt: \n ${message} \n Vielen Dank für Ihre Buchung.`);
}