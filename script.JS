    // Regular expression for Indian mobile numbers
  

function validateMobileNumber() {
    const mobileNumberInput = document.getElementById('mobileNumber');
    const mobileNumber = mobileNumberInput.value.trim();
    const mobileNumberPattern = /^[6-9]\d{9}$/; 
           
    // Regular expression for Indian mobile numbers
  
    if (mobileNumberPattern.test(mobileNumber)) {
      document.getElementById('validationResult').textContent = 'Valid Indian Mobile Number';
      document.getElementById('validationResult').style.color = 'green';
    } else {
      document.getElementById('validationResult').textContent = 'Invalid Indian Mobile Number';
      document.getElementById('validationResult').style.color = 'red';
    }
  }
  