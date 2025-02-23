<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Elementos de un sistema de salarios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 El sistema de salarios es uno de los pilares fundamentales en la gestión de recursos humanos dentro de cualquier organización, pero para poder tener conocimiento del tema, es necesario comprender primero los elementos que lo componen, tanto para garantizar el cumplimiento de la legislación laboral como para crear un entorno laboral equitativo y motivador. 

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los salarios representan la compensación económica que recibe un trabajador por su labor e incluyen una serie de conceptos adicionales que, según la legislación colombiana, se deben tener en cuenta para asegurar que los trabajadores reciban su remuneración de manera justa y conforme a la Ley.
        p(data-aos="fade-left") En este tema, se abordan los elementos que constituyen un sistema de salarios, desde las distintas modalidades de pago hasta los beneficios y descuentos permitidos. Estos elementos incluyen tanto los conceptos legales que deben ser incluidos en el salario, como aquellos que, a pesar de ser importantes, no forman parte de este. 
        p(data-aos="fade-left") Al comprender estos aspectos, se  podrá gestionar los pagos de manera adecuada, garantizando tanto el cumplimiento de las normativas laborales como el bienestar de los trabajadores.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Salario y modalidades de salario 

    p.mb-5 La administración del salario y sus modalidades constituye un eje central en las relaciones laborales, garantizando la compensación justa y equitativa para los trabajadores.

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Salario y modalidades de salario 
            p.mb-4(data-aos="fade-right") En el PDF Salario y modalidades de salario, se exploran conceptos fundamentales, como el salario mínimo mensual legal vigente, el salario integral y el salario a destajo, analizando sus características, beneficios e implicaciones para empleadores y empleados. Estos enfoques permiten comprender cómo se regula la remuneración en Colombia, promoviendo la equidad y el cumplimiento de los derechos laborales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo.</strong> Salario y modalidades de salario.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Elementos que constituyen salario     

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El salario de un trabajador no se limita únicamente a la remuneración básica que se recibe de manera quincenal o mensual. Existen otros pagos adicionales que, por Ley, deben considerarse como parte del salario, como aquellos generados por la prestación de servicios fuera de la jornada laboral regular o en días de descanso obligatorio, como domingos y festivos. Estos pagos adicionales son conocidos como horas extras, trabajo suplementario y recargos dominicales o festivos.
        p(data-aos="fade-left") Las horas extras y los recargos son compensaciones que se deben abonar al trabajador en los casos en que este preste servicios más allá de su jornada habitual o en días establecidos como no laborables, tales como los domingos y días festivos. Estos pagos son considerados como salario y deben remunerarse con un porcentaje adicional al valor del salario ordinario. El Código Sustantivo del Trabajo establece: 

        .titulo-figura.mb-4
          h5 Tabla 1
          span Elementos considerados factor salario

    .row.mb-5.justify-content-center
      .col-lg-8 
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-3 Recargos y horas extras
                th.bg-color-3 Porcentaje
            tbody
              tr
                td Nocturno
                td 35 %
              tr
                td Dominical o festivo
                td 75 %
              tr
                td Hora extra diurna
                td 25 %
              tr
                td Hora dominical o festiva nocturna
                td 110 % (75 % + 35 %)
              tr
                td Hora extra diurna dominical o festiva
                td 100 % (75 % + 25 %)
              tr
                td Hora extra nocturna dominical o festiva
                td 150 % (75 % + 75 %)
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Es importante destacar que estos pagos forman parte del salario, lo que implica que deben ser incluidos en el cálculo de prestaciones sociales como cesantías, primas y vacaciones, así como en los aportes al sistema de seguridad social.
    
    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        p.mb-4 Recordemos los siguientes conceptos: 
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.tarjeta
              img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Recargos
                p.mb-0 Son los valores reconocidos al trabajador que labora en jornada nocturna (desde las 9:00 p. m. hasta las 6:00 a. m.) o en días que en términos generales no son laborables, como los domingos y festivos. 
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.tarjeta
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Horas extra
                p.mb-0 Son aquellas que se deben reconocer al trabajador cuando exceda la jornada máxima legal (8 horas diarias y 48 a la semana) o la pactada con el empleador. 
          
   
   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h2(data-aos="fade-left") Remuneración del descanso dominical
        .p-4.bg-color-2.mb-3(data-aos="fade-right")
          p.mb-0 El Artículo 172 del Código Sustantivo del Trabajo (CST), establece que el empleador debe otorgar a sus trabajadores un descanso dominical remunerado, el cual se considera parte del salario.  
        p.mb-0 Este descanso debe ser remunerado, según lo establecido en el Artículo 173 del mismo código, el cual detalla dos formas principales de compensación: 
    
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", alt="", data-aos="zoom-in")
    
    .justify-content-center
    
    p.mb-4 De esta manera, la Ley garantiza que los trabajadores tengan derecho a un descanso dominical, y que dicho descanso sea debidamente remunerado como parte de su salario.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El referido Artículo 173 del CST, establece que la remuneración del descanso dominical se perderá cuando el trabajador falte a una jornada laboral sin una justa causa, dentro de las causas justas se podrían señalar como: licencias laborales, suspensión por sanción disciplinaria. 

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Elementos que no constituyen un salario

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p El Artículo 128 del Código Sustantivo del Trabajo (CST), establece claramente los pagos que no deben considerarse como parte del salario. Estos pagos son aquellos que el empleador realiza de forma ocasional y por mera liberalidad, es decir, como un beneficio adicional que no forma parte de la contraprestación habitual por el trabajo prestado. 
        .p-4.bg-color-5.mb-3(data-aos="fade-right")
          p.mb-0 Este tipo de pagos no tiene la obligación de ser integrado al cálculo de prestaciones sociales, ni influye en el monto de los aportes al sistema de seguridad social, porque no se consideran parte del salario regular. Entre estos pagos se pueden incluir ciertos bonos extraordinarios, obsequios o cualquier otra gratificación que el empleador decida otorgar por cortesía o como un incentivo especial, sin que esto implique una obligación legal recurrente.
        
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", alt="", data-aos="zoom-in")

    p.mb-4 Es fundamental para empleadores y trabajadores entender la diferencia entre los conceptos que sí forman parte del salario y aquellos que no, para evitar malentendidos o problemas legales relacionados con el cálculo de prestaciones sociales y otros derechos laborales. Los siguientes no constituyen salario:

    .bg-full-width.bg-h85
      .px-4.px-md-5.py-4
        div
          .row.justify-content-between.align-items-center
            .col-lg-7(data-aos="fade-left").order-2
              ul.lista-ul--color
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Primas extralegales.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Bonificaciones o gratificaciones.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Participación de utilidades.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Excedentes en las empresas de economía solidaria.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Gastos de representación.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Medios de transporte.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Herramientas de trabajo.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Alimentación.
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | Vestuario.
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema1/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    p.mb-4 Otros elementos que no constituyen salario, son:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/15.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="9%" y="85.5%" numero="+")
                h5 01. Gratificaciones
                p Las gratificaciones son premios o incentivos entregados por el empleador, pero no se consideran parte del salario. Son pagos voluntarios, no obligatorios, que dependen de la decisión del empleador.
    
              .bg-color-white.box-shadow.p-3(x="23%" y="85.5%" numero="+")
                h5 02. Participación de utilidades
                p La participación en utilidades es un beneficio económico en función de las ganancias de la empresa. Este pago no se considera salario, dado que es un reparto de los excedentes económicos de la compañía.
    
              .bg-color-white.box-shadow.p-3(x="37%" y="85.5%" numero="+")
                h5 03. Alimentación
                p Los auxilios de alimentación, como los vales de comida, no se consideran salario. Son beneficios que el empleador otorga para cubrir necesidades básicas del trabajador, pero no forman parte de su remuneración directa.
    
              .bg-color-white.box-shadow.p-3(x="50%" y="85.5%" numero="+")
                h5 04. Gastos de representación
                p Los gastos de representación son costos que el empleador asume para que el trabajador pueda realizar su labor de manera eficiente. Estos incluyen gastos como viajes, comidas o eventos relacionados con la empresa, pero no se consideran parte del salario.
    
              .bg-color-white.box-shadow.p-3(x="64%" y="85.5%" numero="+")
                h5 05. Herramientas de trabajo
                p Las herramientas y equipos proporcionados por el empleador para realizar el trabajo, como computadoras, máquinas o materiales específicos, no son considerados salario. Son recursos necesarios para el desempeño laboral.
              
              .bg-color-white.box-shadow.p-3(x="78%" y="85.5%" numero="+")
                h5 06. Habitación o vestuario
                p La habitación proporcionada por el empleador o los uniformes de trabajo no son parte del salario. Son beneficios que facilitan el desempeño laboral, pero no se consideran como compensación económica.
    
              .bg-color-white.box-shadow.p-3(x="91.5%" y="85.5%" numero="+")
                h5 07. Medios de transporte
                p El transporte proporcionado por la empresa, como el uso de vehículos corporativos o el reembolso de gastos de transporte, no se considera salario. Es un apoyo logístico para facilitar la movilidad del trabajador.
              
    p.mb-4 Hablemos sobre el periodo del pago del salario:


    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Primera" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Primera
            p El Artículo 134 del Código Sustantivo del Trabajo (CST), establece que el salario debe ser pagado en períodos iguales y vencidos, utilizando la moneda oficial del Estado colombiano, es decir, en moneda legal. Esto implica que el salario debe entregarse de manera periódica, de forma que cada pago corresponda a un período ya cumplido de trabajo, y no por adelantado.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/16.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Segunda" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Segunda
            p El empleador y el trabajador pueden acordar entre ellos los períodos de pago, que generalmente son semanales, quincenales o mensuales, según lo que ambas partes consideren conveniente, siempre que se respeten los límites establecidos por la Ley.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/17.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Segunda" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Tercera
            p Pueden establecerse diferentes modalidades de pago, siempre dentro de los márgenes permitidos, pero siempre respetando que el salario se pague al final de cada período trabajado, en su totalidad y en la moneda legal correspondiente.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/18.png', alt='')
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este sistema garantiza que el trabajador reciba su remuneración conforme a lo pactado, y facilita la planificación financiera tanto para el trabajador como para el empleador, asegurando que se cumpla con las obligaciones laborales de manera oportuna.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Descuentos permitidos y no permitidos
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Durante la relación laboral, es común que surjan situaciones en las que se realicen descuentos sobre el salario del trabajador.
        .p-4.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 Existen ciertos descuentos que están establecidos por la Ley y que deben ser cumplidos obligatoriamente, como los correspondientes a aportes a la seguridad social, impuestos y parafiscales. 
        p Sin embargo, también es importante que el empleador respete los límites y las condiciones bajo las cuales pueden realizarse otros descuentos, los cuales solo pueden efectuarse en casos específicos y con la autorización expresa del trabajador.
        p.text-bold(data-aos="fade-right") Los descuentos no autorizados o realizados de manera indebida, pueden dar lugar a conflictos laborales, por lo que es crucial que el empleador se ajuste a las normativas vigentes y que el trabajador esté informado sobre sus derechos en cuanto a la remuneración y los posibles descuentos sobre su salario.
    
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/20.png", alt="", data-aos="zoom-in")

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Descuentos permitidos y no permitidos
            p.mb-4(data-aos="fade-right") Los descuentos permitidos y no permitidos en el salario de los trabajadores están claramente regulados por la legislación laboral colombiana para proteger sus derechos y garantizar el cumplimiento de las normativas. En el PDF <b>Descuentos permitidos y no permitidos</b>, se detalla qué deducciones pueden aplicarse legalmente al salario de los empleados, como los aportes a seguridad social y cuotas sindicales, así como las prohibiciones expresas sobre descuentos que afectan el bienestar económico de los trabajadores, salvo orden judicial. Este análisis proporciona un marco práctico para comprender los límites y requisitos en la gestión de deducciones salariales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo.</strong> Descuentos permitidos y no permitidos.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/21.png', alt='')
    
    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Auxilios 

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los auxilios son beneficios económicos adicionales que los empleadores otorgan a los trabajadores para ayudar a cubrir ciertos gastos relacionados con el desempeño de su trabajo, como la movilización o el uso de vehículos propios para actividades laborales. 
        p(data-aos="fade-left") Estos auxilios tienen un propósito específico y no se consideran parte del salario, lo que significa que no deben ser incluidos en el cálculo de aportes a la seguridad social, vacaciones, parafiscales u otros conceptos salariales. Sin embargo, deben ser tenidos en cuenta para la liquidación de prestaciones sociales (prima de servicios, cesantías e intereses sobre cesantías).

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Auxilio de transporte legal")
            p.mb-0 El auxilio de transporte legal es una prestación establecida por la Ley 15 de 1959, y tiene como objetivo subsidiar parte del costo que el trabajador incurre para trasladarse desde su residencia hasta el lugar de trabajo.
            p.mb-0 Este auxilio es obligatorio para los trabajadores que devengan hasta dos salarios mínimos legales vigentes (SMMLV) y que vivan a más de 1 kilómetro de distancia de su lugar de trabajo, tal como lo establece el Artículo 4 del Decreto 1258 de 1959.
            p.mb-0 El auxilio de transporte no aplica, por ejemplo, para los trabajadores que laboran bajo la modalidad de teletrabajo, dado que no necesitan trasladarse físicamente a las instalaciones de la empresa. 
            p.mb-0 El valor de este auxilio es actualizado anualmente, y para el año de 2025, quedó en $200.000, mediante los Decretos 1572 y 1573.

    
          .div(titulo="Auxilio de transporte extralegal")
            p.mb-0 El auxilio de transporte extralegal es aquel que el empleador otorga voluntariamente a sus trabajadores, incluso cuando la Ley no lo exige. 
            p.mb-0 Este tipo de auxilio se concede, por ejemplo, a los trabajadores que devengan más de dos SMMLV o cuando el empleador, por política interna de bienestar laboral o acuerdo individual o colectivo, decide proporcionar. 
            p.mb-0 El valor de este auxilio será el que las partes (empleador y trabajador) acuerden, y no está sujeto a una cifra específica determinada por la Ley.

    
          .div(titulo="Auxilio de rodamiento")
            p.mb-0 El auxilio de rodamiento es una prestación destinada a cubrir los gastos en los que incurre un trabajador al utilizar su vehículo para realizar actividades relacionadas con el trabajo o el cumplimiento de sus obligaciones laborales. 
            p.mb-0 Esto incluye gastos como el combustible, el desgaste de llantas y otros costos asociados al uso del vehículo en beneficio del empleador. 
            p.mb-0 El monto de este auxilio debe ser acordado entre el empleador y el trabajador, y no está determinado por una cantidad específica, sino que depende de las necesidades y acuerdos alcanzados entre ambas partes.

    
          .div(titulo="Protocolos de higiene")
            p Estrategias de limpieza y mantenimiento para mantener condiciones óptimas en la operación.
    
    p.mb-4 Estos auxilios, aunque no forman parte del salario, son beneficios que contribuyen al bienestar del trabajador, ayudando a cubrir ciertos gastos y mejorando las condiciones laborales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los auxilios de transporte y rodamiento, no son acumulables.

    #t_1_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.6] Aportes al sistema de seguridad social

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Todo empleador tiene la obligación legal de realizar aportes al sistema de seguridad social integral en beneficio de sus trabajadores dependientes desde el inicio de la relación laboral y durante su vigencia. 
        .p-4.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 Estos aportes cubren tres componentes fundamentales: salud, pensión y riesgos laborales. Los pagos correspondientes deben realizarse de manera regular y en los plazos establecidos por la Ley, aplicando los porcentajes que la normativa vigente establece para cada uno de los conceptos.
        p Los aportes a la seguridad social son esenciales para garantizar que los trabajadores tengan acceso a servicios de salud, estén protegidos en caso de jubilación y cuenten con cobertura frente a accidentes de trabajo o enfermedades profesionales. Esta responsabilidad recae tanto sobre el empleador como sobre el trabajador, puesto que ambos contribuyen a financiar el sistema de seguridad social.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", alt="", data-aos="zoom-in")

    .titulo-figura.mb-4
      h5 Tabla 2
      span Porcentaje de aportes sociales

    .row.mb-5.justify-content-center
      .col-lg-10 
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead
              tr
                th.bg-color-3.text-center Aporte
                th.bg-color-3.text-center Porcentaje total
                th.bg-color-3.text-center Aporte del trabajador
                th.bg-color-3.text-center Aporte del empleador
            tbody
              tr
                td.text-bold Salud
                td 12,5 %
                td 4 %
                td 8,5 %
              tr
                td.text-bold Pensión
                td 16 %
                td 4 %
                td 12 %
              tr
                td.text-bold Riesgos laborales
                td 
                  p.mb-1 Riesgo I: 0,522 % 
                  p.mb-1 Riesgo II: 1,044 % 
                  p.mb-1 Riesgo III: 2,436 % 
                  p.mb-1 Riesgo IV: 4,350 % 
                  p.mb-1 Riesgo V: 6,960 % 

                td No aplica
                td 
                  p.mb-1 Riesgo I: 0,522 % 
                  p.mb-1 Riesgo II: 1,044 % 
                  p.mb-1 Riesgo III: 2,436 % 
                  p.mb-1 Riesgo IV: 4,350 % 
                  p.mb-1 Riesgo V: 6,960 % 

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Nota:</b> el Artículo 114 del ET, establece una exoneración de aportes al sistema general de salud y aportes parafiscales para aquellos empleadores personas naturales o jurídicas que tengan a su cargo trabajadores con una remuneración salarial individual inferior a diez (10) SMMLV.
    
    p.mb-4 Es importante tener en cuenta los siguientes aspectos al momento de realizar los aportes al sistema de seguridad social:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Aportes a salud y pensión" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Aportes a salud y pensión
            p Tanto el empleador como el trabajador dependiente, deben asumir una parte de los aportes a salud y pensión, según los porcentajes establecidos por la Ley. A diferencia de los trabajadores independientes, quienes deben asumir la totalidad de los aportes a estos conceptos, sin la participación del empleador.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/27.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Aportes de trabajadores independientes" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Aportes de trabajadores independientes
            p En el caso de los trabajadores independientes, estos deben realizar el aporte al sistema de seguridad social, solo si su actividad se encuentra clasificada dentro de los niveles de riesgo I, II o III. Si la actividad del trabajador independiente está catalogada en un nivel de riesgo IV o V, será responsabilidad del contratante efectuar este aporte en nombre del trabajador.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/28.png', alt='')

    #t_1_7.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.7] Aporte al sistema general de riesgos laborales 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p El aporte a riesgos laborales, es una responsabilidad exclusiva del empleador, quien debe asumir la totalidad del costo, sin realizar ningún descuento sobre el salario del trabajador. Además, el empleador es el encargado de seleccionar la Administradora de Riesgos Laborales (ARL), con la cual afiliará a sus empleados. 
        .p-4.bg-color-2.mb-3(data-aos="fade-right")
          p.mb-0 La afiliación al sistema de riesgos laborales y el pago de los correspondientes aportes, son obligatorios para el empleador. En caso de incumplimiento, el empleador asume la responsabilidad total por los gastos médicos y las indemnizaciones que puedan surgir si un trabajador sufre un accidente laboral. 
        p Esta medida asegura que los trabajadores se encuentren protegidos en caso de incidentes relacionados con su labor, garantizando su bienestar y la cobertura necesaria para su recuperación.
        p Afiliarse a este sistema comprende los siguientes beneficios: 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/29.png", alt="", data-aos="zoom-in")
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/30.svg", style="max-width: 90px").mx-auto
            .col-lg
             p.mb-0 Atención médica y quirúrgica.
    
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Pago de incapacidades sobre el 100 % del salario del trabajador.
    
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Indemnización en caso de pérdida de capacidad laboral.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/33.svg", style="max-width: 90px").mx-auto
            .col-lg
             p.mb-0 Acceso a pensión de invalidez y de sobrevivencia.
    
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/34.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Auxilio funerario.

    p.mb-4 El empleador debe realizar los aportes a la ARL en favor de sus trabajadores al finalizar cada mes, aplicando los porcentajes establecidos, según el nivel de riesgo de la actividad laboral.

    .titulo-figura.mb-4
      h5 Tabla 3
      span Porcentaje de aportes parafiscales

    .row.mb-5.justify-content-center
      .col-lg-10 
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead
              tr
                th.bg-color-3.text-center Nivel de riesgo
                th.bg-color-3.text-center Porcentaje de cotización
                th.bg-color-3.text-center Actividad
            tbody
              tr
                td.text-bold I
                td 0,522 %
                td Sector financiero, trabajos de oficina, administrativos, centros educativos, restaurantes, etc. 
              tr
                td.text-bold II
                td 1,044 %
                td Procesos de manufactura como fabricación de tapetes, tejidos, confecciones, flores artificiales, almacenes por departamentos, labores agrícolas, entre otros 
              tr
                td.text-bold III
                td 2,436 %
                td Procesos de manufactura como fabricación de agujas, alcohol y artículos de cuero. 
              tr
                td.text-bold IV
                td 4,350 %
                td Procesos de manufactura como fabricación de aceites, cerveza, vidrios, procesos de galvanización, transporte y servicios de vigilancia privada. 
              tr
                td.text-bold V
                td 6,960 %
                td Manejo de arenas, asbestos, bomberos, explosivos, construcción y explotación petrolera. 

    #t_1_8.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.8] Fondo de solidaridad pensional 

    .row.justify-content-center.align-items-center.mb-5
      p El Fondo de Solidaridad Pensional (FSP), es una cuenta estatal en la que se recauda un porcentaje del salario de los trabajadores que cumplen con los requisitos para estar sujetos a este aporte. El objetivo de este fondo es el de apoyar a las personas que no tienen acceso a los beneficios del sistema de pensiones, ya sea porque no cumplen con las condiciones para afiliarse o porque sus ingresos mensuales son inferiores a un (1) salario mínimo legal vigente (SMMLV).
      .col-lg-8 
        .p-4.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 Para realizar este aporte, es suficiente con que el trabajador esté afiliado al Sistema General de Pensiones, sin necesidad de estar vinculado a algún otro sistema o entidad adicional. El cálculo de la contribución se realiza a través de la Planilla Integrada de Liquidación de Aportes (PILA).
        p En la práctica, los empleadores deben descontar de los salarios de los trabajadores que devengan cuatro (4) SMMLV o más los porcentajes establecidos para este aporte, que se detallarán a continuación.
        p El Artículo 27 de la Ley 100 de 1993, señala los porcentajes que deben aportar dichos trabajadores, dependiendo del monto de su salario mensual: 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/35.png", alt="", data-aos="zoom-in")

    .titulo-figura.mb-4
      h5 Tabla 4
      span Porcentaje de aportes FSP

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        .tabla-a.color-acento-botones.mb-5 
          table.text-center.pst
            thead
              tr
                th.bg-color-3.text-center Salario
                th.bg-color-3.text-center Porcentaje
            tbody
              tr
                td Entre 4 y 16 SMMLV
                td 1,0 %
              tr
                td Entre 16 y 17 SMMLV
                td 1,2 %
              tr
                td Entre 17 y 18 SMMLV
                td 1,4 %
              tr
                td Entre 18 y 19 SMMLV
                td 1,6 %
              tr
                td Entre 19 y 20 SMMLV
                td 1,8 %
              tr
                td Superiores a 20 SMMLV
                td 2,0 %
      .col-lg-7 
        .px-4.py-5.bg-color-3.mb-3(data-aos="fade-right")
          h5 Aporte al fondo de solidaridad pensional para el caso de pensionados 
          p De conformidad con lo previsto en el literal d), del Numeral 2 del Artículo 27 de la Ley 100 de 1993, los pensionados deben aportar un 1 % al FSP cuando su mesada pensional oscile entre diez (10) y veinte (20) SMMLV, y un 2 % cuando esta sea superior a veinte (20) SMMLV. 
          h5 Aportes al fondo de solidaridad pensional para independientes
          p.mb-0 En el caso de los trabajadores independientes, como los prestadores de servicios, personas que trabajan por cuenta propia y rentistas de capital, tienen la obligación de realizar el aporte al Fondo de Solidaridad Pensional (FSP). 
          p.mb-0 Este aporte debe calcularse sobre el 40 % de los ingresos en el caso de los prestadores de servicios, y sobre el 40 % de la utilidad para los demás tipos de trabajadores independientes, siempre y cuando sus ingresos o utilidades sean iguales o superiores a cuatro (4) salarios mínimos legales vigentes (SMMLV).

    #t_1_9.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.9] Aportes parafiscales   

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/37.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/36.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los aportes parafiscales, son pagos obligatorios que los empleadores deben realizar a diversas entidades del Estado, específicamente a las Cajas de Compensación Familiar (CCF), el Instituto Colombiano de Bienestar Familiar (ICBF) y el Servicio Nacional de Aprendizaje (SENA). 
        p(data-aos="fade-left") El valor total de estos aportes corresponde al 9 % del costo mensual de la nómina de la empresa, y dicha contribución se distribuye entre las distintas instituciones mencionadas, según los porcentajes establecidos para cada una de ellas.


    .titulo-figura.mb-4
      h5 Tabla 5
      span Porcentaje de aportes parafiscales

    .row.mb-5.justify-content-center
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead
              tr
                th.bg-color-3.text-center Concepto
                th.bg-color-3.text-center Porcentaje
            tbody
              tr
                td CCF
                td 4 %
              tr
                td ICBF
                td 3 %
              tr
                td Sena
                td 2 %
              
    p.mb-5 Es importante señalar que los <b>aportes parafiscales</b> deben ser calculados sobre los valores que conforman el salario. Sin embargo, existen situaciones específicas en las que estos aportes no se deben efectuar, porque el trabajador no está recibiendo salario en esos momentos; algunos de estos son: 

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center.justify-content-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/38.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En período de incapacidad del trabajador.
    
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center.justify-content-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/39.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por disfrute o compensación de vacaciones.
    
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center.justify-content-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/40.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Auxilio de transporte legal y extralegal como base de liquidación.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center.justify-content-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/41.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Bonificaciones como base de liquidación.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/aportes-parafiscales.html " target="_blank" rel="noopener noreferrer") Aportes parafiscales  Gerencie.com. (2025, enero 27). Aportes parafiscales. Gerencie.com

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/nomina.html" target="_blank" rel="noopener noreferrer") Nómina Gerencie.com. (2025, enero 27). Aportes parafiscales. Gerencie.com
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://actualicese.com/ " target="_blank" rel="noopener noreferrer") Actualícese. (2025, enero 27). ABC de la nómina. Actualícese

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/9xZ85nwDVkA?si=ry_1RMMlAPsKmi8T " target="_blank" rel="noopener noreferrer") Asesorías y servicios integrales, C. Y. M. (2023, 15 de septiembre). ¿Pueden pagarme menos del salario mínimo? [Video]. Youtube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QcHAqxyvJ8k?si=x7vvjA5G4LzICrc2" target="_blank" rel="noopener noreferrer") María Cano virtual. (2021, 15 de enero). Liquidación de horas las extras y recargos. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/08ZbnME1gQw?si=-ZGxO5fPEB4Q1aDo" target="_blank" rel="noopener noreferrer") CYM Asesorías y servicios integrales. (2024, 1 de marzo). Aportes a la seguridad social en Colombia. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
