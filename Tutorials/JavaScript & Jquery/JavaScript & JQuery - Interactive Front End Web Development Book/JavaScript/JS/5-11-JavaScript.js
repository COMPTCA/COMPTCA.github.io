var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;    // Declare variables
elForm 			= document.getElementById('formSignup');	         // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint 	= document.getElementById('packageHint');
elTerms 		= document.getElementById('terms');
elTermsHint 	= document.getElementById('termsHint');

function packageHint(){                                             // Declare function
    var package = this.options[this.selectedIndex].value;           // Get selected option
    if (package == 'monthly'){                                      // If monthly package
        elPackageHint.textContent = 'Save $10 if you pay for 1 year!'; // Show this msg
    } else{                                                         // Otherwise
        elPackageHint.textContent = 'Wise choice!';                 // Show this msg
    }
}

function checkTerms(event){                                         // Declare function
    if (!elTerms.checked){                                          // If checkbox ticked
        elTermsHint.textContent = 'You must agree to the terms.';   // Show msg
        event.preventDefault();
    }
}

// Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
