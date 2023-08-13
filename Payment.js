
 var storedData = JSON.parse(localStorage.getItem('summaryData'));
 if (storedData) {
     document.getElementById('Date').innerText = storedData.Date;
     document.getElementById('Time').innerText = storedData.Time;
     document.getElementById('SLA').innerText = storedData.SLA;
     document.getElementById('SLAPrice').innerText = storedData.SLAPrice;
     document.getElementById('SLC').innerText = storedData.SLC;
     document.getElementById('SLCPrice').innerText = storedData.SLCPrice;
     document.getElementById('FA').innerText = storedData.FA;
     document.getElementById('FAPrice').innerText = storedData.FAPrice;
     document.getElementById('FC').innerText = storedData.FC;
     document.getElementById('FCPrice').innerText = storedData.FCPrice;
     document.getElementById('Inf').innerText = storedData.Inf;
     document.getElementById('Total').innerText = storedData.Total;
     document.getElementById('payprice').innerHTML =  document.getElementById('Total').textContent;
 }

 function validateForm() {
  var cardNumber = document.getElementById("CardNumber").value;
  var expiryDate = document.getElementById("expiredate").value;
  var cvcCvv = document.getElementById("CVC").value;
  var nameOnCard = document.getElementById("NOC").value;


  if (!/^\d{16}$/.test(cardNumber)) {
      alert("Please enter a valid 16-digit card number.");
      return false;
  }

  if (!/^\d{4}$/.test(expiryDate)) {
      alert("Please enter a valid 4-digit expiry date.");
      return false;
  }


  if (!/^\d{3}$/.test(cvcCvv)) {
      alert("Please enter a valid 3-digit CVC/CVV number.");
      return false;
  }


  if (!/^[A-Za-z\s]+$/.test(nameOnCard.trim())) {
    alert("Please enter a valid name on card with alphabetic characters only.");
    return false;
}

  return true;
}

 