<?php
/**
 *    Template Name: Calculadora
 */
?>
<!doctype html>
<html lang="pt-br">
<head>
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="theme-color" content="#820AD1">
    <meta name="google-site-verification" content="S3Lr8UltdogxCeeyjHLPeI_fZRwHRhKfUuIXhh66VL0" />
    <meta name="google-site-verification" content="IMS-tWOQVTWclnoSweQsrzhexzy9eCgJdp4UHWTQR2Q" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preload" href="<?= get_template_directory_uri() ?>/assets/fonts/Graphik-Medium.woff2" as="font" crossorigin="anonymous">
    <link rel="preload" href="<?= get_template_directory_uri() ?>/assets/fonts/Graphik-Regular.woff2" as="font" crossorigin="anonymous">
    <link rel="preload" href="<?= get_template_directory_uri() ?>/assets/fonts/NotoSerif-Regular.woff2" as="font" crossorigin="anonymous">

    <?php wp_head(); ?>
</head>
<body>
    <div class="outer-container">
        <div class="carousel-container presentation">
            <div id="calculadora-dividas" class="carousel">
                <div class="calc-hero">
                    <h2>Calculadora<br /><span> <span>de</span> <span>Dívidas</span></span></h2>
                    <img data-lazy="<?= get_template_directory_uri() ?>/assets/images/calculadora-dividas/CAPA-CALCULADORA-1_semmargem.gif" alt="">
                    <div class="start-here">
                        <p>Comece aqui</p>
                        <button id="next-hero" class="next-hero" aria-label="Next" type="button" style="" aria-disabled="false">
                            <svg width="106" height="45" viewBox="0 0 106 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M104.977 24.8528C106.148 23.6812 106.148 21.7817 104.977 20.6101L85.8848 1.51824C84.7132 0.346668 82.8137 0.346668 81.6422 1.51824C80.4706 2.68982 80.4706 4.58931 81.6422 5.76088L98.6127 22.7314L81.6422 39.702C80.4706 40.8736 80.4706 42.7731 81.6422 43.9446C82.8137 45.1162 84.7132 45.1162 85.8848 43.9446L104.977 24.8528ZM0.607422 25.7314H102.855V19.7314H0.607422V25.7314Z" fill="#2E0548" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="first-slide" data-vars-index="1" class="block">
                    <div class="title-container">
                        <h1>Qual é a sua prioridade nesse momento?</h1>
                        <p>Para começar, conte um pouco sobre os seus planos para o futuro.</p>
                    </div>
                    <div class="input-container">
                        <input name="radiogrp" type="radio" id="radio-1">
                        <label for="radio-1">Quero limpar o meu nome (não aparecer mais como negativado)</label>
                    </div>
                    <div class="input-container">
                        <input name="radiogrp" type="radio" id="radio-2">
                        <label for="radio-2">Pretendo ter um cartão de crédito</label>
                    </div>
                    <div class="input-container">
                        <input name="radiogrp" type="radio" id="radio-3">
                        <label for="radio-3">Gostaria de voltar a ter crédito no mercado</label>
                    </div>
                    <div class="input-container">
                        <input name="radiogrp" type="radio" id="radio-4">
                        <label for="radio-4">Quero comprar um carro ou conquistar a casa própria</label>
                    </div>
                    <div class="input-container">
                        <input name="radiogrp" type="radio" id="radio-5">
                        <label for="radio-5">Minha meta é começar a investir meu dinheiro</label>
                    </div>
                </div>

                <div id="second-slide" data-vars-index="2" class="block">
                    <img class="img-slide2" alt="renda mesal" data-lazy="<?= get_template_directory_uri() ?>/images/calculadora-dividas/CALCULADORA-INTERNO-1.gif">
                    <div class="title-container2">
                        <h1>Qual é a sua renda mensal atual em média?</h1>
                        <p>Some todos os valores que você recebe por mês, em média. Pode ser um valor aproximado caso não saiba.</p>
                        <input class="text-box-calc" id="renda-mensal" type="text" placeholder="digite aqui (ex: 1050)" onfocus="this.placeholder = ''" onblur="this.placeholder = 'digite aqui (ex: 1050)'">
                    </div>
                </div>

                <div id="third-slide" data-vars-index="3" class="block">
                    <div class="title-container2">
                        <h1>Quanto em média você gasta por mês com custos fixos?</h1>
                        <p>São aquelas contas que você precisa pagar todos os meses, como o aluguel, água, luz, internet etc. </p>
                        <input class="text-box-calc" id="gastos-fixos" type="text" placeholder="digite aqui (ex: 1050)" onfocus="this.placeholder = ''" onblur="this.placeholder = 'digite aqui (ex: 1050)'">
                    </div>
                    <div class="answers" id="ans-gastosfixos"></div>
                </div>

                <div id="fourth-slide" data-vars-index="4" class="block">
                    <img class="img-slide4" alt="renda mesal" data-lazy="<?= get_template_directory_uri() ?>/images/calculadora-dividas/CALCULADORA-INTERNO-3.gif">
                    <div class="title-container2">
                        <h1>Quantas dívidas você tem em atraso hoje? </h1>
                        <input class="text-box-calc" id="dividas-atraso" type="text" placeholder="digite aqui (ex: 12)" onfocus="this.placeholder = ''" onblur="this.placeholder = 'digite aqui (ex: 12)'">
                    </div>
                </div>

                <div id="fifth-slide" data-vars-index="5" class="block">
                    <img class="img-slide5" alt="renda mesal" data-lazy="<?= get_template_directory_uri() ?>/images/calculadora-dividas/CALCULADORA-INTERNO-4.gif">
                    <div class="title-container2">
                        <h1>Qual o valor total estimado das suas dívidas?</h1>
                        <p>Estamos perguntando pois queremos te ajudar a economizar dinheiro e a negociar as suas dívidas.</p>
                        <input class="text-box-calc" id="valor-total-dividas" type="text" placeholder="digite aqui (ex: 1050)" onfocus="this.placeholder = ''" onblur="this.placeholder = 'digite aqui (ex: 1050)'">
                    </div>
                </div>

                <div id="sixth-slide" data-vars-index="6" class="block">
                    <img class="img-slide5" alt="renda mesal" data-lazy="<?= get_template_directory_uri() ?>/images/calculadora-dividas/CALCULADORA-INTERNO-5_semmargem.gif">
                    <div class="title-container2">
                        <h1>Quanto você poderia separar todos os meses para pagar as suas dívidas?</h1>
                        <input class="text-box-calc" id="pagar-dividas" type="text" placeholder="digite aqui (ex: 1050)" onfocus="this.placeholder = ''" onblur="this.placeholder = 'digite aqui (ex: 1050)'">
                    </div>
                    <div class="answers" id="ans-dividas"></div>
                </div>

                <div id="first-result-slide" data-vars-index="7" class="block">
                    <!-- resultado primeiro bloco -->
                </div>

                <div id="sec-result-slide" data-vars-index="8" class="block">
                    <!-- resultado segundo bloco -->
                </div>

                <div id="third-result-slide" data-vars-index="9" class="block">
                    <!-- resultado terceiro bloco -->
                </div>

                <div class="final-slide" data-vars-index="10">
                    <h2>Vamos marcar o dia 1 da sua meta de sair das dívidas? </h2>
                    <p>Clique aqui para adicionar ao seu calendário e te lembrar de fazer as suas negociações e acordos.</p>
                    <a target="_blank" href="https://calendar.google.com/calendar" class="nubank-deal">Coloque na sua agenda</a>
                    <h2>Ajude a quebrar o tabu das dívidas e compartilhe essa calculadora de metas financeiras com mais pessoas.</h2>
                    <p>Você já viu que com organização e planejamento é possível sair das dívidas. Volte quando puder para continuar acompanhando o seu progresso financeiro e vendo seus resultados, ok?</p>
                    <div class="doit-again">
                        <a id="back-to-start" class="nubank-deal">Faça novamente</a>
                        <a href="" class="nubank-deal share">
                            <svg width="47" height="51" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.3082 50.9995C36.287 50.6786 35.2122 50.4742 34.2537 50.0171C30.6254 48.2864 28.6773 44.0223 29.6662 40.0771C29.8032 39.532 29.6735 39.3115 29.2007 39.0681C24.9406 36.8747 20.6958 34.6534 16.4454 32.4402C16.3018 32.3652 16.157 32.2928 15.9768 32.2011C14.0245 34.7618 11.4776 36.0942 8.27344 35.9257C6.03326 35.8074 4.09676 34.8968 2.53758 33.2578C-0.826649 29.7221 -0.844906 24.3653 2.49315 20.7652C5.6462 17.3652 11.6005 16.7569 15.4437 21.0879L29.9602 12.1979C28.0851 7.11487 30.957 2.23377 34.8702 0.660427C39.0475 -1.01884 43.5656 0.579282 45.8593 4.56282C47.9717 8.22984 47.0838 13.0837 43.7932 15.8723C40.5799 18.5978 35.1794 18.9459 31.492 14.7642C31.3623 14.8404 31.2248 14.9184 31.0897 15.0014C26.5363 17.788 21.9817 20.573 17.4259 23.3563C17.0826 23.565 16.9962 23.7335 17.1356 24.1324C17.6833 25.7002 17.805 27.3014 17.3662 28.9249C17.3194 29.0984 17.2944 29.278 17.2506 29.4985L31.0434 36.6839C31.6946 36.0645 32.2801 35.4122 32.9556 34.8789C38.1498 30.7807 46.0072 34.0681 46.8951 40.6959C47.5713 45.7406 44.3172 50.141 39.3487 50.9084C39.2546 50.9305 39.1624 50.9603 39.0731 50.9976L37.3082 50.9995Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>