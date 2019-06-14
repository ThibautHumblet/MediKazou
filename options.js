// Copyright 2019 Thibaut Humblet. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var elementnaam;
var idzichtbaar;

var heeftVoedingsAllergie;
var heeftSpecifiekeVoedingsAllergie;
var heeftAndereAllergie;
var heeftSpecifiekeAndereAllergie;
var heeftDieet;
var heeftAnderDieet;
var heeftAandachtspunt;
var heeftGeneesmiddel;
var heeftAnderZiekenfonds;

var p1Naam;

var elementsVoedingsAllergie = document.getElementsByName("voedingsAllergie");
var elementsErnstAllergie = document.getElementsByName("ernstVoedingsAllergie");
var elementsAndereAllergie = document.getElementsByName("andereAllergie");
var elementsErnstAndereAllergie = document.getElementsByName("ernstAndereAllergie");
var elementsDieet = document.getElementsByName("dieet");
var elementsAandachtspunt = document.getElementsByName("aandachtspunt");
var elementsGeneesmiddel = document.getElementsByName("geneesmiddel");
var elementZiekenfonds = document.getElementsByName("ziekenfonds");

var elementMedischeFiche = document.getElementById("medischeFiche");

function dieetinfoZichtbaar(elementnaam, idzichtbaar, ifvalue, boolinfo) {
  for (var i = 0; i < elementnaam.length; i++) {
    elementnaam[i].addEventListener('click', function (evt) {

      if (evt.currentTarget.value === ifvalue) {
        document.getElementById(idzichtbaar).classList.remove('hidden');
        boolinfo == true;
      }
      else {
        document.getElementById(idzichtbaar).classList.add('hidden');
        boolinfo == false;
      }
    });
  }
}

dieetinfoZichtbaar(elementsVoedingsAllergie, 'voedingsAllergieExtra', '1', heeftVoedingsAllergie);
dieetinfoZichtbaar(elementsErnstAllergie, 'ernstVoedingsAllergieSpecifiek', '3', heeftSpecifiekeVoedingsAllergie);
dieetinfoZichtbaar(elementsAndereAllergie, 'andereAllergieExtra', '1', heeftAndereAllergie);
dieetinfoZichtbaar(elementsErnstAndereAllergie, 'ernstAndereAllergieSpecifiek', '4', heeftSpecifiekeAndereAllergie);
dieetinfoZichtbaar(elementsDieet, 'dieetExtra', '1', heeftDieet);
dieetinfoZichtbaar(elementsAandachtspunt, 'aandachtspuntExtra', '1', heeftAandachtspunt);
dieetinfoZichtbaar(elementsGeneesmiddel, 'geneesmiddelExtra', '1', heeftGeneesmiddel);
dieetinfoZichtbaar(elementZiekenfonds, 'ziekenfondsAnders', '9', heeftAnderZiekenfonds);

var knopOpslaan = document.getElementById("knopOpslaan");

knopOpslaan.addEventListener('click', function () {
  console.log("Button geklikt");
});