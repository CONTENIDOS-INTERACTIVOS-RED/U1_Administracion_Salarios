<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-5 La administración de los salarios y sueldos, es un componente necesario para el desarrollo y la sostenibilidad de las relaciones laborales dentro de cualquier organización. En el contexto colombiano, la legislación laboral establece una serie de normas que regulan no solo los salarios, sino también los derechos y obligaciones, tanto de los empleadores como de los trabajadores. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2
        .p-4.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 En esta unidad, nos adentraremos en el estudio de los elementos que constituyen el sistema de salarios en Colombia, con un enfoque específico en las normativas legales vigentes y los aspectos organizacionales que influyen en la remuneración de los trabajadores. Además, se estudiarán y expondrán los diferentes tipos de salario reconocidos en la legislación colombiana, los elementos que componen un salario, los conceptos que no se consideran salario y las modalidades de pago. 
        p.mb-0 En este mismo orden, se explican temas como los descuentos permitidos, los auxilios de transporte y conectividad, los aportes al sistema de seguridad social, las prestaciones sociales y las licencias, lo que permitirá al estudiante tener una comprensión integral de los aspectos que regulan la remuneración en el país. Al finalizar esta unidad, el estudiante comprenderá los elementos básicos de un sistema de salario, lo que le permitirá aplicar los conceptos aprendidos en beneficio, tanto del trabajador como de la empresa. 
    
      .col-lg-4.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", alt="", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través de este conocimiento, será capaz de gestionar, analizar y aplicar la legislación colombiana relacionada con los salarios, con una perspectiva que favorezca la legalidad, la equidad y la eficiencia organizacional.
        p(data-aos="fade-left") La unidad está estructurada en una serie de subtemas interrelacionados, que permiten profundizar los aspectos fundamentales de los salarios y sueldos, bajo la legislación colombiana. 
      
    p.mb-5(data-aos="fade-left") A continuación, se presenta un resumen de los subtemas que se tratarán en esta unidad:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5(data-aos="zoom-in")
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modalidades de salario
                p.text-center Principales formas de salario, como el salario mínimo legal vigente, el salario integral, el salario en especie y el salario a destajo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Elementos que constituyen un salario
                p.text-center Conceptos que conforman la base del salario, incluyendo la remuneración por descanso dominical.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Elementos que no constituyen un salario
                p.text-center Conceptos que no se consideran parte del salario.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Periodo de pago del salario
                p.text-center Plazos y condiciones de pago del salario, según la normativa colombiana.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Descuentos permitidos
                p.text-center Descuentos que pueden aplicarse al salario, incluyendo los autorizados por el trabajador, los embargos judiciales y otros casos específicos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Auxilios de transporte y conectividad
                p.text-center Se analizarán estos beneficios y su impacto en la remuneración del trabajador.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aportes al sistema de seguridad social
                p.text-center Aportes necesarios para la seguridad social, el fondo pensional y los parafiscales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Prestaciones sociales
                p.text-center Se explican las más relevantes, como cesantías, primas, entre otras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/intro/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Vacaciones, incapacidades y licencias
                p.text-center Se detallarán los derechos del trabajador en cuanto a vacaciones, licencias y casos de incapacidad laboral.
    
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/intro/4.png', alt='') 

        p(data-aos="fade-left") Esta unidad representa la oportunidad de profundizar conocimientos, realizando un impacto directo en el futuro profesional; comprender a fondo los aspectos legales y organizacionales relacionados con los salarios facilitará el desempeño con eficacia en cualquier área de recursos humanos, administración o gestión empresarial.
        p.mb-5(data-aos="fade-left") El conocimiento de la legislación laboral no solo es esencial para garantizar el cumplimiento de la normativa, sino también para fomentar un ambiente laboral justo, equitativo y productivo, donde los derechos del trabajador estén protegidos y las empresas puedan operar dentro de un marco legal seguro. 
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2
        .p-4.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 El éxito de esta asignatura dependerá, en gran medida, del interés, participación y compromiso con los temas que se aborden. Es por esto por lo que le invitamos a realizar lectura de temática así como cada actividad planteada en esta unidad asumiendo un rol proactivo, realizando lecturas complementarias, participando en discusiones y proponiendo soluciones prácticas a los casos presentados. 
        p.mb-0 La aplicación de estos conocimientos permitirá contribuir de manera significativa, al bienestar de los trabajadores y el éxito organizacional. El aprendizaje de esta unidad proporciona conocimientos técnicos, y herramientas valiosas para el desarrollo profesional en el campo de la administración de salarios.
    
      .col-lg-4.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/14.png", alt="", data-aos="zoom-in")

</template>
