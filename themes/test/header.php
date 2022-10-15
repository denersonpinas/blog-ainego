<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head() ?>
    </head>
    <body>
        <section id="section-menu">
            <div class="nav-top">
                <div class="tempo-clima">
                    <span>
                        <img src="<?= get_template_directory_uri()?>/assets/image/wb_twilight.svg" alt="icone clima solarado"> 34°c, Ensolarado
                    </span>
                    <span>
                        <img src="<?= get_template_directory_uri()?>/assets/image/schedule.svg" alt="icone clima solarado"> Ter, 18th Set, 2022
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
            <div class="navbar">
                <img class="logo" src="<?= get_template_directory_uri()?>/assets/image/ainego.png" alt="Logo do ai, neGÔ!">
                <img class="bars-menu" src="<?= get_template_directory_uri()?>/assets/image/bars.svg">
                <ul class="menu">
                    <a href="./">
                        <li class="menu-item">HOME</li>
                    </a>
                    <li class="menu-item">CATEGORIA</li>
                    <ul style="display: none;">
                        <li>FOFOCA</li>
                        <li>TOP NEWS</li>
                        <li>RECENTES</li>
                    </ul>
                    <li class="menu-item">SOBRE</li>
                    <li class="menu-item">CONTATO</li>
                </ul>
            </div>
            <hr class="borda-menu">
        </section>