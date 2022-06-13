
import styles from '../../styles/hero/herohoro.module.css'
export const Medama = ()=>{
  <div>
    <div className={styles.box}>
          <div className={styles.eye}></div>
          <div className={styles.eye}></div>
      </div>
      
        {document.querySelector<HTMLElement>('body').addEventListener("mousemove", medama)}
        {function medama(){
            const eye = document.querySelectorAll('.eye');
            eye.forEach(function(eye){
                let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
                // eventをtypescriptに置き換える方法が分からない
                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                let rotation = (radian * (180 / Math.PI)* -1) + 270;
                eye.style.transform = "rotate("+ rotation + "deg)"
            });
        
      }}
    
  </div>
}