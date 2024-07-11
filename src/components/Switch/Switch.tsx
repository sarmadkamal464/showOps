import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';

const SwitchDemo = () => {
    const [isChecked, setIsChecked] = useState(false); 
    console.log('isChecked 1',isChecked)
    const handleChange = () => {
        document.body.className = isChecked
                    ? "dark-theme"
                    : "light-theme";
        setIsChecked(!isChecked)
    };
    return(
    <div style={{ display: 'flex', alignItems: 'center', }}>
      
      <Switch.Root className={`SwitchRoot ${isChecked ? "dark-mode" : "light-mode"}`}  id="airplane-mode"
     checked={isChecked} onCheckedChange={handleChange}>
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
       { isChecked? 'Dark Mode' : 'Light Mode'}
      </label>
    </div>
)};

export default SwitchDemo;