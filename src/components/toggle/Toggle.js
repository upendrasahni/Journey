import {React, useEffect, useState} from 'react'
import './Toggle.css'


const Toggle = () => {
    
  const [theme, setTheme] = useState("light-mode");

  const changeTheme = () => {
   if(theme === "dark-mode"){
    setTheme("light-mode");
   } else{
    setTheme("dark-mode");
   }
  };

  useEffect(()=> {
    document.body.className = theme;
  }, [theme])
  

  return (
    <div >
      <input type="checkbox" id="switch" onClick={()=> changeTheme()} />
        <div class="app">
            <div class="skeleton">
                <label for="switch">
                    <div class="toggle"></div>
                    <div class="sun-moon">
                        <p class="light"><i class="fa fa-sun sun"></i></p>
                        <p class="dark"><i class="fa fa-moon moon"></i></p>
                    </div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Toggle
