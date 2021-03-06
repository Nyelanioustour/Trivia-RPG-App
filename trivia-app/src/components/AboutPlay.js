import React from 'react';
import { Image } from 'semantic-ui-react'


 const AboutDev = ( props ) => {
   return (
    <div>
    <Image src='/images/About_Image.png' size="medium" centered />
       <h4>
       Game play involves answering trivia questions to land attack and avoid damage. During the rounds each character has a set of powers that can make questions easier, avoid damage, increase stats, as well as, access to powerups to restore health or energy. 
       </h4>

       <h4>
       The better you perform, the more resources you will attain as questions get harder. Each character has different starting stats such as: 
        Health Points (HP) - which represents the amount of damage that can be recieved.
        Armor Class (AC) - Which reduces the damage for wrong answers.
        Energy - Which is a resource used for powerups.
       </h4>
       
       <h4>
        After each of the three waves of enemies a boss will appear. Defeating the bosses wins the game, but if your health drops to zero of below you are defeated!
       </h4>

       <h4>
       Can you survive all of the waves and defeat the final boss? Sign-up and find out!
       </h4>
   </div>
   )
  };
  
  export default AboutDev;;