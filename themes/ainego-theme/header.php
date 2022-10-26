<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head() ?>
    </head>
    <body>
        <header id="header-menu">
            <div class="nav-top">
                <div class="tempo-clima">
                    <span class="tempo-clima__item"> 
                        <img src="<?= get_template_directory_uri()?>/assets/image/wb_twilight.svg" alt="icone clima solarado"> 34°c, Ensolarado
                    </span>
                    <span class="tempo-clima__item">
                        <img src="<?= get_template_directory_uri()?>/assets/image/schedule.svg" alt="icone clima solarado"> 
                        <?php
                            // set the default timezone.
                            date_default_timezone_set('UTC-02:00');

                            echo date('l jS \d\e F Y h:i:s A');
                        ?>
                    </span>
                </div>
                <dev class="social">
                    <a href="#">
                        <img src="<?= get_template_directory_uri()?>/assets/image/youtube.svg" alt="Icone YouTube do ai, neGÔ!">
                    </a>
                    <a href="#">
                        <img src="<?= get_template_directory_uri()?>/assets/image/face_vermelho.svg" alt="Icone facebook do ai, neGÔ!">
                    </a>
                    <a href="#">
                        <img src="<?= get_template_directory_uri()?>/assets/image/Insta_vermelho.svg" alt="Icone Instagram do ai, neGÔ!">
                    </a>
                </dev>
            </div>
            <div class="menu-navegacao">
                <img class="logo" src="<?= get_template_directory_uri()?>/assets/image/ainego.png" alt="Logo do ai, neGÔ!">
                <nav id="navbar">
                    <button id="btn-menu" onclick="toggleMenu();">
                        <span class="hamburger"></span>
                    </button>
                    <ul class="menu">
                        <a href="./">
                            <li class="menu-item">HOME</li>
                        </a>
                        <li class="menu-item" onclick="toggleSubMenu()">CATEGORIA</li>
                        <ul id="sub-menu">
                            <a href="/"><li class="sub-item">FOFOCA</li></a>
                            <a href="/"><li class="sub-item">TOP NEWS</li></a>
                            <a href="/"><li class="sub-item">RECENTES</li></a>
                        </ul>
                        <a href="/"><li class="menu-item">SOBRE</li></a>
                        <a href="/"><li class="menu-item">CONTATO</li></a>
                    </ul>
                </nav>
                <img class="lupa" src="<?= get_template_directory_uri()?>/assets/image/search.svg" alt="Lupa de pesquisa">
            </div>
            <hr class="borda-menu">
        </header>