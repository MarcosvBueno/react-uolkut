import { useState } from 'react';
import Step1 from '../../components/Register-components/step-one';
import Step2 from '../../components/Register-components/step-two';
                                                                                                                                 
function Register() {

  //The useState hook is used to manage component state. It initializes two states: showStep2 and registrationCompleted. The showStep2 state controls whether the second step of the record should be displayed or not. The registrationCompleted state indicates whether the registration has completed or not. 

  const [showStep2, setShowStep2] = useState(false);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  //This function is called when the user advances to the next step in the record. It sets the showStep2 state to true, which causes the Step2 component to render, displaying the second step of the record. 

  const handleNext = () => {
    setShowStep2(true);
  };

  //This function is called when the user goes back to the previous registration step. It sets the showStep2 state to false, causing the Step1 component to re-render, displaying the first step of the record. Also, it resets the registrationCompleted state to false so that the registration status is reset when the user comes back.

  const handlePrev = () => {
    setShowStep2(false);
    setRegistrationCompleted(false); // Reset registration status when going back
  };

  //This function is called when registration is complete. It sets the registrationCompleted state to true, indicating that the registration process is complete.
  
  const handleComplete = () => {
    setRegistrationCompleted(true);
  };


  return (
    <div>
      {!showStep2 ? (
        <Step1 handleNext={handleNext} />
      ) : (
        <Step2
          handleComplete={handleComplete}
          handlePrev={handlePrev}
          registrationCompleted={registrationCompleted}
        />
      )}

    </div>
  );

}

export default Register;
