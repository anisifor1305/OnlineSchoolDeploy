function HomePage() {
    return ( 
        <>

    {/* <p>Ваш баланс: { balance }</p> */}


    <banner class="style1">
        <div class="photoplace">
            <img class="image-iliya" src="./images/bannerstyle/iliya2.jpg" alt=""></img>
            <div class="resistordiv"><img class="image resistor" src="./images/bannerstyle/atom2.svg" alt=""></img></div>
            <div class="lightdiv"><img class="image light" src="./images/bannerstyle/dinamometr.svg" alt=""></img></div>
            <div class="balldiv"><img class="image ball" src="./images/bannerstyle/mayatnik.svg" alt=""></img></div>
            <div class="geardiv"><img class="image gear" src="./images/bannerstyle/oscillograph.svg" alt=""></img></div>
        </div>
        <div class="cardplace">
            <div class="banner-text-main">Подготовка к ЕГЭ <br></br> с Ильёй Ганиевым!</div>
            <div class="lit-banner-text">Обучу Вас даже с нуля!</div> 
            <div><button  class="button">Записаться</button></div>
        </div>
    </banner>


    <section id="hero-section" class="hero">
        <div class="container maincont">
            <div class="maintitle">
                <h2 class="maintext mainhead">Люто продающий заголовок.</h2>
            </div>
            <div class="reviews-block">
            <div class="review-item item1">
                <div class="reviewer"><img class="avatar" src="/images/ava1.jpg" alt="avatar" />Александр</div>
                <div class="review_text">Хочу поступить в ИТМО и решил подготовиться серьёзно к ЕГЭ по физике и нашёл отличный ресурс.
                     Илья понятно и доступно объясняет материал, качество съёмки отличное, всё понятно и доступно изложено. 
                     Теперь готовлюсь с удовольствием и уверенностью в результате!
                </div>
                <div class="rate"><img class="star_img" src="/images/star.svg" alt="star" /> 4.6/5 </div>
            </div>
            <div class="review-item item2">
                <div class="reviewer"><img class="avatar" src="/images/ava2.jpg" alt="avatar" />Арина</div>
                <div class="review_text">Училась у него, когда он еще был на авито и без пафосного сайта {"))"}. 
                    Набрала 92 балла, мне хватило, чтобы поступить в МИРЭА. Короче, классный чел. 
                </div>
                <div class="rate"><img class="star_img" src="/images/star.svg" alt="star" /> 4.6/5 </div>
            </div>
            <div class="review-item tall-review">
                <div class="reviewer"><img class="avatar" src="/images/ava3.jpg" alt="avatar" />Павел</div>
                <div class="review_text">Припахал меня Илья этот отзыв написать,а я уже давно все сдал и забыть хочу XD.
                     Слова мои льются в песню, так как Илья - реально хороший и преподаватель, и человек. Рекомендую его курсы всем, кто готовится 
                     к ЕГЭ по физике. Когда я занимался, площадки его не было еще, или же мы как-то особенно занимались. Но щас, я думаю, очень удобно заниматься онлайн: удобный интерфейс, качественная подача материала, доступные объяснения сложных тем.
                     Тесты помогают выявить слабые места, домашняя работа закрепляет знания. Особенное внимание уделено визуализации материала 
                     — отлично снятые видеоролики повышают мотивацию учиться и понимать предмет глубже.
                </div>
                <div class="rate"><img class="star_img" src="/images/star.svg" alt="star" /> 4.6/5 </div>
            </div>
            <div class="review-item tall-review-summary">                
                <div className="review-info">Информация</div>
                <img class="milkyWay" src="/images/milkyWay.jpg" alt="milkyWay" />
                Я рад каждому ученику. Начните заниматься со мной прямо сейчас, 
                и уже пару-тройку занятий вам захочется написать хороший отзыв. Я преподаю с душой.
                Я готовлю к ЕГЭ по физике так, что вы полюбите этот предмет.
            </div>
            </div>

            <div class="info">
                <div ><iframe class="prevideo" src="https://rutube.ru/play/embed/fd58389c7fd15e5044f0213340c08ab1/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
                <div class="cardblock">
                    <div class="cardinfo">
                        <div>
                            <h2 class="cardhead">Как проходят занятия?</h2>
                        </div>
                        <div class="cardtext">
                            Обучение проходит на этой платформе. Вы сможете с легкостью отслеживать свой прогресс. Это даст вам возможность не волноваться и не думать, что вы не успеваете. 
                            Если стоит поднажать - наши алгоритмы вам это подскажут.
                            За один учебный год мы методично пройдём все темы, необходимые для успешной сдачи ЕГЭ. 
                    После освоения материала вы закрепите его выполнением заданий из банка ЕГЭ. Мы проверяем не только ответ, мы проверяем соответствие решения критериям.
                        </div>
                    </div>
                    <div class="imgplace"><img class='cardphoto' src="images/rele.svg" alt="маятник"></img></div>
                </div>
                <div class="cardblock">
                    <div class="imgplace"><img class='cardphoto' src="images/prisma.svg" alt="маятник"></img></div>
                    <div class="cardinfo">
                        <div>
                            <h2 class="cardhead">Плюсы подготовки со мной:</h2>
                        </div>
                        <div class="cardtext__ol">
                            <div class="list__el"> <img class='card__dot' src="images/dot.svg" alt="dot"></img>Тщательная проверка по критериям, исправление недочётов</div>
                            <div class="list__el"><img class='card__dot' src="images/dot.svg" alt="dot"></img>План подготовки, благодаря которому не надо волноваться</div>
                            <div class="list__el"><img class='card__dot' src="images/dot.svg" alt="dot"></img>Интересная подача информации, а не тупое нарешивание заданий.</div>
                            <div class="btnplace"><button  class="button_small">Вперёд!</button></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p class="rights">&copy; DENIS 2025. Все права пока что не защищены.</p>
            <div class="footer__column">
                <div class="footer__secure">Политика конфиденциальности</div>
                <div class="footer__secure">FAQ</div>
            </div>
        </div>
    </footer>

        </>
     );
}

export default HomePage;