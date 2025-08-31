import { useEffect } from "react";
import CourseBlock from "./CourseBlock";
import BuyOrCourses from "./BuyOrCourses";

function Profile({coursesInfo, stepNumbers}) {
    let isBought = false;
    if (coursesInfo!='null'){
        isBought = true;
    }
    return ( 
        <>

    <div className="hero"> 
        <div className="container maincont inline_block ">
            <div className="table">
                <div class="greeting">Добро пожаловать, {firstname}</div>
                <div className="cell secure top"><a className="secure" href="#" >Политика конфиденциальности</a></div>
                <div className="cell secure"><a className="secure" href="#" >Управление безопасностью</a></div>
                <div className="cell secure"><a className="secure" href="#" >FAQ</a></div>
                <small>Электронная почта:</small>
                <div className="email">{email}</div>
                {/* <div className="column column__pc">
                    <div className="cell">Имя</div>
                    <div className="cell">Фамилия</div>
                    <div className="cell secure"><a className="secure" href="#" >Политика конфиденциальности</a></div>
                    <div className="cell secure"><a className="secure" href="#" >FAQ</a></div>
                </div >
                <div className="column">
                    <div className="cell">{firstname}</div>
                    <div className="cell">{lastname}</div>
                    <div className="cell secure"><a className="secure" href="#" >Управление безопасностью</a></div>

                </div> */}
            </div>
            <div class='icon-container'>
                <img className="profile_icon" src="./images/profile (author).png" alt="" height="30" width="30"></img>
            </div>
        </div>
        <div className="my_course"> 
        <div className="course">
            Мои Курсы
        </div>
        <BuyOrCourses coursesInfo={coursesInfo} stepNumbers={stepNumbers} isBought={isBought}/>
        </div>
    </div>


    <footer class="footer">
        <div class="container">
            <p class="rights">&copy; 2024-2025, Ганиев Илья Наилевич</p>
            <div class="footer__column">
                <div class="footer__secure">Политика конфиденциальности</div>
                <div class="footer__secure">Публичная оферта</div>
                <div class="footer__secure">FAQ</div>
            </div>
            <p class="mail">gainevilia@gmail.com</p>
        </div>
    </footer>
        </>
     );
}

export default Profile;