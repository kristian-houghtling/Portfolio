'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

var totalScore = 0;
var bonusTotal = 0;

var incrementValueT1 = 0;
var incrementValueT2 = 0;
var incrementValueT3 = 0;

var t1PurchaseAmt = 10;
var t2PurchaseAmt = 100;
var t3PurchaseAmt = 1000;

var t1Effect = document.getElementById('t1Bonus');
var t2Effect = document.getElementById('t2Bonus');
var t3Effect = document.getElementById('t3Bonus');

setInterval(increment, 1000);

  //function which counts every click on worms.
  $("#clickMe").click(function(){
    totalScore ++;
    updateTotal();
  });

  //function which updates screen with the current count of worms squished.
  //Also calls functions to add effects to Tiers.
  function updateTotal(){
    $("#currentScore").text(totalScore.toFixed(0));
    upgradeEffect1();
    upgradeEffect2();
    upgradeEffect3();
  }

  //function runs every second and updates screen totals with current clicks plus worms/sec earned from upgrades
  function increment(){
    totalScore = totalScore + incrementValueT1 + incrementValueT2 + incrementValueT3;
    updateTotal();
  }

  //function determines if Tier 1 upgrade is available after a click. Calls functions to update the bonus rates and to add effects to Tiers
  $("#t1Bonus").click(function(){
    console.log("im clicking T1");
    let change = t1PurchaseAmt;
    if (totalScore >= t1PurchaseAmt) {
        incrementValueT1 = incrementValueT1 + .1;
        totalScore = totalScore - t1PurchaseAmt;
        updateTotal();
        change *= .1;
        t1PurchaseAmt += change;
        console.log("Next T1 purchase amt = " + t1PurchaseAmt);
        bonusRateT1();
        upgradeEffect1();
    }
  });

  //Updates screen with bonus rates and upgrade purchase requirements.
  function bonusRateT1() {
    $("#bonusRateT1").text("You are squishing: " + incrementValueT1.toFixed(1) + " /s");
    $("#upgradeAmtT1").text("Upgrade for: " + t1PurchaseAmt.toFixed(0));
  }

  //function determines if Tier 2 upgrade is available after a click. Calls functions to update the bonus rates and to add effects to Tiers
  $("#t2Bonus").click(function(){
    console.log("im clicking T2");
    let change = t2PurchaseAmt;
    console.log("T2 change = " + change);
    if (totalScore >= t2PurchaseAmt) {
      console.log("totalScore is > 100");
      incrementValueT2 = incrementValueT2 + 1;
      totalScore = totalScore - t2PurchaseAmt;
      updateTotal();
      change *= .1;
      console.log("new change is " + change);
      t2PurchaseAmt += change;
      console.log("Next T1 purchase amt = " + t2PurchaseAmt);
      bonusRateT2();
      upgradeEffect2();
    }
  });

  //Updates screen with bonus rates and upgrade purchase requirements.
  function bonusRateT2() {
    $("#bonusRateT2").text("You are squishing: " + incrementValueT2.toFixed(1) + " /s");
    $("#upgradeAmtT2").text("Upgrade for: " + t2PurchaseAmt.toFixed(0));
  }

  //function determines if Tier 3 upgrade is available after a click. Calls functions to update the bonus rates and to add effects to Tiers
  $("#t3Bonus").click(function(){
    console.log("im clicking T3");
    let change = t3PurchaseAmt;
    if (totalScore >= t3PurchaseAmt) {
      console.log("totalScore is > 1000");
      incrementValueT3 = incrementValueT3 + 10;
      totalScore = totalScore - t3PurchaseAmt;
      updateTotal();
      change *= .1;
      t3PurchaseAmt += change;
      console.log("Next T3 purchase amt = " + t3PurchaseAmt);
      bonusRateT3();
      upgradeEffect3();
    }
  });

  //Updates screen with bonus rates and upgrade purchase requirements.
  function bonusRateT3() {
    $("#bonusRateT3").text("You are squishing: " + incrementValueT3.toFixed(1) + " /s");
    $("#upgradeAmtT3").text("Upgrade for: " + t3PurchaseAmt.toFixed(0));
  }


  //The following three functions check if upgrade requirements are met and add effects to each respective Tier if valid.
  function upgradeEffect1() {
    if (totalScore >= t1PurchaseAmt) {
      t1Effect.classList.add("effect");
    } else if (totalScore < t1PurchaseAmt) {
      t1Effect.classList.remove("effect");
    }
  }

  function upgradeEffect2() {
    if (totalScore >= t2PurchaseAmt) {
      t2Effect.classList.add("effect");
    } else if (totalScore < t2PurchaseAmt){
      t2Effect.classList.remove("effect");
    }
  }

  function upgradeEffect3(){
    if (totalScore >= t3PurchaseAmt) {
      t3Effect.classList.add("effect");
    } else if (totalScore < t3PurchaseAmt) {
      t3Effect.classList.remove("effect");
    }
  }

});
