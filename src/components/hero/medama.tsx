
import styles from '../../styles/hero/herohoro.module.css'
import React from 'react';
// type Props = {
//   onClick: (event: React.MouseEvent<HTMLInputElement>) => void
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
//   onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
//   onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
//   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
//   onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
// }
export const Medama = ()=>{
  if (typeof document !== 'undefined') {
    document.querySelector<HTMLElement>('body').addEventListener("mousemove", medamaKurun)
  }
  // reactで実装すれば動きそう....
  // https://ja.reactjs.org/docs/handling-events.html
  function medamaKurun(event:any){
      const eye = document.querySelectorAll<HTMLElement>('.eye');
      eye.forEach(function(eye){
          let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
          let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
          let radian = Math.atan2(event.pageX - x, event.pageY - y);
          let rotation = (radian * (180 / Math.PI)* -1) + 270;
          eye.style.transform = "rotate("+ rotation + "deg)"
      });
  
  }
  return(
  <div>
    <div className={styles.eyeBox}>
          <div className={styles.eye}></div>
          <div className={styles.eye}></div>
      </div> 
  </div>
  )
}
