$(document).ready(function(){
    $('#calculadora-dividas').slick({
        arrows: true,
        dots: true,
        infinite: false,
        swipe: false,
        speed: 150,
        lazyLoad: "ondemand"
    });

    let slider = $("#calculadora-dividas");
    let active = slider.find(".slick-active button");
    let heroSlide = document.querySelector('#calculadora-dividas');
    let outerSlide = document.querySelector('.carousel-container');
    let slickDots = document.querySelector('.slick-dots');
    let slickPrev = document.querySelector('.slick-prev');
    let slickNext = document.querySelector('.slick-next');

    slickNext.style.visibility = "hidden"

    let curDot, prevDot = 0

    $('.slick-dots li button').on('click', function(e){
        e.stopPropagation(); 
    });

    active.addClass("change-color");

    slider.on("beforeChange", function(ev,slick,current,next){
        prevDot = slider.find(".slick-active button");
    })

    slider.on("afterChange", function(ev, slick, current, next) {

        if(curDot > current){
            prevDot.removeClass("change-color")
        }else{
            let active = slider.find(".slick-active button");
            active.addClass("change-color");    
        }

        if(current < 1){
            heroSlide.style.backgroundColor = "#2E0548";
            outerSlide.style.backgroundColor = "#2E0548";
            slickDots.style.visibility = "hidden"
            slickPrev.style.visibility = "hidden"
            slickNext.style.visibility = "hidden"
            slickPrev.classList.remove('next-slide')
            slickNext.classList.remove('next-slide')
        }
        else if(current > 6){
            heroSlide.style.backgroundColor = "#2E0548";
            outerSlide.style.backgroundColor = "#2E0548";
            slickDots.style.visibility = "hidden"
            if(current > 9){
                slickNext.style.visibility = "hidden";
                slickPrev.style.visibility = "hidden";
            }
        }
        else{
            heroSlide.style.backgroundColor = "#f4f4f4";
            outerSlide.style.backgroundColor = "#f4f4f4";
            slickDots.style.visibility = "visible"
            slickPrev.style.visibility = "visible"
            slickPrev.classList.add('next-slide')
            slickNext.classList.add('next-slide')
      }
      curDot = current
    })

    let gastosFixos
    let rendaMensal, dividasAtrasadas, valorTotalDividas
    let dividas

    let ansGastosFixos = "";


    // $("#skip-btn").click(() => {

    //     $(".slick-next.slick-arrow").prop('disabled', true);
        // document.querySelector('#skip-btn').classList.add('disabled')
    //     document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')
        
    //     let $curSlide = $('.slick-slide.slick-current.slick-active')

    //     if($curSlide.attr('data-slick-index') == "1"){
    //         $('#calculadora-dividas').slick('slickGoTo',2)
    //     } else  if($curSlide.attr('data-slick-index') == "4"){
    //         $('#calculadora-dividas').slick('slickGoTo',5)
    //     }

    // })

    // Fun????es Relaciondas ao bot??o esquerdo do carrossel
    $(".slick-prev.slick-arrow").click(() => {

        rendaMensal = document.getElementById("renda-mensal").value
        gastosFixos = document.getElementById('gastos-fixos').value
        dividasAtrasadas = document.getElementById('dividas-atraso').value
        pagarDividas = document.getElementById('pagar-dividas').value
        valorTotalDividas = document.getElementById("valor-total-dividas").value

        let $curSlide = $('.slick-slide.slick-current.slick-active')


        if($curSlide.attr('data-slick-index') != "0" || $curSlide.attr('data-slick-index') !=  "7" || $curSlide.attr('data-slick-index') !=  "8" || $curSlide.attr('data-slick-index') !=  "9"){
            document.querySelector('.carousel-container').classList.remove("presentation")
            document.querySelector('.carousel-container').classList.add("base")
          
        }else{
            document.querySelector('.carousel-container').classList.remove("base")
            document.querySelector('.carousel-container').classList.add("presentation")    
        }
      
        // 1,2,4,5
        if($curSlide.attr('data-slick-index') != '1' || $curSlide.attr('data-slick-index') != '2' ||  $curSlide.attr('data-slick-index') != '4' ||  $curSlide.attr('data-slick-index') == '5'){
            // document.querySelector('#skip-btn').classList.remove('disabled')
        }else{
            // document.querySelector('#skip-btn').classList.add('disabled')
        }

       
        // 2,3
        if($curSlide.attr('data-slick-index') == '2' || $curSlide.attr('data-slick-index') == '3' || $curSlide.attr('data-slick-index') == '6'){
            $(".slick-next.slick-arrow").prop('disabled', true);
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')

        }else{
            $(".slick-next.slick-arrow").prop('disabled', false);
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.remove('disabled')
        }


        if(rendaMensal.length != 0 || gastosFixos.length != 0 || dividasAtrasadas.length != 0 || pagarDividas.length != 0 || valorTotalDividas.length != 0 ){
            $(".slick-next.slick-arrow").prop('disabled', false);
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.remove('disabled')
        }

    })


      // Fun????es Relacionadas ao bot??o  direito do carrossel
    $(".slick-next.slick-arrow").click(function(){
    
        // document.getElementById("renda-mensal").value = " "
        // document.getElementById('gastos-fixos').value = " "
        // document.getElementById('dividas-atraso').value = " "
        // document.getElementById('pagar-dividas').value = " "
        // document.getElementById("valor-total-dividas").value = " "

        let $curSlide = $('.slick-slide.slick-current.slick-active')

        //console.log($curSlide.attr('data-slick-index'))

        // if($curSlide.attr('data-slick-index') != "0"){
        //     $(".slick-next.slick-arrow").css('bottom', '15px')
        // }

        if($curSlide.attr('data-slick-index') != "0" || $curSlide.attr('data-slick-index') !=  "7"){
            document.querySelector('.carousel-container').classList.remove("presentation")
            document.querySelector('.carousel-container').classList.add("base")
        }else{
            document.querySelector('.carousel-container').classList.remove("base")
            document.querySelector('.carousel-container').classList.add("presentation")
        }

        // 2,3,5,6
        if($curSlide.attr('data-slick-index') == "2" || $curSlide.attr('data-slick-index') == "3" ||  $curSlide.attr('data-slick-index') == "5"
        ||  $curSlide.attr('data-slick-index') == "6"){
            $(".slick-next.slick-arrow").prop('disabled', true);
            // document.querySelector('#skip-btn').classList.add('disabled')
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')

        }
        else{

            $(".slick-next.slick-arrow").prop('disabled', false);
            // document.querySelector('#skip-btn').classList.remove('disabled')
        }

        if($curSlide.attr('data-slick-index') == "7" || $curSlide.attr('data-slick-index') == "8" || $curSlide.attr('data-slick-index') == "9"){
            // document.querySelector('#skip-btn').classList.add('disabled')
        }
        
        // if($curSlide.attr('data-slick-index') == '4')  document.getElementById('ans-gastosfixos').innerHTML = " "

        // if($curSlide.attr('data-slick-index') == '7'){
        //     finalAnswer = []
        //     document.getElementById('ans-dividas').innerHTML = " "

        // }
        
    });

    $("#renda-mensal").keyup(async() => {
        rendaMensal = await document.getElementById("renda-mensal").value
        if(rendaMensal.length != 0){
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.remove('disabled')
            $(".slick-next.slick-arrow").prop('disabled', false);
        }else{
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')
            $(".slick-next.slick-arrow").prop('disabled', true);
        }
    })
    
    $("#gastos-fixos").keyup(function() {

        rendaMensal = parseInt(document.getElementById("renda-mensal").value, 10)
        gastosFixos = parseInt(document.getElementById('gastos-fixos').value, 10)

        if(gastosFixos.length == 0){
            ansGastosFixos = ""
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')
            $(".slick-next.slick-arrow").prop('disabled', true);
        }else{
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.remove('disabled')
            $(".slick-next.slick-arrow").prop('disabled', false);
            if(gastosFixos >= rendaMensal){

            
                /*  Opa, infelizmente voc?? est?? gastando mais do que ganha. 
                Vamos te ajudar a lidar com isso: veja <a href="https://blog.nubank.com.br/tipos-de-orcamento-para-organizar-seu-dinheiro/">aqui</a> 
                um plano de organiza????o financeira que pode funcionar.*/
                ansGastosFixos = `
                <img class="img-slide2" alt="renda mesal" src="../wp-content/themes/nubankv2/images/calculadora-dividas/CALCULADORA-INTERNO-2.gif" />
                <p>
                Opa, fique atento: voc?? est?? gastando mais do que ganha. Vamos te ajudar a lidar com isso: <a target="_blank" href="https://blog.nubank.com.br/tipos-de-orcamento-para-organizar-seu-dinheiro/">veja aqui</a> um plano de organiza????o financeira que pode funcionar.
                </p>`

        
            }else if(gastosFixos >= 0.8*rendaMensal ){
    
                /*
                    Voc?? j?? consegue gastar menos do que ganha! S?? que mais de 80% da sua renda est?? comprometida. 
                    Para te ajudar a se planejar melhor, veja <a href=""https://blog.nubank.com.br/tipos-de-orcamento-para-organizar-seu-dinheiro/>aqui</a>
                    um plano de organiza????o financeira que pode funcionar. 
    
                */
    
                ansGastosFixos = `
                <img class="img-slide2" alt="renda mesal" src="../wp-content/themes/nubankv2/images/calculadora-dividas/CALCULADORA-INTERNO-2.gif" />
                <p>
                Voc?? consegue gastar menos do que ganha, e isso j?? ?? um bom come??o! S?? que mais de 80% da sua renda est?? comprometida. <a target="_blank" href="https://blog.nubank.com.br/tipos-de-orcamento-para-organizar-seu-dinheiro/">Veja aqui</a> um plano de organiza????o financeira.         
                </p>`
        
            }else{
                ansGastosFixos = `
                <img class="img-slide2" alt="renda mesal" src="../wp-content/themes/nubankv2/images/calculadora-dividas/CALCULADORA-INTERNO-2.gif" />
                <p>
                    Boa, voc?? est?? no caminho certo, gastando menos de 80% da sua renda. 
                    Controlar os gastos ?? o passo mais importante para sair das d??vidas. 
                    Bora virar esse jogo!                 
                </p>`
            }

        }
    
        document.getElementById('ans-gastosfixos').innerHTML = ansGastosFixos
    })
    

    $("#dividas-atraso").keyup(async () => {

        dividasAtrasadas = document.getElementById('dividas-atraso').value

        if(dividasAtrasadas.length == 0){
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')
            $(".slick-next.slick-arrow").prop('disabled', true);
        }else{
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.remove('disabled')
            $(".slick-next.slick-arrow").prop('disabled', false);
        }

    })

    let ansDividas = "";
    
    $("#pagar-dividas").keyup(async () => {

        valorTotalDividas = await document.getElementById("valor-total-dividas").value

        if(valorTotalDividas.length == 0){
            valorTotalDividas = " "
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')
            $(".slick-next.slick-arrow").prop('disabled', true);

        }else{
            $(".slick-next.slick-arrow").prop('disabled', false);
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.remove('disabled')
        }
        
    
    })

    $("#valor-total-dividas").keyup( async () => {

        dividas = await document.getElementById('valor-total-dividas').value

        rendaMensal = parseInt(document.getElementById("renda-mensal").value,10)
        gastoFixo = parseInt(document.getElementById("gastos-fixos").value,10)
        valorTotalDividas = parseInt(document.getElementById("valor-total-dividas").value,10)

        if(dividas.length == 0){
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.add('disabled')
            $(".slick-next.slick-arrow").prop('disabled', true);
        }else{
            $(".slick-next.slick-arrow").prop('disabled', false);
            document.getElementsByClassName('slick-next slick-arrow next-slide')[0].classList.remove('disabled')
        }

        document.getElementById('ans-dividas').innerHTML = ansDividas

        // results page
        
        firstResultBlock = ""
        secResultBlock = ""
        thirdResultBlock = ""

        if(valorTotalDividas >= rendaMensal){
            firstResultBlock = `
            <h2>Sua d??vida ?? maior do que sua renda: aten????o</h2>
            <img src="../wp-content/themes/nubankv2/images/calculadora-dividas/CAPA-CALCULADORA-2_semmargem.gif" alt="">
            <p>O valor das suas d??vidas ?? muito maior do que voc?? conseguiria pagar por enquanto. <strong>Mas existem solu????es</strong>. A melhor maneira de manter as finan??as sob controle ?? ter uma vis??o clara sobre elas e <strong>come??ar a agir.</strong></p>`
            secResultBlock = `
            <h2>Voc?? n??o precisa lidar com a d??vida sozinho</h2>
            <p>Fale com as pessoas ou institui????es com quem voc?? est?? em d??bito. Entenda as possibilidades de acordo e anote tudo.</p>
            <p>Em quantas vezes voc?? pode pagar? 
            Qual o valor m??nimo de cada parcela? Qual juros voc?? vai pagar?
            Algumas institui????es, como o Nubank, <strong> permitem negocia????es diretamente pelo app.</strong></p>
            <h2>Tamb??m selecionamos algumas dicas para essas defini????es, veja abaixo:</h2>
            <a target="_blank" href="https://blog.nubank.com.br/endividamento-e-superendividamento/">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.9971 2.99998C75.9971 1.34313 74.6539 -1.4673e-05 72.9971 -1.67804e-05L45.9971 -1.30715e-05C44.3402 -1.57689e-05 42.9971 1.34313 42.9971 2.99998C42.9971 4.65684 44.3402 5.99998 45.9971 5.99999L69.9971 5.99998L69.9971 30C69.9971 31.6568 71.3402 33 72.9971 33C74.6539 33 75.9971 31.6568 75.9971 30L75.9971 2.99998ZM5.12132 75.1184L75.1184 5.12131L70.8758 0.878664L0.87868 70.8758L5.12132 75.1184Z" fill="#F4F4F4"/>
                </svg>
                <p>Endividamento e superendividamento: o que significa cada um?</p>
            </a>
            <a target="_blank" href="https://blog.nubank.com.br/renegociar-dividas-as-5-maiores-duvidas-respondidas/">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.9971 2.99998C75.9971 1.34313 74.6539 -1.4673e-05 72.9971 -1.67804e-05L45.9971 -1.30715e-05C44.3402 -1.57689e-05 42.9971 1.34313 42.9971 2.99998C42.9971 4.65684 44.3402 5.99998 45.9971 5.99999L69.9971 5.99998L69.9971 30C69.9971 31.6568 71.3402 33 72.9971 33C74.6539 33 75.9971 31.6568 75.9971 30L75.9971 2.99998ZM5.12132 75.1184L75.1184 5.12131L70.8758 0.878664L0.87868 70.8758L5.12132 75.1184Z" fill="#F4F4F4"/>
                </svg>
                <p>Renegociar d??vidas: as 5 maiores d??vidas respondidas </p>
            </a>
            <a target="_blank" href="https://blog.nubank.com.br/posso-usar-fgts-para-pagar-dividas/">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.9971 2.99998C75.9971 1.34313 74.6539 -1.4673e-05 72.9971 -1.67804e-05L45.9971 -1.30715e-05C44.3402 -1.57689e-05 42.9971 1.34313 42.9971 2.99998C42.9971 4.65684 44.3402 5.99998 45.9971 5.99999L69.9971 5.99998L69.9971 30C69.9971 31.6568 71.3402 33 72.9971 33C74.6539 33 75.9971 31.6568 75.9971 30L75.9971 2.99998ZM5.12132 75.1184L75.1184 5.12131L70.8758 0.878664L0.87868 70.8758L5.12132 75.1184Z" fill="#F4F4F4"/>
                </svg>
                <p>Posso usar o saque do FGTS para pagar d??vidas? </p>
            </a>
            `
            thirdResultBlock = `
            <h2>Um dinheiro para as d??vidas</h2>
            <p>No seu caso, ?? importante <span>discutir a situa????o com quem voc?? est?? em d??vida</span>, mesmo que seja para pagar em parcelas pequenas.</p>
            <p>Se o valor que voc?? pode pagar n??o chegar ao que seus credores esperam, aguarde mais um pouco at?? que sua renda aumente, ou que os gastos fixos diminuam <span>?? importante n??o deixar que as d??vidas cres??am</span>,  e sempre buscar espa??o nas despesas para incluir, assim que poss??vel, os parcelamentos.</p>
            <img src="../wp-content/themes/nubankv2/images/calculadora-dividas/CAPA-CALCULADORA-5.gif" alt="">`

        }
        else if(valorTotalDividas < rendaMensal && gastoFixo >= rendaMensal*0.8 ){
            firstResultBlock = `
            <h2>As d??vidas est??o sob controle ??? mas d?? pra melhorar!</h2>
            <img src="../wp-content/themes/nubankv2/images/calculadora-dividas/CAPA-CALCULADORA-3_semmargem.gif" alt="">
            <p>Parece que <strong>o valor das d??vidas cabe na sua renda mensal.</strong> Mas, mesmo assim, n??o ?? sempre que sobra algum dinheiro dos gastos fixos para quit??-la, n??o ??? D?? pra resolver o seu problema com um <strong>pouco de organiza????o.</strong> </p>`
            secResultBlock = `
            <h2>Voc?? n??o precisa lidar com a d??vida sozinho</h2>
            <p>Fale com as pessoas ou institui????es com quem voc?? est?? em d??bito. <span>Entenda as possibilidades de acordo.</span></p>
            <p>Em quantas vezes voc?? pode pagar? 
            Qual o valor m??nimo de cada parcela? Qual juros voc?? vai pagar?
            Algumas institui????es, como o Nubank, <strong> permitem negocia????es diretamente pelo app.</strong></p>
            <a target="_blank" href="https://blog.nubank.com.br/como-negociar-divida-cartao/">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.9971 2.99998C75.9971 1.34313 74.6539 -1.4673e-05 72.9971 -1.67804e-05L45.9971 -1.30715e-05C44.3402 -1.57689e-05 42.9971 1.34313 42.9971 2.99998C42.9971 4.65684 44.3402 5.99998 45.9971 5.99999L69.9971 5.99998L69.9971 30C69.9971 31.6568 71.3402 33 72.9971 33C74.6539 33 75.9971 31.6568 75.9971 30L75.9971 2.99998ZM5.12132 75.1184L75.1184 5.12131L70.8758 0.878664L0.87868 70.8758L5.12132 75.1184Z" fill="#F4F4F4"/>
                </svg>
                <p>Negociar d??vidas do cart??o de cr??dito: 5 dicas que v??o te ajudar</p>
            </a>
            <a target="_blank" href="https://blog.nubank.com.br/web-stories/5-duvidas-sobre-renegociar-dividas/">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.9971 2.99998C75.9971 1.34313 74.6539 -1.4673e-05 72.9971 -1.67804e-05L45.9971 -1.30715e-05C44.3402 -1.57689e-05 42.9971 1.34313 42.9971 2.99998C42.9971 4.65684 44.3402 5.99998 45.9971 5.99999L69.9971 5.99998L69.9971 30C69.9971 31.6568 71.3402 33 72.9971 33C74.6539 33 75.9971 31.6568 75.9971 30L75.9971 2.99998ZM5.12132 75.1184L75.1184 5.12131L70.8758 0.878664L0.87868 70.8758L5.12132 75.1184Z" fill="#F4F4F4"/>
                </svg>
                <p>D??vidas: como conseguir desconto, como negociar e outras d??vidas respondidas</p>
            </a>
            `
            thirdResultBlock = `
            <h2>A regra dos 15%</h2>
            <p>A melhor forma de sair do vermelho, no seu caso, <span>?? ajustar os gastos mensais para fazer sobrar cerca de 15% da renda para isso.</span> Ou seja, se voc?? ganha R$1000, o ideal seria separar R$150 para as dividas. </p>
            <p>Depois de negociar com os credores, entenda <span>quais s??o os gastos que voc?? pode abrir m??o</span> por um tempo at?? encerrar o problema. ??s vezes d?? pra tirar uma TV por assinatura, ou talvez um plano de academia que voc?? n??o esteja usando.</p>
            <p>Como voc?? tem algum espa??o no or??amento para quitar a d??vida, <span>veja as concess??es como algo tempor??rio,</span> que depois podem retornar ?? sua vida. Ah! E uma vida no azul, o que ?? muito melhor.</p>
            <img src="../wp-content/themes/nubankv2/images/calculadora-dividas/CAPA-CALCULADORA-5.gif" alt="">
            `


        }else{
            firstResultBlock = `
            <h2>D?? para ficar livre das d??vidas!</h2>
            <img src="../wp-content/themes/nubankv2/images/calculadora-dividas/CAPA-CALCULADORA-4-v2_semmargem.gif" alt="">
            <p>J?? d?? pra ver a luz no fim do t??nel. Voc?? consegue ter uma <strong>boa quantidade de dinheiro reservada para quitar as d??vidas</strong>, e isso ?? ??timo! A quest??o aqui ?? priorizar. Se voc?? tem condi????es financeiras de pagar e sair do vermelho, <strong>n??o perca tempo: fa??a isso j??.</strong></p>`
            secResultBlock = `
            <h2>Voc?? n??o precisa lidar com a d??vida sozinho</h2>
            <p>Fale com as pessoas ou institui????es com quem voc?? est?? em d??bito. <span>Entenda as possibilidades de acordo.</span></p>
            <p>Em quantas vezes voc?? pode pagar? 
            Qual o valor m??nimo de cada parcela? Qual juros voc?? vai pagar?
            Algumas institui????es, como o Nubank, <strong> permitem negocia????es diretamente pelo app.</strong></p>
            <h2>Tamb??m selecionamos algumas dicas para essas defini????es, veja abaixo:</h2>
            <a target="_blank" href="https://blog.nubank.com.br/web-stories/seu-cerebro-te-sabota-na-hora-de-juntar-dinheiro/">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.9971 2.99998C75.9971 1.34313 74.6539 -1.4673e-05 72.9971 -1.67804e-05L45.9971 -1.30715e-05C44.3402 -1.57689e-05 42.9971 1.34313 42.9971 2.99998C42.9971 4.65684 44.3402 5.99998 45.9971 5.99999L69.9971 5.99998L69.9971 30C69.9971 31.6568 71.3402 33 72.9971 33C74.6539 33 75.9971 31.6568 75.9971 30L75.9971 2.99998ZM5.12132 75.1184L75.1184 5.12131L70.8758 0.878664L0.87868 70.8758L5.12132 75.1184Z" fill="#F4F4F4"/>
                </svg>
                <p>Seu c??rebro te sabota na hora de juntar dinheiro?</p>
            </a>
            <a target="_blank" href="https://blog.nubank.com.br/economizar-dinheiro-5-habitos-que-atrapalham/">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.9971 2.99998C75.9971 1.34313 74.6539 -1.4673e-05 72.9971 -1.67804e-05L45.9971 -1.30715e-05C44.3402 -1.57689e-05 42.9971 1.34313 42.9971 2.99998C42.9971 4.65684 44.3402 5.99998 45.9971 5.99999L69.9971 5.99998L69.9971 30C69.9971 31.6568 71.3402 33 72.9971 33C74.6539 33 75.9971 31.6568 75.9971 30L75.9971 2.99998ZM5.12132 75.1184L75.1184 5.12131L70.8758 0.878664L0.87868 70.8758L5.12132 75.1184Z" fill="#F4F4F4"/>
                </svg>
                <p>5 h??bitos que n??o te deixam economizar dinheiro</p>
            </a>`
            thirdResultBlock = `
            <h2>Botando a casa em ordem</h2>
            <p>Pode ser que demore um pouco e que voc?? precise empenhar um valor por mais tempo do que gostaria. <span>Mas acredite: vai valer a pena.</span> Pagar juros vai consumindo dinheiro que poderia estar sendo investido e se multiplicando.</p>
            <p>Lembre-se de que o recomendado ?? <span>separar no m??ximo 15% da sua renda m??dia para pagar as d??vidas.</span> Ou seja, se voc?? ganha R$1000, o ideal seria separar R$150 para isso. <span>Por que?</span> Se voc?? comprometer muito dos seus ganhos, corre o risco de n??o conseguir pagar as parcelas caso tenha algum imprevisto. </p>
            <p>No caso de sobrar mais um pouquinho de dinheiro, <span>guarde em sua reserva de emerg??ncia</span> at?? que seja poss??vel quitar algumas parcelas ??? ou at?? mesmo conseguir um bom desconto no valor total da d??vida.</p>
            <img src="../wp-content/themes/nubankv2/images/calculadora-dividas/CAPA-CALCULADORA-5.gif" alt="">`


        }

        nubankDebt = `
        <h2>Sua d??vida ?? com o Nubank?</h2>
        <p>Pelo aplicativo do Nu voc?? consegue ver o valor da sua d??vida e as condi????es dispon??veis para voc??, al??m de fazer simula????es sem precisar falar com atendentes. <strong>Assim voc?? tem seguran??a e autonomia para regularizar suas finan??as.</strong></p>
        <a class="nubank-deal" href="https://link.nubank.com.br/UrNeoXs95kb" class="nubank-deal">veja AS CONDI????ES no app</a>
        <p>Temos tamb??m um time preparado para te ajudar! Entre em contato pelo chat, telefone ou e-mail</p>`


        document.getElementById('first-result-slide').innerHTML = firstResultBlock
        document.getElementById('sec-result-slide').innerHTML = secResultBlock
        document.getElementById('third-result-slide').innerHTML = thirdResultBlock + nubankDebt
        

    })

    $("#pagar-dividas").keyup(async () => {

        dividas = parseInt( await document.getElementById('pagar-dividas').value, 10)
        rendaMensal = parseInt( await document.getElementById("renda-mensal").value,10)
        ansDividas = ""

        if(dividas >= 0.15*rendaMensal){
            ansDividas = `
            <p> 
            O ideal ?? que voc?? n??o comprometa mais do que 15% da sua renda.
            Exemplo: se voc?? ganha R$ 1.000, separe no m??ximo R$ 150 para o objetivo de sair do vermelho. 
            </p>`
        }
        

        document.getElementById('ans-dividas').innerHTML = ansDividas
        
    
    })


    // $(".text-box-calc").maskMoney({
    //     prefix: "R$ ",
    //     decimal: ",",
    //     thousands: "."
    // });

    $("#back-to-start").click(function(e){

        e.preventDefault();
        $('#calculadora-dividas').slick('slickGoTo', 0);
        slickNext.style.visibility = "visible"
        $(".slick-next.slick-arrow").prop('disabled', false);

        document.getElementById("renda-mensal").value = ""
        document.getElementById('gastos-fixos').value = ""
        document.getElementById('dividas-atraso').value = ""
        document.getElementById('pagar-dividas').value = ""
        document.getElementById("valor-total-dividas").value = ""

        let slickDots = document.querySelector('.slick-dots li');
        // $.each( slickDots, function(e){
        //     e.removeClass("change-color")
        // });

        $(".slick-dots li button").removeClass("change-color");

    })

    $("#next-hero").click(function(e){

        let slickPrev = document.querySelector('.slick-prev');
        let slickNext = document.querySelector('.slick-next');

        e.preventDefault();
        $('#calculadora-dividas').slick('slickGoTo', 1);

        slickNext.style.visibility = "visible"
        $(".slick-next.slick-arrow").prop('disabled', false);

        slickDots.style.visibility = "visible"
        slickPrev.style.visibility = "visible"
        slickPrev.classList.add('next-slide')
        slickNext.classList.add('next-slide')




    })

});