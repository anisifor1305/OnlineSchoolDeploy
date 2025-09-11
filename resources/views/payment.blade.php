@extends('layouts.app')

@section('content')
<head>
    <link rel="stylesheet" href="{{ asset('css/styles/styles_payment.css')}}">
</head>
<body>
     <div class="container">
        <div class="toptextcontainer_payment">
            <div class="toptext_payment">
                Купите мой курс, и все будет хорошо.
            </div>
        </div>
        <div class="row_payment">
            <a class="coursebuttonref_payment" href="/setcourse/1">
                <div class="coursebutton_payment">
                    <div class="imgblock_payment">
                        <img class="cbimage_payment" src="./images/bannerstyle/bg.png" alt="">
                    </div>
                    <div class="coursenumber_payment">Один месяц <br> и четыре гарантированных видео</div>
                    <div class="coursecost_payment">1<div class='divive'>950₽</div></div>
                </div>
            </a>
            <a class="coursebuttonref_payment" href="/setcourse/1">
                <div class="coursebutton_payment">
                    <div class="imgblock_payment">
                        <img class="cbimage_payment" src="./images/bannerstyle/bg.png" alt="">
                    </div>
                    <div class="coursenumber_payment">Весь учебный год <br> и вся программа подготовки</div>
                    <div class="coursecost_payment">15<div class='divive'>650₽</div></div>
                </div>
            </a>
        </div>
    <footer class="footer">
        <div class="container">
            <p class="rights">&copy; 2024-2025, Ганиев Илья Наилевич, ИНН: 637204600766</p>
            <div class="footer__column">
                <a href='/policy' class="footer__secure">Политика конфиденциальности</a>
                <a href='/offer' class="footer__secure">Публичная оферта</a>
                <a href='#' class="footer__secure">FAQ</a>
            </div>
            <p class="mail">gainevilia@gmail.com</p>
        </div>
    </footer>
    </div>

</body>
@endsection