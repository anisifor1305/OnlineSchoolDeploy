@extends('layouts.app')

@section('content')
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>О нас | Наша компания</title>
    <link rel="stylesheet" href="{{ asset('css/styles/styles_about.css')}}">
</head>

    <section id="about-us" class="about-section">
        <!-- <h1>О нас</h1> -->
        <div class="maintitle">
            <h2 class="maintext mainhead">На старой железяке далеко не улетишь</h2>
        </div>
               <ul>
            <li>Здравствуйте. Меня зовут Илья Ганиев. Я учился в школе на отлично и сдал ЕГЭ по физике на 92 балла, сейчас я на отлично учусь в МГТУ им. Баумана.
                Этого мало, чтобы стать настоящим преподавателем. Настоящий преподаватель должен обладать талантом. Мои ученики,
                которые уже сдали экзамен и получили впечатляющий результат, считают что он у меня есть. Прямо сейчас вы можете купить мой курс по физике, 
                и я уверен, что вы не пожалеете, потому что каждый день я вкладываю в своё дело огромное количество сил, которые делают этот курс понятным, наглядным
                и эффектиным. Для того, чтобы в этом убедиться, вы можете купить подписку на один месяц. 
            </li>
        </ul>
    </section>

    <section id="services" class="services-section">
        <h2>Юридические данные</h2>
        <ul>
            <li>ФИО: Ганиев Илья Наилевич</li>
            <li>ИНН: 637204600766</li>
        </ul>
    </section>

    <footer class="footer">
        <div class="container">
            <p class="rights">&copy; 2024-2025, Ганиев Илья Наилевич,  ИНН: 637204600766</p>
            <div class="footer__column">
                <a href='/policy' class="footer__secure">Политика конфиденциальности</a>
                <a href='/offer' class="footer__secure">Публичная оферта</a>
                <a href='#' class="footer__secure">FAQ</a>
            </div>
            <p class="mail">gainevilia@gmail.com</p>
        </div>
    </footer>
</body>
</html>
@endsection